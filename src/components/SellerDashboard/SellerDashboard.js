import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const SellerDashboard = () => {
  return (
    <div>
      <div className="bg-secondary h-14 text-white font-bold">
        <div className="navbar-end pr-10">
          <Link className="pr-10" to="/freeFeatures">
            <button>Features</button>
          </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default SellerDashboard;
