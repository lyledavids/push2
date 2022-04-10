import React from "react";
import logo from "../images/compound.png";

const Navbar = (props) => {
  return (
    <div>
      <header className="navbar navbar-dark fixed-top flex-md-nowrap p-0">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">
          <img
            src={logo}
            alt=""
            width="50"
            height="44"
            className="d-inline-block align-text-center me-2"
          />
          Compound DAO Analytics
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>



      </header>
    </div>
  );
};

export default Navbar;
