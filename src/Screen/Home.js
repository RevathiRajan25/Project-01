import React from "react";
import Header from "../Components/HeaderComponent";
import Service from "../Components/ServicesComponent";
import NetworkScreen from "../Components/NetworkScreen";
import Testimonial from "../Components/TestimonialContainerComponent";
import ContactDetail from "../Components/ContactDetailComponent";
import Footer from "../Components/FooterComponent";

const Home = () => {
  return (
    <div>
      <Header />
      <Service />
      <NetworkScreen />
      <Testimonial />
      <ContactDetail />
      <Footer />
    </div>
  );
};
export default Home;
