import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Header";
import Body from "./components/Body";

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Heading />
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
