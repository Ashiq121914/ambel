import Image from "next/image";
import React from "react";
import heroImg from "../../assets/header.png";

const HeroImage = () => {
  return (
    <div className="mt-[85px] container mx-auto flex items-center justify-center mr-[0px]">
      <div>
        <Image src={heroImg} width={1150} height={628} alt="hero image" />
      </div>
    </div>
  );
};

export default HeroImage;
