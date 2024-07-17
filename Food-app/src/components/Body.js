import Home, { withPromotedLabel } from "./index.js";
import { useState, useEffect } from "react";
import Loader from "./Shimmerui.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus.js";
import NoInternet from "../utils/no-internet-connection.jpg";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
  const [inputText, setInputText] = useState("");
  const onlineStatus = useOnlineStatus();

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListOfRestaurants(restaurants);
      setFilteredListOfRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredRestaurants = listOfRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(inputText.toLowerCase())
    );
    setFilteredListOfRestaurants(filteredRestaurants);
  };

  const handleFilterAboveFour = () => {
    const filteredList = listOfRestaurants.filter(
      (restaurant) => parseFloat(restaurant.info.avgRating) > 4
    );
    setFilteredListOfRestaurants(filteredList);
  };

  // Promoted Card
  const PromotedCard = withPromotedLabel(Home);

  if (!onlineStatus) {
    return NoInternet;
  }
  if (listOfRestaurants.length === 0){
    return <Loader/>
  }
 

  return (
    <div className="container mx-auto py-5">
      <div className="flex justify-center mb-8">
        <input
          className="w-64 h-10 px-4 mr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors duration-300 placeholder-gray-400"
          type="text"
          placeholder="Search Restaurants"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="px-6 py-2 bg-green-400 rounded-lg text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors duration-300"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="px-6 py-2 ml-4 bg-green-400 rounded-lg text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors duration-300"
          onClick={handleFilterAboveFour}
        >
          Filter Above 4
        </button>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {filteredListOfRestaurants.map((restaurant) => (
            <Link key={restaurant.info.id} to={`/Restaurant/${restaurant.info.id}`}>
              {restaurant.info.isOpen ? (
                <PromotedCard resdata={restaurant} />
              ) : (
                <Home resdata={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
