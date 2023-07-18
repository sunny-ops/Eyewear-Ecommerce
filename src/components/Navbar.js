import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              alt="Logo"
              src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Featured</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Recommended</a>
              </li>
            </ul>
            <div
              className="d-flex"
              role="search"
              style={{ position: "relative" }}
            >
              <span
                role="img"
                aria-label="search"
                className="anticon anticon-search searchbar-icon"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="search"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                </svg>
              </span>
              <input
                className="search-input searchbar-input me-4"
                type="search"
                placeholder="Search Products..."
              />
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-baseline">
                <li className="me-5">
                  <span
                    role="img"
                    aria-label="shopping"
                    className="anticon anticon-shopping"
                    style={{ fontSize: "2.4rem" }}
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="shopping"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></path>
                    </svg>
                  </span>
                </li>
                <li className="nav-item ms-5 me-3">
                  <a
                    className="nav-link active button"
                    aria-current="page"
                    href="#"
                  >
                    Sign&nbsp;Up
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled button button-muted" href="#">
                    Sign&nbsp;In
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
