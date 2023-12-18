import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "buyer",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("loggedInUser", JSON.stringify(formData));
    navigate("/");
  };

  return (
    <div className="mx-auto my-24 max-w-md">
      <div className="card bg-transparent border-primary border-4 shadow-xl">
        <div className="card-body">
          <h1
            style={{ fontFamily: "arial" }}
            className="text-center text-2xl text-primary font-extrabold"
          >
            Login
          </h1>
          <form onSubmit={handleLogin}>
            <div className="my-4">
              <label htmlFor="email" className="text-primary font-bold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input input-sm input-bordered w-full"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="my-4">
              <label htmlFor="password" className="text-primary font-bold">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="input input-sm input-bordered w-full"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="my-4">
              <label htmlFor="userType" className="text-primary font-bold">
                User Type:
              </label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleInputChange}
                className="input input-sm input-bordered w-full"
              >
                <option value="seller">Seller</option>
                <option value="buyer">Buyer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="my-4">
              <button
                type="submit"
                className="btn btn-sm text-xs w-full bg-primary text-white font-bold"
              >
                Login
              </button>
              <p className="text-center mt-4">
                <small className="text-base font-semibold">
                  Don't have an account? 
                  <Link className="text-primary" to="/register">
                     Register
                  </Link>
                </small>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
