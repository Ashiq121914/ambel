import BlogSection from "@/components/BlogSection/BlogSection";
import BookAndAppointment from "@/components/BookAndAppointment/BookAndAppointment";
import BusinessConnection from "@/components/BusinessConnection/BusinessConnection";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
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
      <FeaturesSection />
      <BookAndAppointment />
      <BlogSection />
    </div>
  );
};

export default Home;
