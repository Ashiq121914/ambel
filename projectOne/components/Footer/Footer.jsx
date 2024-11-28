import React from "react";

import twitter from "../../assets/Twitterwhite.png";
import linkedin from "../../assets/Linkedinwhite.png";
import facebook from "../../assets/FBwhite.png";
import instagram from "../../assets/Instagramwhite.png";
import youtube from "../../assets/Youtubewhite.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const customerData = [
    "Find a Practitioner",
    "Book an Appointment",
    "Make Payment",
    "Live Consultant",
    "Refund",
    "Shop",
    "Resources",
  ];
  const practitionarData = [
    "Profile setup",
    "Organization Setup",
    "Create Schedule",
    "Collaboration",
    "Withdraw",
    "pay staff",
    "QR Code",
    "Booking page",
    "Business tools",
  ];
  const resourceData = [
    "Plans",
    "Blog",
    "Community",
    "FAQ",
    "Reviews",
    "Refund & Return",
    "Documentations",
    "Road map",
  ];
  const companyData = [
    "About us",
    "Contact Us",
    "Career",
    "Support Center",
    "Affiliate Program",
    "Trust and Safety",
  ];

  return (
    <div className="bg-green px-[35px] py-[30px] text-white ">
      <div className="max-w-[1100px] mx-auto flex flex-wrap md:flex-row gap-[30px] justify-between items-start">
        <div>
          <p className="text-[16px] font-medium border-b-[1px]">
            For Customers
          </p>
          <ul className="mt-[20px]">
            {customerData.map((data) => (
              <li className="text-[13px] my-[6px] font-light" key={data}>
                {data}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[16px] font-medium border-b-[1px]">
            For Practitioners
          </p>
          <ul className="mt-[20px]">
            {practitionarData.map((data) => (
              <li className="text-[13px] my-[6px] font-light" key={data}>
                {data}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[16px] font-medium border-b-[1px]">Resources</p>
          <ul className="mt-[20px]">
            {resourceData.map((data) => (
              <li className="text-[13px] my-[6px] font-light" key={data}>
                {data}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[16px] font-medium border-b-[1px]">Company</p>
          <ul className="mt-[20px]">
            {companyData.map((data) => (
              <li className="text-[13px] my-[6px] font-light" key={data}>
                {data}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* social media */}
      <div className="flex items-center gap-[30px] max-w-[1100px] mx-auto mt-[30px]">
        <p className="text-[14px] font-light">Follow Us:</p>
        <div className="flex items-center gap-[15px] ">
          <Link href="/">
            <Image
              src={twitter}
              width={24}
              height={24}
              alt="social media data"
            />
          </Link>

          <Image
            src={linkedin}
            width={24}
            height={24}
            alt="social media data"
          />
          <Link href="/">
            <Image
              src={facebook}
              width={24}
              height={24}
              alt="social media data"
            />
          </Link>
          <Link href="/">
            <Image
              src={instagram}
              width={24}
              height={24}
              alt="social media data"
            />
          </Link>
          <Link href="/">
            <Image
              src={youtube}
              width={24}
              height={24}
              alt="social media data"
            />
          </Link>
        </div>
      </div>

      {/* copyright and poliy */}
      <div className="max-w-[1100px] mx-auto mt-[30px]">
        <hr className="text-white opacity-[50%]" />
        <div className="flex flex-wrap gap-[30px] justify-between mt-[30px]">
          <p>Copyright © {currentYear}. Ambel. All rights reserved.</p>
          <div className="flex justify-between items-center gap-[10px]">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Cookies</Link>
            <Link href="/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
