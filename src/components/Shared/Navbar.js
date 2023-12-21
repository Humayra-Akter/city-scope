import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Navbar = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const { userType } = loggedInUser || {};

  const handleSignOut = () => {
    const confirmSignOut = window.confirm("Are you sure you want to sign out?");
    if (confirmSignOut) {
      localStorage.removeItem("loggedInUser");
      window.location.reload();
    }
  };

  return (
    <div className="bg-primary text-white font-bold">
      <div className="navbar sticky">
        <div className="navbar-start">
          <Link to="/">
            <img className="ml-10 w-36" src={logo} alt="" />
          </Link>
        </div>

        <div className="navbar-end pr-10">
          <Link className="pr-10" to="/freeFeatures">
            <button>Features</button>
          </Link>
          <Link className="pr-10" to="/about">
            <button>About</button>
          </Link>
          {userType === "seller" && (
            <Link to="/sellerDashboard">
              <button className="pr-10">Seller-Dashboard</button>
            </Link>
          )}
          {userType === "buyer" && (
            <Link to="/allJobs">
              <button className="pr-10">Search-Job</button>
            </Link>
          )}
          {loggedInUser ? (
            <button className="pr-10" onClick={handleSignOut}>
              Sign-out
            </button>
          ) : (
            <Link to="/register">
              <button className="pr-10">Register</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
