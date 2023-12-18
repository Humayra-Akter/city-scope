import React from "react";

const JobAnnounce = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-lg my-8 p-4">
      <h2 className="text-2xl text-center mb-4 text-primary font-bold">
        Post a Job Announcement
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Job Description
          </label>
          <textarea
            name="jobDescription"
            className="input input-bordered w-full h-20 resize-none"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-full"
          >
            Post Job Announcement
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobAnnounce;
