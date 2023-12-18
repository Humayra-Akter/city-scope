import React from "react";

const JobAnnounce = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the logic to post the job announcement
    // You can access form data using the state or by using refs
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-md shadow-lg my-8 p-4">
      <h2 className="text-2xl text-center mb-4 text-primary font-bold">
        Post a Job Announcement
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-primary font-bold mb-2">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-primary font-bold mb-2">
            Job Description
          </label>
          <textarea
            name="jobDescription"
            className="input input-bordered w-full h-20 resize-none"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-primary font-bold mb-2">Location</label>
          <input
            type="text"
            name="location"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-primary font-bold mb-2">Company</label>
          <input
            type="text"
            name="company"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-primary font-bold mb-2">
            Posted Date
          </label>
          <input
            type="date"
            name="postedDate"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-primary font-bold mb-2">
            Expiration Date
          </label>
          <input
            type="date"
            name="expirationDate"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-md"
          >
            Post Job Announcement
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobAnnounce;
