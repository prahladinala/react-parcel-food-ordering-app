import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable - Super Powerful Variable - React HOOKs(Normal JS Function given by react - Utility Function Given by React) - useState
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
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
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Restaurants"
            className="search-box"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button
            className="resLink"
            onClick={() => {
              // Filter Restaurant Cards and Update UI
              // Get Search Text
              console.log(searchText);
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
            fetchData();
          }}
        >
          All Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic ⇢ Filter Top Rated Restaurants (More than 4 Rating)
            const filteredList = listOfRestaurants?.filter(
              (res) => res.info.avgRating >= 4
            );
            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated ⭐️
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Login ⇢ Filter Restaurants Near Me (Less than 2KM)
            setListOfRestaurants(
              listOfRestaurants?.filter(
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
            setListOfRestaurants(
              listOfRestaurants?.filter((res) =>
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
            setListOfRestaurants(
              listOfRestaurants?.filter((res) => res.info.sla.deliveryTime < 30)
            );
            console.log(listOfRestaurants);
          }}
        >
          Fast Delivery 🚀
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
