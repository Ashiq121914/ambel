import Link from "next/link";
import React from "react";

const TrialSection = () => {
  return (
    <div className="my-[80px] max-w-[1200px] lg:mx-auto mx-[40px] flex md:flex-row flex-col justify-center items-start gap-[40px]">
      <div>
        <p className="text-green text-[30px] mb-[20px]">
          Start your 30-day free trial
        </p>
        <p className="text-green text-[20px] font-extralight">
          Join over 100+ practitioner and organization already growing with
          Ambel
        </p>
      </div>
      <div className="flex gap-[20px] md:flex-row flex-col">
        <Link href="/">
          <button className="px-4 py-2 border-[1px] rounded-[5px] text-gray text-sm md:text-base xl:text-[16px] text-nowrap">
            Learn more
          </button>
        </Link>
        <Link href="/">
          <button className="px-4 py-3  text-white rounded-[5px] bg-green text-sm md:text-base xl:text-[16px] text-nowrap">
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrialSection;
