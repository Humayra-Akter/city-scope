import React from "react";

const LocalMarket = () => {
  const localMarkets = [
    {
      name: "Sample Market 1",
      // image: "https://example.com/sample-image-1.jpg",
      address: "123 Main Street",
      location: "City A",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Sample Market 2",
      // image: "https://example.com/sample-image-2.jpg",
      address: "456 Market Avenue",
      location: "City B",
      details:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {localMarkets.map((market, index) => (
        <div
          key={index}
          className="bg-white border border-primary rounded-md p-4 shadow-md"
        >
          <h2 className="text-primary font-bold text-lg">{market.name}</h2>
          {/* Uncomment the following lines when images are available */}
          {/* <img src={market.image} alt={market.name} className="my-2 w-full h-32 object-cover" /> */}
          <p className="text-gray-700">{market.address}</p>
          <p className="text-gray-700">{market.location}</p>
          <p className="text-gray-600">{market.details}</p>
        </div>
      ))}
    </div>
  );
};

export default LocalMarket;
