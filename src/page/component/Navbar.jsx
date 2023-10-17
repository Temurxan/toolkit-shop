import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark   mb-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            G38 Shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to={"/"}>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </Link>
              <Link to={"/admin"}>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Admin
                  </a>
                </li>
              </Link>
            </ul>
          </div>

          <Link to={"/basket"} className="btn btn-primary">
            basket <span>{props.basket.length}</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default connect(state=>state.productReducer)(Navbar) ;
