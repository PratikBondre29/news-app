import React from "react";
import "./Navbar.css";

const Navbar = ({ handleOption }) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand disabled" href="#gn">
            Search by Categories
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  onClick={() => handleOption("business")}
                  href="#business"
                >
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#entertainment"
                  onClick={() => handleOption("entertainment")}
                >
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#health"
                  onClick={() => handleOption("health")}
                >
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#science"
                  onClick={() => handleOption("science")}
                >
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#sports"
                  onClick={() => handleOption("sports")}
                >
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#technology"
                  onClick={() => handleOption("technology")}
                >
                  Technology
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
