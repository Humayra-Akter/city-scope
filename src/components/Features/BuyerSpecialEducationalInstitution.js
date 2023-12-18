import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BuyerSpecialEducationalInstitution = () => {
  const [eduInstitutions, setEduInstitutions] = useState([]);
  const [filteredInstitutions, setFilteredInstitutions] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    job_vacancy: "",
    distance_from_place: "",
    area: "",
  });
  const [uniqueAreas, setUniqueAreas] = useState([]);

  useEffect(() => {
    fetch("./educationalInstitution.json")
      .then((res) => res.json())
      .then((data) => {
        setEduInstitutions(data.educational_institutions || []);

        const areas = Array.from(
          new Set(
            data.educational_institutions.map((inst) => inst.location.area)
          )
        );
        setUniqueAreas(areas);
      });
  }, []);

  const handleSearch = () => {
    const filteredInstitutions = eduInstitutions.filter((institution) => {
      return (
        (searchCriteria.job_vacancy === "" ||
          institution.job_vacancy ===
            (searchCriteria.job_vacancy === "true")) &&
        (searchCriteria.distance_from_place === "" ||
          institution.distance_from_place <=
            Number(searchCriteria.distance_from_place)) &&
        (searchCriteria.area === "" ||
          institution.location.area
            .toLowerCase()
            .includes(searchCriteria.area.toLowerCase()))
      );
    });

    setFilteredInstitutions(filteredInstitutions);
  };

  useEffect(() => {
    setFilteredInstitutions(eduInstitutions);
  }, [eduInstitutions]);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-md shadow-lg my-8 p-4">
      {/* Search and filter options */}
      <div className="mb-4">
        {/* search by job vacancy  */}
        <label className="mr-2">Job Availability:</label>
        <select
          value={searchCriteria.job_vacancy}
          className="input input-bordered input-sm"
          onChange={(e) =>
            setSearchCriteria({
              ...searchCriteria,
              job_vacancy: e.target.value,
            })
          }
        >
          <option value="">All</option>
          <option value="true">Available</option>
          <option value="false">Not Available</option>
        </select>

        {/* search by distance  */}
        <label className="ml-4 mr-2">Distance (km):</label>
        <input
          type="number"
          className="input input-bordered input-sm"
          value={searchCriteria.distance_from_place}
          onChange={(e) =>
            setSearchCriteria({
              ...searchCriteria,
              distance_from_place: e.target.value,
            })
          }
        />

        {/* search by area  */}
        <label className="ml-4 mr-4">Area:</label>
        <select
          value={searchCriteria.area}
          className="input input-bordered input-sm w-36"
          onChange={(e) =>
            setSearchCriteria({
              ...searchCriteria,
              area: e.target.value,
            })
          }
        >
          <option value="">All Areas</option>
          {uniqueAreas.map((area, index) => (
            <option key={index} value={area}>
              {area}
            </option>
          ))}
        </select>

        <button
          className="bg-primary ml-4 justify-end text-white px-4 py-2 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {filteredInstitutions.map((institution) => (
        <div key={institution.id}>
          <h2 className="text-xl mb-2 mt-10 text-primary font-bold">
            {institution.name} Details
          </h2>
          <img
            src={institution.image}
            alt={institution.name}
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          {institution.location && (
            <>
              <p className="text-gray-600 mb-2">
                Location: {institution.location.city},{" "}
                {institution.location.area}
              </p>
              <p className="text-gray-600 mb-2">
                Distance from place: {institution.distance_from_place} km
              </p>
            </>
          )}
          {/* Additional details */}
          {institution.student_info && (
            <p className="text-gray-600 mb-2">
              Student Info: Total Students -{" "}
              {institution.student_info.total_students}, Undergraduates -{" "}
              {institution.student_info.undergraduates}, Postgraduates -{" "}
              {institution.student_info.postgraduates}
            </p>
          )}
          {/* Add similar checks for other properties */}
          <p className="text-gray-600 mb-2">
            Short Detail: {institution.short_detail}
          </p>
          <p className="text-gray-600 mb-2">
            Accommodation: {institution.accommodation ? "Yes" : "No"}
          </p>
          <p className="text-gray-600 mb-2">
            Job Vacancy: {institution.job_vacancy ? "Yes" : "No"}
          </p>
          <p className="text-gray-600 mb-2">
            Faculty Number: {institution.faculty_number}
          </p>
          <p className="text-gray-600 mb-2">
            Staff Number: {institution.staff_number}
          </p>
          <p className="text-gray-600 mb-2">
            Established Year: {institution.established_year}
          </p>
          <p className="text-gray-600 mb-2">
            Accreditation: {institution.accreditation}
          </p>
          <p className="text-gray-600 mb-2">
            Website:{" "}
            <a
              href={institution.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {institution.website}
            </a>
          </p>
          {institution.contact_info && (
            <p className="text-gray-600 mb-2">
              Contact Info: Email - {institution.contact_info.email}, Phone -{" "}
              {institution.contact_info.phone}
            </p>
          )}
          {institution.job_vacancy && (
            <Link
              to="/allJobs"
              className="bg-primary text-white px-4 py-2 rounded"
            >
              Apply for Job
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default BuyerSpecialEducationalInstitution;
