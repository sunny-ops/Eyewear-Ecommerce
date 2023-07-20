import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Navbar.css";

function NavbarShop() {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              alt="Logo"
              src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png"
              style={{ width: "85%" }}
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
                style={{ left: "10.6rem" }}
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="search"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                ></svg>
              </span>
              <div className="filters-toggle" role="presentation">
                <button className="button-muted button-small" type="button">
                  Filters &nbsp;
                  <span
                    role="img"
                    aria-label="filter"
                    className="anticon anticon-filter"
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="filter"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"></path>
                    </svg>
                  </span>
                </button>
              </div>

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

export default NavbarShop;
