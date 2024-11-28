import Image from "next/image";
import React from "react";
import img1 from "../../assets/comOne.png";
import img2 from "../../assets/comTwo.png";
import img4 from "../../assets/comthree.png";
import img3 from "../../assets/comfour.png";
import img5 from "../../assets/comfive.png";
import img6 from "../../assets/comsix.png";

const BusinessConnection = () => {
  return (
    <div className="container mx-auto my-[30px]">
      <p className="text-center text-gray xl:text-[16px] text-sm text-base my-[40px]">
        Join 10k+ Users, 35+ Solo Practitioners and 60+ Businesses all over the
        World
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-[70px]">
        <div>
          <Image src={img1} width={150} height={48} alt="company 1" />
        </div>
        <div>
          <Image src={img2} width={150} height={48} alt="company 2" />
        </div>
        <div>
          <Image src={img3} width={150} height={48} alt="company 3" />
        </div>
        <div>
          <Image src={img5} width={150} height={48} alt="company 4" />
        </div>
        <div>
          <Image src={img4} width={80} height={48} alt="company 5" />
        </div>
        <div>
          <Image src={img6} width={150} height={48} alt="company 6" />
        </div>
      </div>
    </div>
  );
};

export default BusinessConnection;
