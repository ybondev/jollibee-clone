import React from "react";

import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img
            src="https://queen.jollibee.com.ph/2022/08/bmpzMYBj-jollibee-logo-2x.png"
            alt="..."
            className="img-fluid logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <FaBars className="icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Delivery
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Locations
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Menu
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#" className="dropdown-item">
                    View Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    Multi-Delivery
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Promotions
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#" className="dropdown-item">
                    Promos
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    Gift Cards
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-link btn-order">
              <a href="#" className="nav-item">
                Order Now
              </a>
            </li>
          </ul>
        </div>
        <a href="#" className="btn-secondary-order">
          Order Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
