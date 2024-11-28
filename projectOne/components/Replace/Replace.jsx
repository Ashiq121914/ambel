import React from "react";

const Replace = () => {
  const objs = [
    "Jane",
    "Calendly",
    "Cal.com",
    "acuity",
    "Square appointment",
    "Simplybook.me",
    "Zenoti",
    "Appointy",
    "Set More",
    "Honey Book",
  ];
  return (
    <div className="flex flex-wrap justify-center items-center gap-[20px] my-[30px]">
      <p>Replace:</p>
      {objs.map((obj) => (
        <li
          className="list-none text-[#016DA3] bg-[#F0F9FF] px-[6px] py-[4px] rounded-[16px]"
          key={obj}
        >
          {obj}
        </li>
      ))}
    </div>
  );
};

export default Replace;
