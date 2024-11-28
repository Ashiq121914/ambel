import React from "react";
import ProfessionSliderCard from "./ProfessionSliderCard";
import Image from "next/image";
import one from "../../assets/profOne.png";
import two from "../../assets/profTwo.png";
import three from "../../assets/profThree.png";
import four from "../../assets/profFour.png";
import five from "../../assets/profFive.png";
import six from "../../assets/profSix.png";
import seven from "../../assets/profSeven.png";

import CardOne from "../../assets/profCardOne.png";
import Cardtwo from "../../assets/profCardTwo.png";
import Cardthree from "../../assets/profCardThree.png";
import Cardfour from "../../assets/profCardFour.png";
import Cardfive from "../../assets/profCardfive.png";
import Cardsix from "../../assets/profCardSix.png";
import Cardseven from "../../assets/profCardSeve.png";

const ProfessionSliderCardCom = ({ professionObj }) => {
  const professionState = professionObj?.type;
  const professionDiscriptions = [
    {
      id: 1,
      type: "Doctor",
      tags: "Business solution for healthcare providers",
      desc: "Our software allows Doctors and Medical Professionals to book appointment, manage their patients, provide online prescriptions, overview of their med charts and automatically send reminders for treatments.",
      img: one,
      cardImg: CardOne,
    },
    {
      id: 2,
      type: "Lawyer",
      tags: "Business solutions for Law Firms",
      desc: "Ambel provides your Law Firm with document automation, case management, scheduling, booking, billing, custom invoice, installment and accounting features",
      img: two,
      cardImg: Cardtwo,
    },
    {
      id: 3,
      type: "Spa & Salon",
      tags: "Effortless Scheduling for Spas & Salons",
      desc: "Enable clients to book services online 24/7, reducing phone time, front desk operation,  streamlining appointment scheduling for your staff and reminders to reduce no shows, keeping schedules organized.",
      img: three,
      cardImg: Cardthree,
    },
    {
      id: 4,
      type: "Therapist",
      tags: "Simplify Your Therapy Practice with Intuitive Scheduling",
      desc: "Spend less time on admin tasks with a user-friendly scheduler that handles bookings and cancellations. Stay organized and focus more on what matters most—your clients.",
      img: four,
      cardImg: Cardfour,
    },
    {
      id: 5,
      type: "Fitness",
      tags: "Seamless Bookings for Trainers",
      desc: "Make client booking easy with 24/7 online scheduling for classes and personal training sessions and diet chart. Offer package, memberships and track client progress—all in one place.",
      img: five,
      cardImg: Cardfive,
    },
    {
      id: 6,
      type: "Instructor",
      tags: "Effortless Class Scheduling for Instructors",
      desc: "Simplify your class management with scheduling tool designed for instructors. Allow clients to book sessions online, keep all class and client details organized in one place.",
      img: six,
      cardImg: Cardsix,
    },
    {
      id: 7,
      type: "Consultancy",
      tags: "Give advice anytime from anywhere",
      desc: "Effortlessly manage client booking with a scheduling solution designed for consulting. Enable clients to book online. Keep track of all sessions and client notes to deliver personalized, professional service every time.",
      img: seven,
      cardImg: Cardseven,
    },
  ];

  return (
    <div className="mt-[40px]  flex  md:flex-row xl:flex-row flex-wrap justify-center items-center gap-[20px] container mx-auto">
      {professionDiscriptions.map((profession) => (
        <div className="h-[350px]" key={profession.id}>
          {professionState === profession.type ? (
            <ProfessionSliderCard profession={profession} />
          ) : (
            <Image
              className=" h-full"
              src={profession.img}
              alt="profession image"
              width={110}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProfessionSliderCardCom;
