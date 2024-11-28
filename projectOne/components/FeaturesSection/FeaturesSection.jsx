import React from "react";
import booking from "../../assets/schedule.png";
import live from "../../assets/live.png";
import payment from "../../assets/payment.png";
import tracking from "../../assets/tracking.png";
import notification from "../../assets/notification.png";
import builder from "../../assets/builder.png";
import reports from "../../assets/report.png";
import resource from "../../assets/resource.png";

import FeaturesCard from "./FeaturesCard";

const FeaturesSection = () => {
  const Features = [
    {
      id: 1,
      iconImg: booking,
      tag: "Schedule & Booking",
      desc: "Create, schedule and send your clients to your Ambel booking page, where they can book on any device.",
    },
    {
      id: 2,
      iconImg: live,
      tag: "Live Consultant",
      desc: "Integrate meet, zoom and loom to   communicate with your customers or clients in via video conference.",
    },
    {
      id: 3,
      iconImg: payment,
      tag: "Payments",
      desc: "Send custom invoices, take POS and cash payment also accept credit or debit card payment from anywhere.",
    },
    {
      id: 4,
      iconImg: tracking,
      tag: "Customer Tracking",
      desc: "Manage customer, send marketing email and message, create, records and track via note, case study.",
    },
    {
      id: 5,
      iconImg: notification,
      tag: "Notification",
      desc: "Automatically notify your clients and practitioners with reminder vis SMS and email by single setup. ",
    },
    {
      id: 6,
      iconImg: builder,
      tag: "Website Builder",
      desc: "Get a free website, design and customize your booking website for your business without any code.",
    },
    {
      id: 7,
      iconImg: reports,
      tag: "Reports",
      desc: "Powerful data and graphs at your fingertips to monitor day to day activities and generate reports. ",
    },
    {
      id: 8,
      iconImg: resource,
      tag: "Resources",
      desc: "Create and share resources like Prescriptions, Documentations, Medical Charts and Videos and more.",
    },
  ];
  return (
    <div className="bg-green p-[30px] mt-[50px] h-full">
      <p className="text-orange text-base md:text-[16px] font-semibold text-center mt-[20px]">
        Features{" "}
      </p>
      <h2 className="text-[36px] leading-[30px] my-[20px] text-center text-white font-semibold">
        Solve all your needs with a single software solution
      </h2>
      <p className="text-center text-white  leading-[30px] text-[18px] font-light">
        This platform streamlines the entire customer management process, saving{" "}
        <br /> businesses time and increasing efficiency. Trusted by over 60+
        businesses.
      </p>

      <div className="grid xl:grid-col-6 lg:grid-cols-4 md:grid-cols-3 gap-[20px] container mx-auto mt-[80px]">
        {Features.map((feature) => (
          <div className="" key={feature.id}>
            <FeaturesCard feature={feature} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
