const RestaurantCard = (props) => {
  // console.log(props) // JS Object
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt={name}
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>
        {sla.deliveryTime} Mins - <span>{sla.lastMileTravel} KMs</span>
      </h4>
      <h4>{costForTwo}</h4>
      <a className="resLink" href={resData.cta.link} target="_blank">
        Order Now
      </a>
    </div>
  );
};
export default RestaurantCard;
