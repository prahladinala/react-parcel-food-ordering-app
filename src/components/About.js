import Footer from "./Footer";
import Heading from "./Header";

const About = () => {
  return (
    <div>
      <Heading />
      <div className="align-center container">
        <h1>About FoodMartz</h1>
        <p>
          Our mission is to elevate the quality of life for the urban consumer
          with unparalleled convenience. Convenience is what makes us tick. It's
          what makes us get out of bed and say, "Let's do this."
        </p>
        <p>
          Foodmartz has grand plans to be India’s most loved hyperlocal player.
          It aims to be the most accessible platform on the network -
          reimagining the meaning of convenience in the country through a
          variety of service offerings.
        </p>
        <p>
          After two years of remote working at Foodmartz, we had the first
          installment of our in-office Jamboree! It was a fun-filled week that
          covered - interesting knowledge sharing sessions with leaders, teams
          getting together in-person, and activities ranging from concerts to
          game sessions. Here's a glimpse into the makings of this delightful
          week.
        </p>
        <p>
          From finding time to workout to spending precious moments with family
          and prioritising mental health — Foodmartz's Remote-First way of
          working has been helping Swiggsters across the country. Watch this
          video to understand how things have been changing for them.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
