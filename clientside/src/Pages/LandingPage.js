import React from "react";
import Hero from "../Components/Secttions/Hero";
import Header from "../Components/Header";
import About from "../Components/Secttions/About";
import Plan from "../Components/Secttions/Plan";
import Services from "../Components/Secttions/Services";
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Plan />
      <Services />
      <Footer />
    </div>
  );
};

export default LandingPage;
