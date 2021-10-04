import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
          {/* This is header navigation section */}
            <nav class="navbar navbar-expand-lg navbar-primary bg-dark  w-100">
          <div class="container-fluid ">
            <div></div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div>
                <h1 className="text ps-5 fw-bold">Language council club</h1>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto pt-2 mt-2 mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink activeClassName="nav-link" exact to="/home">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink activeClassName="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink activeClassName="nav-link" to="/service">
                    Services
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink activeClassName="nav-link" to="/instructor">
                    Instructor
                  </NavLink>
                </li>
                
                
              </ul>
              <div class="hero-image">
 
            </div>
          </div>
          </div>
         
        </nav>
        </div>
      
    );
};

export default Header;