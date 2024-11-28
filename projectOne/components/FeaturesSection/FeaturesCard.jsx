import React from "react";
import outerLink from "../../assets/link.png";
import Image from "next/image";
import Link from "next/link";

const FeaturesCard = ({ feature }) => {
  return (
    <div className="p-[20px] h-full border-[1px] border-white rounded-[20px] hover:shadow-lg hover:shadow-white place-content-center">
      <div className="flex justify-between ">
        <Image src={feature.iconImg} width={22} height={22} alt="icon img" />
        <Link href="/">
          <Image src={outerLink} width={15} height={15} alt="OuterLink" />
        </Link>
      </div>
      <h2 className="my-[20px] text-white text-[20px] font-medium">
        {feature.tag}
      </h2>
      <p className="text-white text-[13px] font-light leading-[24px]">
        {feature.desc}
      </p>
    </div>
  );
};

export default FeaturesCard;
