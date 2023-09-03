import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  // Local State Variable - Super Powerful Variable - React HOOKs(Normal JS Function given by react - Utility Function Given by React) - useState
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(() => {
    console.log("useEffect called - after Body component is rendered/loaded"); // Then at last it is called
  }, []);

  console.log("Body Rendered"); // First Called
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic ⇢ Show All Restaurants
            setListOfRestaurants(resList);
          }}
        >
          All Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic ⇢ Filter Top Rated Restaurants (More than 4 Rating)
            setListOfRestaurants(resList);
            const filteredList = listOfRestaurants.filter(
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
            setListOfRestaurants(resList);
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.sla.lastMileTravel < 2)
            );
          }}
        >
          Near Me 📍
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Login ⇢ Filter Restaurants has Specific cuisines (Bakery Items)
            setListOfRestaurants(resList);
            setListOfRestaurants(
              listOfRestaurants.filter((res) =>
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
            setListOfRestaurants(resList);
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.sla.deliveryTime < 30)
            );
            console.log(listOfRestaurants);
          }}
        >
          Fast Delivery 🚀
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
