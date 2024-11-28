"use client";
import React, { useState } from "react";
import ProfessionSliderCardCom from "./ProfessionSliderCardCom";

const ProfessionSlider = () => {
  const [professionState, setProfessionState] = useState([
    { type: "Doctor", active: true },
    { type: "Lawyer", active: false },
    { type: "Spa & Salon", active: false },
    { type: "Therapist", active: false },
    { type: "Fitness", active: false },
    { type: "Instructor", active: false },
    { type: "Consultancy", active: false },
  ]);

  const setProfession = (val) => {
    const newProf = professionState.map((profession) => {
      if (profession.type == val) {
        profession.active = true;
      } else {
        profession.active = false;
      }
      return profession;
    });
    setProfessionState(newProf);
  };

  return (
    <div className="container mx-auto text-center mt-[100px]">
      <p className="text-orange text-base md:text-[16px] font-semibold">
        Industries
      </p>
      <h3 className="text-[36px] font-semibold my-[20px]">
        Popular Businesses and Practitioners <br />
        who use Ambel
      </h3>
      <p className="text-gray text-base md:text-[16px] leading-[25px] mb-[30px]">
        Our platform supports a diverse range of professionals, with popular
        industries; including: <br /> healthcare providers, medi spas, salons ,
        fitness coaches, law agencies, beauty specialists, <br /> consultants,
        and therapists.{" "}
      </p>
      <div className="flex  items-center justify-center   mb-[40px] border border-light-gray xl:w-[950px] w-full mx-auto rounded-[29px] px-[2px]  xl:text-[15px] text-sm text-light-dark whitespace-nowrap">
        <ul className="cursor-pointer flex w-full lg:justify-between justify-center lg:gap-[20px] flex-wrap">
          {professionState.map((profession, index) => (
            <li
              key={profession.type}
              className={`${
                profession.active ? "bg-dark-green text-white" : ""
              } font-semibold rounded-[45px] px-[22px] py-[8px] cursor-pointer `}
              onClick={() => setProfession(profession.type)}
            >
              {profession.type}
            </li>
          ))}
        </ul>
      </div>
      <ProfessionSliderCardCom
        professionObj={professionState.find((val) => {
          return val.active;
        })}
      />
    </div>
  );
};

export default ProfessionSlider;
