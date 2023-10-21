import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { FilterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import {IoSearchOutline} from "react-icons/io5"

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [SearchText, setSearchText] = useState(""); //to create state variable
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      console.log(json);
      console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!allRestaurants) return null;
// console.log(allRestaurants);
// console.log(filterData)
  if (filteredRestaurants.length === 0) return <Shimmer />;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="Search-container mx-6 flex justify-center border mt-2 rounded-2xl border-gray-300" >
        <input
          type="text"
          className="Search-input w-full mx-8  px-4  focus:outline-none "
          placeholder="Search for Restaurant and Food"
          value={SearchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
       
        />
          <button
            className="search-btn  my-3  mx-5 mr-10 "
            onClick={() => {
              // need to filter the data
              const data = FilterData(SearchText, allRestaurants);
              // update the state - restaurant
              setFilteredRestaurants(data);
            }}
            
          >
            <IoSearchOutline size={30} />
          </button>     
      </div>
      <div className="restaurant-list flex flex-wrap justify-center mx-3">
        {filteredRestaurants.map((restaurant) => {
          return (
           <Link to={"/restaurant/" + restaurant?.info?.id }> <RestaurantCard
              key={restaurant?.info?.id}
              name={restaurant?.info?.name}
              img={restaurant?.info?.cloudinaryImageId}
              cuisines={restaurant?.info?.cuisines}
              rating={restaurant?.info?.avgRating}
            />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
