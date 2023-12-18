import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const generateRandomColorWithDuration = (duration) => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return `color ${duration}s ease, background-color ${duration}s ease`;
};

const Districts = () => {
  const navigate = useNavigate();
  const divisions = {
    Dhaka: {
      subDivisions: [
        {
          name: "Dhaka North",
          areas: ["Area A", "Area B", "Area C"],
        },
        {
          name: "Dhaka South",
          areas: ["Area X", "Area Y", "Area Z"],
        },
      ],
    },
    Chattogram: {
      subDivisions: [
        {
          name: "Chattogram North",
          areas: ["Area P", "Area Q", "Area R"],
        },
        {
          name: "Chattogram South",
          areas: ["Area M", "Area N", "Area O"],
        },
      ],
    },
    Barishal: {
      subDivisions: [
        {
          name: "Barishal North",
          areas: ["Area P", "Area Q", "Area R"],
        },
        {
          name: "Barishal South",
          areas: ["Area M", "Area N", "Area O"],
        },
      ],
    },
    Khulna: {
      subDivisions: [
        {
          name: "Khulna North",
          areas: ["Area P", "Area Q", "Area R"],
        },
        {
          name: "Khulna South",
          areas: ["Area M", "Area N", "Area O"],
        },
      ],
    },
    Rajshahi: {
      subDivisions: [
        {
          name: "Rajshahi North",
          areas: ["Area P", "Area Q", "Area R"],
        },
        {
          name: "Rajshahi South",
          areas: ["Area M", "Area N", "Area O"],
        },
      ],
    },
    Rangpur: {
      subDivisions: [
        {
          name: "Rangpur North",
          areas: ["Area P", "Area Q", "Area R"],
        },
        {
          name: "Rangpur South",
          areas: ["Area M", "Area N", "Area O"],
        },
      ],
    },
    Mymensingh: {
      subDivisions: [
        {
          name: "Mymensingh North",
          areas: ["Area P", "Area Q", "Area R"],
        },
        {
          name: "Mymensingh South",
          areas: ["Area M", "Area N", "Area O"],
        },
      ],
    },
    Sylhet: {
      subDivisions: [
        {
          name: "Sylhet North",
          areas: ["Area P", "Area Q", "Area R"],
        },
        {
          name: "Sylhet South",
          areas: ["Area M", "Area N", "Area O"],
        },
      ],
    },
  };

  const [showDivisions, setShowDivisions] = useState({});
  const [showSubDivisions, setShowSubDivisions] = useState({});

  const handleMouseEnter = (division) => {
    setShowDivisions((prev) => ({ ...prev, [division]: true }));
  };

  const handleMouseLeave = (division) => {
    setShowDivisions((prev) => ({ ...prev, [division]: false }));
    setShowSubDivisions((prev) => ({ ...prev, [division]: null }));
  };

  const handleAreaClick = (division, subDivision, area) => {
    navigate(`/freeFeatures`);
  };

  return (
    <div>
      <h2 className="text-3xl text-primary font-bold mt-20 text-center">
        Find Through Your Area
      </h2>

      <div className="grid grid-cols-4 items-center justify-center text-center mt-10">
        {Object.keys(divisions).map((division) => (
          <div
            key={division}
            className="p-4"
            onMouseEnter={() => handleMouseEnter(division)}
            onMouseLeave={() => handleMouseLeave(division)}
          >
            <div
              className="p-2 h-56 rounded-md overflow-hidden relative"
              style={{
                backgroundColor: generateRandomColor(),
                transition: generateRandomColorWithDuration(10),
              }}
            >
              <button
                className={`text-white font-bold ${
                  showDivisions[division] ? "text-2xl" : "text-4xl"
                }`}
              >
                {division}
              </button>
              {showDivisions[division] && (
                <div className="mt-2">
                  {divisions[division].subDivisions.map((subDivision) => (
                    <div
                      key={subDivision.name}
                      className="mt-2"
                      onMouseEnter={() =>
                        setShowSubDivisions((prev) => ({
                          ...prev,
                          [division]: subDivision.name,
                        }))
                      }
                      onMouseLeave={() =>
                        setShowSubDivisions((prev) => ({
                          ...prev,
                          [division]: null,
                        }))
                      }
                    >
                      <button className="text-gray-200">
                        {subDivision.name}
                      </button>
                      {showSubDivisions[division] === subDivision.name && (
                        <div>
                          <button className="mt-2">
                            {subDivision.areas.map((area) => (
                              <div
                                key={area}
                                className="mt-2 text-slate-300"
                                onClick={() =>
                                  handleAreaClick(
                                    division,
                                    subDivision.name,
                                    area
                                  )
                                }
                              >
                                {area}
                              </div>
                            ))}
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Districts;
