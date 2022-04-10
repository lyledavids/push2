import React from "react";
import { Line } from "react-chartjs-2";
import truncateEthAddress from 'truncate-eth-address'

// percentage(holding, total) {
//   return (100 * holding) / total;
// };

const MainStuff = (props) => {
  
  return (
    <div>
      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-3 mb-5 py-3">
        <div className="container mt-5">
          <div className="row">
            {props.rates.map((rate) => {
              return (
                <div className="col-lg-3 col-sm-6">
                  <div className="card-box">
                    <div className="inner">
                      <h3>${rate.quote_rate.toFixed(2)}</h3>
                      <p>
                        {rate.contract_name} ({rate.contract_ticker_symbol})
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-3">
        <h1 style={{ color: "#00D395", textAlign: "center" }}>
            Price action of #COMP
          </h1>
        <div className="row">
          <div className="col-sm-9">
            <div>{props.chartData && <Line data={props.chartData} />}</div>
          </div>
        </div>
      </section>


      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-3 mb-5 py-3">

        <h1 style={{ color: "white", textAlign: "center" }}>
            Top #COMP Token Holders
          </h1>
        <div className="container mt-5">
          <div className="row">
            {props.holders.map((holder) => {
              return (
                  <div className="col-lg-3 col-sm-6">
                    <div className="card-box">
                      <div className="inner">
                        {/* <h3>{holder.address}</h3> */}
                        <h3>{truncateEthAddress(holder.address)}</h3>
                        <p>
                          Holds {holder.balance.slice(0, -holder.contract_decimals)} COMP Tokens
                        </p>
                        <p>
                          {(100 * holder.balance)/holder.total_supply} %
                        </p>
                      </div>
                    </div>
                  </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-3 mb-5 py-3">

        <h1 style={{ color: "white", textAlign: "center" }}>
            Governance
          </h1>
        <div className="container mt-5">
  
        </div>
      </section>

      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-3 mb-5 py-3">

        <h1 style={{ color: "white", textAlign: "center" }}>
            Treasury Transaction Flow
          </h1>
        <div className="container mt-5">
  
        </div>
      </section>

      <footer className="page-footer font-small mt-5">
        <div className="footer-copyright text-center py-3 ">
          <a href="https://ethglobal.com">DAOHacks | Push</a>
        </div>
      </footer>
    </div>
  );
};

export default MainStuff;
