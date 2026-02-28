import React from "react";
import { useParams } from "react-router-dom";
import App from "./App";
const Contact = () => {
  const { slug } = useParams();
  // reuse main App component to have identical layout and features
  // we could optionally pass slug as a prop if needed
  return <App />;
};

export default Contact;
