import React from "react";
import PricingCards from "./PricingCards";

const Pricing = () => {
  return (
    <div className="mt-[60px] bg-[#F5FFFA]">
      <p className="w-[10%] py-[4px]  mx-auto font-medium text-[14px] text-green text-center bg-[#F9F5FF] rounded-[15px]">
        Pricing plans
      </p>
      <h2 className="text-[#307D33] text-center text-[48px] font-medium mt-[15px]">
        Let’s Get Started. <br />
        We’ve got a Plan that’s perfect for you.{" "}
      </h2>
      <p className="text-[#0089C9] text-[20px] text-center my-[20px]">
        Simple, transparent pricing that grows with you. Try any plan free for
        30 days.
      </p>
      <div className="bg-[#ECECEC] flex gap-[20px] lg:w-[20%] w-[90%] mx-auto justify-between px-[10px] py-[7px] text-[16px] font-semibold rounded-[10px]">
        <button className="w-[50%] text-center ">Monthly</button>
        <button className="py-[10px] bg-white w-[50%] text-center rounded">
          Yearly
        </button>
      </div>

      <div className="mt-[40px]">
        <PricingCards />
      </div>
    </div>
  );
};

export default Pricing;
