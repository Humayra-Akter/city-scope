import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllJobs = () => {
  const navigate = useNavigate();
  const [jobAnnouncements, setJobAnnouncements] = useState([]);

  useEffect(() => {
    fetch("./jobAnnouncement.json")
      .then((res) => res.json())
      .then((data) => setJobAnnouncements(data.jobAnnouncements || []));
  }, []);

  const handleApplyJob = (jobId) => {
    console.log(jobId);
    navigate(`/applyForJob/${jobId}`);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-md shadow-lg my-8 p-4">
      <h2 className="text-2xl text-center text-primary font-bold mb-4">
        Job Announcements
      </h2>
      {jobAnnouncements.map((job) => (
        <div key={job.id} className="mb-6">
          <h3 className="text-xl text-secondary font-bold">{job.title}</h3>
          <p className="text-black mb-2">{job.description}</p>
          <p className="text-black mb-2">Location: {job.location}</p>
          <p className="text-black mb-2">Company: {job.company}</p>
          <p className="text-black mb-2">
            Posted Date: {job.postedDate} | Expiration Date:{" "}
            {job.expirationDate}
          </p>
          <button
            className="bg-primary text-white px-4 py-2 rounded"
            onClick={() => handleApplyJob(job.id)}
          >
            Apply Job
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllJobs;
