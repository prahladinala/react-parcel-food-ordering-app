import Footer from "./Footer";
import Heading from "./Header";

const Contact = () => {
  return (
    <div>
      <Heading />
      <div className="align-center container">
        <h1>Contact FoodMartz</h1>
        <div
          className="resLink"
          style={{ width: "100%", height: "auto", marginBottom: "10px" }}
        >
          <h2>Call: +91 9876543210</h2>
          <h2>Mail: contact@foodmartz.com</h2>
        </div>
        <div>
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Hyderabad+(FoodMartz)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
