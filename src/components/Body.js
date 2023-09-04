import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable - Super Powerful Variable - React HOOKs(Normal JS Function given by react - Utility Function Given by React) - useState
  // Whenever state variables update, react triggers a reconciliation cycle (re-renders the component)
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Fetch the Data
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4833526&lng=78.3870668&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return filteredRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Restaurants"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="resLink"
            onClick={() => {
              // Filter Restaurant Cards and Update UI
              console.log(searchText);
              const filteredList = filteredRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic ⇢ Show All Restaurants
            setFilteredRestaurant(listOfRestaurants);
          }}
        >
          All Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic ⇢ Filter Top Rated Restaurants (More than 4 Rating)
            const filteredList = filteredRestaurant?.filter(
              (res) => res.info.avgRating >= 4
            );
            setFilteredRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated ⭐️
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Login ⇢ Filter Restaurants Near Me (Less than 2KM)
            setFilteredRestaurant(
              filteredRestaurant?.filter(
                (res) => res.info.sla.lastMileTravel < 2
              )
            );
          }}
        >
          Near Me 📍
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Login ⇢ Filter Restaurants has Specific cuisines (Bakery Items)
            setFilteredRestaurant(
              filteredRestaurant?.filter((res) =>
                res.info.cuisines.includes("Bakery")
              )
            );
          }}
        >
          Bakery 🧁
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Login ⇢ Filter Restaurants Deliverys fast (Less than 30 min)
            setFilteredRestaurant(
              filteredRestaurant?.filter(
                (res) => res.info.sla.deliveryTime < 30
              )
            );
            console.log(filteredRestaurant);
          }}
        >
          Fast Delivery 🚀
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
