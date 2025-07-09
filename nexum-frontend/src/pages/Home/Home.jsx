import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";

import Footer from "../../components/Footer/Footer";

import Contact from "../../components/Contact/Contact";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
