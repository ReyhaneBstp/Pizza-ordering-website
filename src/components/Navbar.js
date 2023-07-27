import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import Account from "../pages/Account";

const Navbar = ({ onAccountClick }) => {
  const [collapseOpen, setCollapseOpen] = useState(false);

  const hideCollapseAndOpenAccount = () => {
    setCollapseOpen(false);
    onAccountClick();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <img className="logo" src={Logo} alt="Pizza" />
      <button
        className={`navbar-toggler${collapseOpen ? "" : " collapsed"}`}
        type="button"
        onClick={() => setCollapseOpen(!collapseOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`navbar-collapse${collapseOpen ? "" : " collapse"}`}
        id="navbarNavAltMarkup"
      >
        <div className={`navbar-nav${collapseOpen ? "" : " flex"}`}>
          <div className="navbar-nav">
            <Link
              className="nav-item nav-link" to="/" data-bs-dismiss="collapse"
              onClick={() => {
                if (collapseOpen) setCollapseOpen(false);
              }}
              data-bs-auto-close="outside"
            >
              Home
            </Link>
            <Link
              className="nav-item nav-link" to="/menu" data-bs-dismiss="collapse"
              onClick={() => {
                if (collapseOpen) setCollapseOpen(false);
              }}
              data-bs-auto-close="outside"
            >
              Menu
            </Link>
            <Link
             className="nav-item nav-link" to="/make" data-bs-dismiss="collapse"
              onClick={() => {
                if (collapseOpen) setCollapseOpen(false);
              }}
              data-bs-auto-close="outside"
            >
              Build Your Own Meal
            </Link>
            <Link
              className="nav-item nav-link" to="/about" data-bs-dismiss="collapse"
              onClick={() => {
                if (collapseOpen) setCollapseOpen(false);
              }}
              data-bs-auto-close="outside"
            >
              About us
            </Link>
            <Link
              className="nav-item nav-link" to="/contact" data-bs-dismiss="collapse"
              onClick={() => {
                if (collapseOpen) setCollapseOpen(false);
              }}
              data-bs-auto-close="outside"
            >
              Contact
            </Link>
          </div>
          <div className="navbar-nav">
            <button
              className="nav-item nav-link acc"
              onClick={hideCollapseAndOpenAccount}
              data-bs-auto-close="outside"
            >
              My account
            </button>
            <Link
              className="nav-link"
              to="/cart"
              onClick={() => {
                if (collapseOpen) setCollapseOpen(false);
              }}
              data-bs-auto-close="outside"
            >
              <i className="fa fa-shopping-cart"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;