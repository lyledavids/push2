import "./App.css";
import "./styles/css/style.min.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MainStuff from "./components/MainStuff";

const App = () => {
  const [holders, setHolders] = useState([]);
  const [rates, setRates] = useState([]);
  const [chartData, setChartData] = useState('');

  const getTokenHolders = async () => {
    const holderUrl =
      `https://api.covalenthq.com/v1/1/tokens/0xc00e94Cb662C3520282E6f5717214004A7f26888/token_holders/?key=${process.env.REACT_APP_COVALENTAPI}&page-size=12`;

    const response = await fetch(holderUrl);
    const parsedData = await response.json();

    setHolders(parsedData.data.items);
  };

  const getRateRequest = async () => {
    const rateUrl =
      `https://api.covalenthq.com/v1/pricing/tickers/?quote-currency=USD&format=JSON&tickers=comp,eth,btc&key=${process.env.REACT_APP_COVALENTAPI}`;

    const response = await fetch(rateUrl);
    const parsedData = await response.json();
    setRates(parsedData.data.items);
  };

  const fetchPrices = async () => {
    const response = await fetch(
      `https://api.covalenthq.com/v1/1/address/0x7587cAefc8096f5F40ACB83A09Df031a018C66ec/portfolio_v2/?key=${process.env.REACT_APP_COVALENTAPI}`
    );
    const parsedData = await response.json();
    
    setChartData({
      labels:parsedData.data.items[0].holdings.map((crypto) =>
        new Date(crypto.timestamp).toLocaleDateString()
      ),
      datasets: [
        {
          label: "COMP Price in USD $",
          data:parsedData.data.items[0].holdings.map((crypto) => crypto.quote_rate),
          borderColor: "#00506c",

          color: "#fff",
          pointBackgroundColor: "#00D395",
          pointRadius: 5,
          pointStyle: "circle",
          fill: false,
          scaleFontColor: "#fff",

          scales: {
            xAxes: [
              {
                gridLines: {
                  display: true,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  display: false,
                  color: "#fff",
                  scaleFontColor: "#fff",
                },
              },
            ],
          },
        },
      ],
    });
  };

  useEffect(() => {
    getTokenHolders();
    getRateRequest();
    fetchPrices();
  }, []);

  return (
    <>
      <Navbar />
      <MainStuff
        holders={holders}
        rates={rates}
        chartData={chartData}
      />
    </>
  );
};

export default App;
