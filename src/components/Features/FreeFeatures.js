import React from "react";
import { useParams, Link } from "react-router-dom";

const featuresData = {
  localMarket: "Local Market",
  megaShopInfo: "Mega Shop Info",
  localJamUpdate: "Local Jam Update",
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
        className="my-4 mx-2 w-80 p-3 bg-white border border-primary rounded-md shadow-md"
      >
        <Link to={`/${feature.replace(/\s/g, "-")}`}>
          <p className="text-center text-primary font-bold">{description}</p>
        </Link>
      </div>
    )
  );

  return (
    <div>
      <p className="text-center text-primary font-bold text-3xl my-6">
        Free Features
      </p>
      <div className="px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featureBoxes}
      </div>
    </div>
  );
};

export default FreeFeatures;
