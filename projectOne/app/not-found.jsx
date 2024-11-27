import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center bg-gray-dark h-[100vh]">
      <div className="text-[16px] text-white mb-[30px]">
        <p> This page is not available right now.</p>
        <p>Please go to the Home Page. </p>
      </div>
      <div>
        <Link
          href="/"
          className="text-[20px] bg-light-blue text-black rounded py-[10px] px-[30px] "
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
