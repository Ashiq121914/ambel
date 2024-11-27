import React from "react";
import success from "../../assets/Sucess.svg";

import Image from "next/image";

const HeroDescription = () => {
  return (
    <div className="my-[50px] container mx-auto text-center px-[10px]">
      <h2 className="text-[1.4rem] sm:text-[2rem] md:text-[3.2rem] xl:text-[5.2rem] font-semibold">
        Looking for a{" "}
        <span className="text-red">
          Business Solution <br /> for
        </span>{" "}
        appointments?
      </h2>
      <p className="text-sm text-base lg:text-[16px] text-gray mt-[25px] leading-[24px]">
        Ambel simplifies business management by providing tools for scheduling
        appointments, managing bookkeeping, accepting <br /> payments, sharing
        resources with customers, sending reminders, and running email marketing
        campaigns.
      </p>
      {/* top button */}
      <div className="flex md:flex-row flex-col-reverse items-center gap-[28px] text-white text-[16px] font-normal mx-auto justify-center mt-[28px]">
        <button className=" bg-green py-[8px] px-[16px] rounded-[8px]">
          Start A Free Trial
        </button>
        <button className="flex items-center justify-center bg-orange py-[8px] px-[16px] rounded-[8px]">
          {" "}
          <svg
            className=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8496 15.8501L18.9996 19.0001"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5998 11.2999C17.5998 7.82057 14.7793 5 11.2999 5C7.82057 5 5 7.82057 5 11.2999C5 14.7793 7.82057 17.5998 11.2999 17.5998C14.7793 17.5998 17.5998 14.7793 17.5998 11.2999Z"
              stroke="white"
              strokeLinejoin="round"
            />
          </svg>
          Find Professionals
        </button>
      </div>

      {/* connecting arrow */}
      <div className="md:inline-block hidden translate-x-[-218px] translate-y-[-23px]">
        <svg
          width="49"
          height="72"
          viewBox="0 0 49 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.99858 29L1.00526 28.8846L1.99858 29ZM44.7086 65.2073C45.0991 64.8168 45.0991 64.1836 44.7086 63.7931L38.3447 57.4291C37.9541 57.0386 37.321 57.0386 36.9304 57.4291C36.5399 57.8196 36.5399 58.4528 36.9304 58.8433L42.5873 64.5002L36.9304 70.157C36.5399 70.5476 36.5399 71.1807 36.9304 71.5713C37.321 71.9618 37.9541 71.9618 38.3447 71.5713L44.7086 65.2073ZM48.0425 1.00065C36.214 0.49729 25.1404 1.87194 16.6709 6.17058C8.14003 10.5004 2.29529 17.7811 1.00526 28.8846L2.9919 29.1154C4.19981 18.7187 9.60578 11.9993 17.5761 7.95402C25.6078 3.87757 36.286 2.50216 47.9575 2.99884L48.0425 1.00065ZM1.00526 28.8846C-0.274493 39.8996 2.8004 49.1227 10.1535 55.5647C17.4669 61.9719 28.8676 65.5002 44.0015 65.5002V63.5002C29.1331 63.5002 18.2834 60.0283 11.4714 54.0603C4.69918 48.1272 1.77376 39.6001 2.9919 29.1154L1.00526 28.8846Z"
            fill="#1F242F"
          />
        </svg>
      </div>
      {/* bottom buttons */}
      <div className="flex md:flex-row flex-col-reverse items-center md:gap-[28px] gap-[10px] text-green text-[12px] font-normal mx-auto justify-center md:translate-y-[-48px] md:mt-[0px] mt-[20px]">
        <button className="flex flex-row justify-center items-center gap-[6px] bg-light-green px-[6px] py-[2px] rounded-[16px]">
          <Image src={success} height={14} width={14} alt="success image" />
          No credit card required
        </button>
        <button className="flex flex-row justify-center items-center gap-[6px] bg-light-green px-[6px] py-[2px] rounded-[16px]">
          <Image src={success} height={14} width={14} alt="success image" />
          Try one month for free
        </button>
      </div>
    </div>
  );
};

export default HeroDescription;
