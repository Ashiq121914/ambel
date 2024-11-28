import Image from "next/image";
import React from "react";
import heroImg from "../../assets/header.png";

const HeroImage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <Image src={heroImg} width={1150} height={628} alt="hero image" />
      </div>
    </div>
  );
};

export default HeroImage;
