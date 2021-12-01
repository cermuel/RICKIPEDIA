
   
import React from "react";
import { NavLink, Link } from "react-router-dom";
//import "../../App.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
        <img src="logo.png" className="img-fluid" alt="RickiPedia" style={{width: "17%"}} />Ricki<a className="text-primary" href="https://www.cermuel.000webhostapp.com" target="_blank" style={{textDecoration: "none"}}>Pedia</a>
        </Link>
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars open text-dark"></span>
          <span class="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/episodes" className="nav-link">
              Episode
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/location"
            >
              Location
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;







































{/* <img src="logo.png" className="img-fluid" alt="RickiPedia" style={{width: "17%"}} />Ricki<a className="text-primary" href="https://www.cermuel.000webhostapp.com" target="_blank" style={{textDecoration: "none"}}>Pedia</a> */}