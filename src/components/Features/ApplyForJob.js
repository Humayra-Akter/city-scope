import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ApplyForJob = () => {
  const { jobId } = useParams();
  const [jobInfo, setJobInfo] = useState({});

  useEffect(() => {
    fetch("/jobAnnouncement.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedJob = data.jobAnnouncements.find(
          (job) => job.id === jobId
        );
        setJobInfo(selectedJob || {});
      })
      .catch((error) => console.error("Error fetching job info:", error));
  }, [jobId]);

  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    cv: "",
    image: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-md shadow-lg my-8 p-4">
      <h2 className="text-2xl text-center text-primary font-bold mb-14">
        Apply for Job -{" "}
        <span className="text-black uppercase">{jobInfo.title}</span>
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Fields populated with job information */}
        <div className="mb-4">
          <p className="block text-lg text-primary font-bold">
            Job Title : <span className="text-black">{jobInfo.title}</span>
          </p>
        </div>
        <div className="mb-4">
          <p className="block text-lg text-primary font-bold">
            Location : <span className="text-black">{jobInfo.location}</span>
          </p>
        </div>

        {/* User input fields */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm text-primary font-bold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm text-primary font-bold"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cv" className="block text-sm text-primary font-bold">
            CV (Upload)
          </label>
          <input
            type="file"
            id="cv"
            name="cv"
            onChange={handleFileChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Submit button */}
        <div className="mt-4 flex items-center justify-center">
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForJob;
