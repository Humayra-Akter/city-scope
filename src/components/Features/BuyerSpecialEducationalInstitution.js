import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BuyerSpecialEducationalInstitution = () => {
  const [eduInstitutions, setEduInstitutions] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    jobAvailability: "",
    distance: "",
    area: "",
  });
  const [uniqueAreas, setUniqueAreas] = useState([]);

   useEffect(() => {
     fetch("./educationalInstitution.json")
       .then((res) => res.json())
       .then((data) => {
         setEduInstitutions(data.educational_institutions || []);

         // Extract unique areas
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
        (searchCriteria.jobAvailability === "" ||
          institution.job_vacancy ===
            (searchCriteria.jobAvailability === "true")) &&
        (searchCriteria.distance === "" ||
          institution.distance_from_place <= Number(searchCriteria.distance)) &&
        (searchCriteria.area === "" ||
          institution.location.area
            .toLowerCase()
            .includes(searchCriteria.area.toLowerCase()))
      );
    });

    setEduInstitutions(filteredInstitutions);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-md shadow-lg my-8 p-4">
      <div className="mb-4">
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

        <label className="ml-4 mr-2">Area:</label>
        <select
          value={searchCriteria.area}
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
          className="bg-primary justify-end text-white px-4 py-2 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {eduInstitutions.map((institution) => (
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
          {/* Conditionally render the "Apply for Job" button */}
          {institution.job_vacancy && (
            <button className="bg-primary text-white px-4 py-1 rounded">
              Apply for Job
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default BuyerSpecialEducationalInstitution;
