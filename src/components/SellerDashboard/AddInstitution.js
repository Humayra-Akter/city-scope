import React, { useState } from "react";

const AddInstitution = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    location: {
      city: "",
      area: "",
    },
    distance_from_place: 0,
    student_info: {
      total_students: 0,
      undergraduates: 0,
      postgraduates: 0,
    },
    short_detail: "",
    accommodation: false,
    job_vacancy: false,
    faculty_number: 0,
    staff_number: 0,
    established_year: 0,
    accreditation: "",
    website: "",
    contact_info: {
      email: "",
      phone: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can send the data to your server or perform other actions)
    console.log("Form submitted:", formData);
    // Reset the form after submission
    setFormData({
      name: "",
      image: "",
      location: {
        city: "",
        area: "",
      },
      distance_from_place: 0,
      student_info: {
        total_students: 0,
        undergraduates: 0,
        postgraduates: 0,
      },
      short_detail: "",
      accommodation: false,
      job_vacancy: false,
      faculty_number: 0,
      staff_number: 0,
      established_year: 0,
      accreditation: "",
      website: "",
      contact_info: {
        email: "",
        phone: "",
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-md shadow-lg my-8 p-4">
      <h2 className="text-2xl mb-4 text-center text-primary font-bold">
        Add Your Institution
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Institution Name */}
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2">
            Institution Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2">
            Location *
          </label>
          <div className="flex">
            <input
              type="text"
              name="city"
              value={formData.location.city}
              onChange={handleChange}
              placeholder="City"
              className="input input-bordered w-full mr-2"
              required
            />
            <input
              type="text"
              name="area"
              value={formData.location.area}
              onChange={handleChange}
              placeholder="Area"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Distance from Place */}
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2">
            Distance from Place (km) *
          </label>
          <input
            type="number"
            name="distance_from_place"
            value={formData.distance_from_place}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Student Information */}
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2">
            Student Information *
          </label>
          <div className="flex">
            <input
              type="number"
              name="total_students"
              value={formData.student_info.total_students}
              onChange={handleChange}
              placeholder="Total Students"
              className="input input-bordered w-full mr-2"
              required
            />
            <input
              type="number"
              name="undergraduates"
              value={formData.student_info.undergraduates}
              onChange={handleChange}
              placeholder="Undergraduates"
              className="input input-bordered w-full mr-2"
              required
            />
            <input
              type="number"
              name="postgraduates"
              value={formData.student_info.postgraduates}
              onChange={handleChange}
              placeholder="Postgraduates"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Short Detail */}
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2">
            Short Detail *
          </label>
          <textarea
            name="short_detail"
            value={formData.short_detail}
            onChange={handleChange}
            className="input input-bordered w-full h-20 resize-none"
            required
          ></textarea>
        </div>

        {/* Accommodation */}
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2">
            Accommodation *
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="accommodation"
              checked={formData.accommodation}
              onChange={handleChange}
              className="form-checkbox text-primary"
            />
            <span className="ml-2">Available</span>
          </label>
        </div>

        {/* Job Vacancy */}
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2">
            Job Vacancy *
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="job_vacancy"
              checked={formData.job_vacancy}
              onChange={handleChange}
              className="form-checkbox text-primary"
            />
            <span className="ml-2">Available</span>
          </label>
        </div>

        {/* Faculty and Staff Information */}
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2">
            Faculty and Staff Information *
          </label>
          <div className="flex">
            <input
              type="number"
              name="faculty_number"
              value={formData.faculty_number}
              onChange={handleChange}
              placeholder="Faculty Number"
              className="input input-bordered w-full mr-2"
              required
            />
            <input
              type="number"
              name="staff_number"
              value={formData.staff_number}
              onChange={handleChange}
              placeholder="Staff Number"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Established Year */}
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2">
            Established Year *
          </label>
          <input
            type="number"
            name="established_year"
            value={formData.established_year}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Accreditation */}
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2">
            Accreditation *
          </label>
          <input
            type="text"
            name="accreditation"
            value={formData.accreditation}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Website */}
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2">
            Website *
          </label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Contact Information */}
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2">
            Contact Information *
          </label>
          <div className="flex">
            <input
              type="email"
              name="email"
              value={formData.contact_info.email}
              onChange={handleChange}
              placeholder="Email"
              className="input input-bordered w-full mr-2"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.contact_info.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-primary w-40 text-white px-4 py-2 rounded-md"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInstitution;
