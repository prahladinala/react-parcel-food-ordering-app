const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};

const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmerBG media"></div>
      <div className="p-32">
        <div className="shimmerBG title-line"></div>
        <div className="shimmerBG title-line end"></div>

        <div className="shimmerBG content-line m-t-24"></div>
        <div className="shimmerBG content-line"></div>
        <div className="shimmerBG content-line"></div>
        <div className="shimmerBG content-line"></div>
        <div className="shimmerBG content-line end"></div>
      </div>
    </div>
  );
};
export default Shimmer;
