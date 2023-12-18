import React, { useState } from "react";
import { Link } from "react-router-dom";
import bg from "../images/register.jpg";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    userType: "buyer",
    paymentMethod: "",
    cardNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("registeredUser", JSON.stringify(formData));
  };

  return (
    <div className="mx-auto my-24 max-w-xl">
      {" "}
      <div
        className="w-full h-full rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="card bg-transparent border-primary border-4 shadow-xl">
          <div className="card-body">
            <h1
              style={{ fontFamily: "arial" }}
              className="text-center text-2xl text-white font-extrabold"
            >
              Register
            </h1>
            <form onSubmit={handleRegister}>
              <div className="my-4">
                <label htmlFor="name" className="text-white font-bold">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  name="name"
                  className="input input-sm input-bordered w-full"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-4">
                <label htmlFor="email" className="text-white font-bold">
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
                <label htmlFor="password" className="text-white font-bold">
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
                <label htmlFor="userType" className="text-white font-bold">
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
                <label className="text-white font-bold">Payment Method:</label>
                <div className="grid grid-cols-3">
                  <div>
                    {" "}
                    <input
                      type="radio"
                      id="creditCard"
                      name="paymentMethod"
                      value="creditCard"
                      checked={formData.paymentMethod === "creditCard"}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="creditCard"
                      className="text-white font-black"
                    >
                      Credit Card
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="BKash"
                      name="paymentMethod"
                      value="BKash"
                      checked={formData.paymentMethod === "BKash"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="BKash" className="text-white font-black">
                      BKash
                    </label>{" "}
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="debitCard"
                      name="paymentMethod"
                      value="debitCard"
                      checked={formData.paymentMethod === "debitCard"}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="debitCard"
                      className="text-white font-black"
                    >
                      Debit Card
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <label htmlFor="cardNumber" className="text-white font-bold">
                  Card Number:
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="eg:1111222233334444"
                  pattern="[0-9]{16}"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="input input-sm input-bordered w-full"
                />
              </div>
              <div className="my-4">
                <button
                  type="submit"
                  className="btn btn-sm text-xs w-full bg-primary text-white font-bold"
                >
                  Register
                </button>
                <p className="text-center mt-4">
                  <small className="text-base  text-white font-semibold">
                    Already have an account?
                    <Link className="text-white" to="/login">
                      Login
                    </Link>
                  </small>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
