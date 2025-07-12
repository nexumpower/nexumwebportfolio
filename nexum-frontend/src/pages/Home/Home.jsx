import React, { useState } from "react";


import Hero from "../../components/Hero/Hero";


import About from "../../components/About/About";

import Footer from "../../components/Footer/Footer";


import Services from "../../components/Services/Services";


import ContactModal from "../../components/Contact/Contact";


import OurMission from "../../components/OurMission/OurMission";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [ openMissionModal,setOpenMissionModal ] = useState(false)

  return (
    <div>
      <Hero
        openContactModal={() => {
          setIsOpen(true);
        }}
      />
      <About setOpenMissionModal={setOpenMissionModal}/>
      <Services />
      <ContactModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
      <Footer />
      <OurMission openMissionModal={openMissionModal} setOpenMissionModal={setOpenMissionModal} />
    </div>
  );
};

export default Home;
