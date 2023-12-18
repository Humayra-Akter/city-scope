import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const SellerDashboard = () => {
  return (
    <div>
      <div className="bg-secondary h-14 text-white font-bold">
        <div className="flex items-center justify-center mt-1">
          <Link to="/sellerDashboard">
            <button className="pr-10 uppercase mt-3">Add-Institutions</button>
          </Link>
          <Link to="/sellerDashboard/jobAnnounce">
            <button className="uppercase mt-3">Announce-Job</button>
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
