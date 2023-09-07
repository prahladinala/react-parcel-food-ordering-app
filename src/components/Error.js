import Footer from "./Footer";
import Heading from "./Header";

const Error = () => {
  return (
    <div>
      <Heading />
      <div className="align-center container">
        <h1>Oops! 404 Page Not Found</h1>
        <h2>Something went wrong</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
