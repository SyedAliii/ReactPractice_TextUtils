import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    // <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {props.aboutText}
            </Link>
          </li>
        </ul>
        <div>
          <button className="btn mx-2 my-2 p-3" style={{ backgroundColor: "black" }} onClick={() => props.additionDarkModes("dark")}></button>
          <button className="btn mx-2 my-2 p-3" style={{ backgroundColor: "white" }} onClick={() => props.additionDarkModes("light")}></button>
          <button className="btn mx-2 my-2 p-3" style={{ backgroundColor: "grey" }} onClick={() => props.additionDarkModes("grey")}></button>
          <button className="btn my-2 p-3" style={{ backgroundColor: "purple" }} onClick={() => props.additionDarkModes("purple")}></button>
          <button className="btn mx-2 my-2 p-3" style={{ backgroundColor: "white" }} onClick={() => props.additionDarkModes("white")}></button>
          <button className="btn mx-2 my-2 p-3" style={{ backgroundColor: "red" }} onClick={() => props.additionDarkModes("red")}></button>
        </div>
        {/* <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            enable Dark Mode
          </label>
        </div> */}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title here",
  aboutText: "About Text here",
};
