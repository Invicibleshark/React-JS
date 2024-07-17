import { useEffect, useState } from "react";
import { Restuarantshimmer } from "./Restuarantshimmer.js";
import { useParams } from "react-router-dom";
import { CLOUD_URL, RestaurantUrl } from "../utils/constant.js";
import RestaurantAccordion from "./RestaurantAccordion.js";

const alternateImageUrl = "https://cdn.pixabay.com/photo/2020/09/17/22/45/cloche-5580499_1280.png";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const fetchData = async () => {
    console.log("Fetching data");
    try {
      const response = await fetch(RestaurantUrl + resId);
      const json = await response.json();
      console.log("Data fetched:", json);
      setRestaurantInfo(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!restaurantInfo) {
    return <Restuarantshimmer/>;
  }

  const {
    name,
    id,
    locality,
    areaName,
    cuisines,
    avgRatingString,
    avgRating,
    totalRatingsString,
    availability,
    sla,
    costForTwo,
    cloudinaryImageId,
    feeDetails,
  } = restaurantInfo?.cards[2]?.card?.card?.info;

  const category = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="mx-auto my-3 w-full max-w-[700px]">
      <div className="RestaurantDetails flex flex-row gap-5 text-center bg-white p-6 rounded-lg shadow-lg">
        <div className="h-64 overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src={`${CLOUD_URL}${cloudinaryImageId}`}
            onError={(e) => {
              e.target.src = alternateImageUrl;
            }}
            alt="Food Image"
          />
        </div>
        <div className="MenuDetails mt-4 text-center flex flex-col ml-5 justify-center items-start">
          <h1 className="text-2xl font-bold">{name}</h1>
          <h3 className="text-gray-700">{avgRating} ⭐ ({totalRatingsString} Ratings)</h3>
          <h3 className="text-gray-700"> Cost 💰: ₹{costForTwo / 200}</h3>
          <h4 className="text-gray-700">Outlet🍽️: <span>{locality.charAt(0).toUpperCase() + locality.slice(1)}</span></h4>
          <h4 className="text-gray-700">Time⌛: {sla.deliveryTime} mins</h4>
          <h4 className="text-gray-700">Distance🚴‍♂️: {sla.slaString}</h4>
        </div>
      </div>
      <div className="Menu-Bar mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Menu</h1>
        <ul className="Cuisines mt-4">
          {cuisines.map((cuisine, index) => (
            <li key={index} className="text-gray-700">{cuisine}</li>
          ))}
        </ul>
      </div>
      <div>
        {category.map((item, index) => (
          <RestaurantAccordion key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
