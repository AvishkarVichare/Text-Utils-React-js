import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-${props.mode}`}>
      <div className="container-fluid">
        <Link
          className={`navbar-brand  text-${
            props.mode === "light" ? "black" : "light"
          }`}
          to="/"
        >
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon  navbar-dark "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <Link
                className={`nav-link active  text-${
                  props.mode === "light" ? "black" : "light"
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link active  text-${
                  props.mode === "light" ? "black" : "light"
                }`}
                to="/about"
              >
                {props.about}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
      
          </form> */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onClick={props.toggleDarkMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "black" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.btnName}
            </label>
          </div>
          {/* <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toggleBlueModeFun} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==="light"?"black":"light"}`} htmlFor="flexSwitchCheckDefault">Blue Theme</label>
</div> */}
        </div>
      </div>
    </nav>
  );
}

// Navbar.propTypes ={
//     title :PropTypes.string
// }

Navbar.defaultProps = {
  title: "company name",
  about: "Section",
};
