import Image from "next/image";
import React from "react";
import linkImg from "../../assets/link.png";
import Link from "next/link";

const ProfessionSliderCard = ({ profession }) => {
  return (
    <div className="lg:w-[525px] h-full bg-dark-green rounded-[16px] text-white p-[20px]">
      <div className="flex justify-between items-center overflow-hidden">
        <div className="md:flex-1 flex-auto p-[20px] text-start">
          <p className="bg-white py-[4px] px-[5px] rounded-[16px] text-[#101828] mb-[20px] w-[30%] font-semibold text-center text-nowrap">
            {profession.type}
          </p>
          <h3 className="text-[24px] leading-[30px] font-semibold mb-[15px]">
            {profession.tags}
          </h3>
          <p className="text-[14px] leading-[21px] mb-[15px]">
            {profession.desc}
          </p>

          <div className="flex items-center justify-start cursor-pointer gap-[4px] text-[14px]">
            <Link className="border-b-[1px] " href="/">
              Learn more
            </Link>
            <Image
              className=""
              src={linkImg}
              width={14}
              height={14}
              alt="profession image"
            />
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            className=""
            src={profession.cardImg}
            width={175}
            height={310}
            alt="profession image"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfessionSliderCard;
