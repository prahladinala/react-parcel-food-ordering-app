import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props) // JS Object
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt={name} src={CDN_URL + cloudinaryImageId} />
      <h3 className="res-title">{name}</h3>
      <h4>🧫 {cuisines.join(", ")}</h4>
      <h4>💪 {avgRating} Stars</h4>
      <h4>
        🚀 {sla.deliveryTime} Mins - 📍 <span>{sla.lastMileTravel} KMs</span>
      </h4>
      <h4>✌️ {costForTwo}</h4>
      <a className="resLink full-width" href={resData.cta.link} target="_blank">
        Order Now ⇢
      </a>
    </div>
  );
};
export default RestaurantCard;
