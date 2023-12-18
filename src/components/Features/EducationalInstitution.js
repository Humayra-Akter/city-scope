import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EducationalInstitution = () => {
  const [eduInstitutions, setEduInstitutions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("./educationalInstitution.json")
      .then((res) => res.json())
      .then((data) => {
        setEduInstitutions(data.educational_institutions);
      });
  }, []);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const redirectToBuyerSpecialEducationalInstitutions = () => {
    if (loggedInUser && loggedInUser.userType === "buyer") {
      navigate("/buyerSpecialEducationalInstitutions");
    } else {
      // Redirect to login or any other page for non-buyer users
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="items-center justify-center flex mt-10">
        <button
          className="bg-primary text-white text-sm p-1 rounded-lg w-40 text-center font-semibold"
          onClick={redirectToBuyerSpecialEducationalInstitutions}
        >
          View Details
        </button>
      </div>
      <div className="max-w-3xl mx-auto bg-white rounded-md overflow-hidden shadow-md my-8">
        {eduInstitutions.map((institution) => (
          <div key={institution.name} className="p-4 flex">
            <img
              src={institution.image}
              alt={institution.name}
              className="w-96 h-40 object-cover mb-4 rounded-md"
            />
            <div className="ml-7">
              <h2 className="text-xl font-semibold mt-10 text-primary">
                {institution.name}
              </h2>
              <p className="text-gray-600 mb-2">
                Location: {institution.location?.city},
                {institution.location?.area}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalInstitution;
