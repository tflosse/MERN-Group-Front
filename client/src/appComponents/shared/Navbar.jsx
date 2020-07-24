import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = (props) => {
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-sm navbar-light">
        <a className="navbar-brand" href="/home">
          <img
            className="Logo"
            src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1595024102/Untitled_2_tcxox8.jpg"
            alt="Ideate Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav navbar-light">
            <Link to="/home" className="navLink ideas">
              <div
                className="togglewrapperrr"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                HOME
              </div>
            </Link>
            <Link to="/ideacreate" className="navLink">
              <div
                className="togglewrapperrr"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                NEW IDEA
              </div>
            </Link>
            <Link to="/about" className="navLink about">
              <div
                className="togglewrapperrr"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                ABOUT
              </div>
            </Link>
            
              <Link to="/" className="navLink">
                <div
                  className="togglewrapperrr account-info"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <div className="ProfileContainer">
                    <span className="material-icons">account_circle</span>{" "}
                    <span className="nav-username"> {props.username}</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        
      </nav>
    </header>
  );
};

export default NavBar;
