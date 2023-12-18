import React, { useState } from "react";

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
    localStorage.setItem("registeredUser", JSON.stringify(formData));
  };

  return (
    <div className="mx-auto my-24 max-w-2xl">
      <div className="card bg-transparent border-primary border-4 shadow-xl">
        <div className="card-body">
          <h1
            style={{ fontFamily: "arial" }}
            className="text-center text-2xl text-blue-700 font-extrabold"
          >
            Register
          </h1>
          <form onSubmit={handleRegister}>
            <div className="my-4">
              <label htmlFor="name" className="text-blue-700 font-bold">
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
              <label htmlFor="email" className="text-blue-700 font-bold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="my-4">
              <label htmlFor="password" className="text-blue-700 font-bold">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="my-4">
              <label htmlFor="userType" className="text-blue-700 font-bold">
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
              <label className="text-blue-700 font-bold">Payment Method:</label>
              <div>
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  value="creditCard"
                  checked={formData.paymentMethod === "creditCard"}
                  onChange={handleInputChange}
                />
                <label htmlFor="creditCard">Credit Card</label>
              </div>
            </div>
            <div className="my-4">
              <label htmlFor="cardNumber" className="text-blue-700 font-bold">
                Card Number:
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                pattern="[0-9]{16}" // Add your desired card number pattern
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
