import Image from "next/image";
import React from "react";
import badge from "../../assets/Badge.png";

const BookAndAppointment = () => {
  const tags = [
    "Doctor",
    "Lawyer",
    "Therapist",
    "Barber",
    "Spa",
    "Med Spa",
    "Psychiatrist",
    "Consultancy firm",
  ];
  return (
    <div className="container mx-auto mt-[60px] ">
      <h2 className="text-[36px] font-medium text-light-blue text-center leading-[50px] mb-[20px]">
        Find and Book Appointments with Local <br /> and International
        Professionals
      </h2>

      {/* search filter section */}
      <div className="flex flex-col xl:flex-row justify-center gap-[20px] items-center  my-[30px] mx-[20px]">
        <div className="flex items-center border-[1px] border-[#D0D5DD] rounded-[31px] py-[10px] pr-[120px] pl-[10px] lg:w-[40%] w-full">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8496 15.85L18.9996 18.9999"
              stroke="#101828"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5998 11.2998C17.5998 7.82044 14.7793 4.99988 11.2999 4.99988C7.82057 4.99988 5 7.82044 5 11.2998C5 14.7792 7.82057 17.5997 11.2999 17.5997C14.7793 17.5997 17.5998 14.7792 17.5998 11.2998Z"
              stroke="#101828"
              strokeLinejoin="round"
            />
          </svg>
          <input
            className="w-full focus:outline-none"
            type="text"
            placeholder="Search Doctor, Therapist, Consultant, Spa"
          />
        </div>
        <div className="flex items-center border-[1px] border-[#D0D5DD] rounded-[31px] py-[10px] pr-[120px] pl-[10px] lg:w-[40%] w-full">
          <svg
            className="mr-1"
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 10C13.5 11.933 11.933 13.5 10 13.5C8.067 13.5 6.5 11.933 6.5 10C6.5 8.067 8.067 6.5 10 6.5C11.933 6.5 13.5 8.067 13.5 10Z"
              stroke="#101828"
            />
            <path
              d="M10 1C14.8706 1 19 5.03298 19 9.9258C19 14.8965 14.8033 18.3847 10.927 20.7567C10.6445 20.9162 10.325 21 10 21C9.675 21 9.3555 20.9162 9.073 20.7567C5.2039 18.3616 1 14.9137 1 9.9258C1 5.03298 5.12944 1 10 1Z"
              stroke="#101828"
            />
          </svg>

          <input
            className="w-full focus:outline-none"
            type="text"
            placeholder="Select your location"
          />
        </div>

        <div>
          <button className="bg-blue text-white rounded-[20px] px-[17px] py-[13px]  w-full">
            Search
          </button>
        </div>
      </div>

      {/* tags section */}
      <div className="lg:max-w-[1220px] max-w-full lg:mx-auto mx-[20px]">
        <p className="text-[16px] my-[16px] text-[#344054]">
          Are you looking for
        </p>
        <div className="flex items-center flex-wrap gap-[12px] ">
          {tags.map((tag, index) => (
            <div
              className="flex flex-nowrap justify-center items-center gap-[5px] bg-[#F2F4F7] rounded-[15px] text-[#344054] text-[14px] px-[10px] py-[6px] hover:text-[#026AA2]"
              key={index}
            >
              <li className="list-none">{tag}</li>
              <svg
                className=""
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7M1 1L7 7"
                  className="hover:stroke-[#026AA2]"
                  stroke="#667085"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ))}
          <p className="bg-[#EFF8FF] px-[8px] py-[6px] text-[#175CD3]">More</p>
          <Image width={30} height={39} alt="badge" src={badge} />
        </div>
      </div>
    </div>
  );
};

export default BookAndAppointment;
