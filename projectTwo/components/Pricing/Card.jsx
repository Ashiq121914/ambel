import Image from "next/image";
import React from "react";
import right from "../../assets/right.png";

const Card = ({ data }) => {
  return (
    <div className="bg-white p-[20px] rounded-[16px] shadow-md">
      <div className="flex justify-center">
        <div className="p-[10px] bg-[#E6E6E6] rounded-[50%] inline-block">
          <Image
            src={data.img}
            height={16}
            width={16}
            alt="icon"
            className="block"
          />
        </div>
      </div>

      <p className="text-green font-semibold text-[20px] text-center my-[20px]">
        {data.tag}
      </p>
      <h2 className="text-[40px] font-semibold text-black text-center">
        {data.price}
      </h2>
      <div className="flex justify-center items-center gap-[6px]">
        <p className="text-center text-gray ">{data.msg}</p>
        <p>
          {data.practitionarNumber && (
            <select className="border border-gray rounded px-2  focus:outline-none ">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          )}
        </p>
      </div>
      <div className="mt-[20px]">
        {data.dataFeature.map((d) => (
          <div
            className=" flex justify-start items-center gap-[8px] mb-[16px] text-gray"
            key={d}
          >
            <Image src={right} width={12} height={12} alt="right icon" />
            <li className="list-none">{d}</li>
          </div>
        ))}
      </div>
      <button className="w-full mx-auto bg-green rounded-[8px] py-[12px] px-[20px] text-white">
        Get started
      </button>
    </div>
  );
};

export default Card;
