import React from "react";
import { useParams, Link } from "react-router-dom";

const featuresData = {
  localMarket: "Sample Local Market",
  megaShopInfo: "Sample Mega Shop Info",
  localJamUpdate: "Sample Local Jam Update",
  cngPumpStation: "CNG, pump station",
  religiousPlaces: "Religious places",
  educationalInstitutions: "Educational Institutions",
  playingGrounds: "Playing grounds",
  upcomingEvents: "Upcoming events in locality",
  plotInfo: "Plot buy, sell, or rent information",
  localFoodCart: "Local Food cart",
  parkingArea: "Parking Area",
  hospitals: "Hospitals",
  wasteDisposalInfo: "Local Waste disposal Info",
  deliveryHub: "Delivery Hub Information (Daraz, Pathao)",
  jobVacancy: "Job Vacancy news",
};

const FreeFeatures = () => {
  const { division, subDivision, area } = useParams();

  const featureBoxes = Object.entries(featuresData).map(
    ([feature, description]) => (
      <div
        key={feature}
        className="my-4 mx-2 w-64 p-4 bg-white border border-primary rounded-md shadow-md"
      >
        <h2 className="text-primary font-bold">{feature}</h2>
        <p>{description}</p>
        <Link
          to={`/${feature.replace(/\s/g, "-")}`}
        >
          <button className="mt-2 bg-primary text-white px-4 py-2 rounded-md">
            View Details
          </button>
        </Link>
      </div>
    )
  );

  return (
    <div className="mx-auto my-10 max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {featureBoxes}
    </div>
  );
};

export default FreeFeatures;
