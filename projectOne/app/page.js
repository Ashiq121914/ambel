import BusinessConnection from "@/components/BusinessConnection/BusinessConnection";
import HeroDescription from "@/components/HeroDescription/HeroDescription";
import HeroImage from "@/components/HeroImage/HeroImage";
import ProfessionSlider from "@/components/ProfessionSlider/ProfessionSlider";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <HeroDescription />
      <HeroImage />
      <BusinessConnection />
      <ProfessionSlider />
    </div>
  );
};

export default Home;
