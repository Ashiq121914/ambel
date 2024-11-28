"use client";

import React from "react";

import one from "../../assets/blogOne.png";
import two from "../../assets/blogTwo.png";
import three from "../../assets/blogthree.png";
import four from "../../assets/blogfour.png";
import five from "../../assets/blogfive.png";
import six from "../../assets/blogsix.png";
import seven from "../../assets/blogseven.png";
import eight from "../../assets/blogeight.png";
import nine from "../../assets/blognine.png";
import ten from "../../assets/blogten.png";
import eleven from "../../assets/blogeleven.png";
import link from "../../assets/link.png";
import Link from "next/link";
import Image from "next/image";
import Replace from "../Replace/Replace";

const BlogSection = () => {
  const Blogs = [
    {
      id: 1,
      tag: "One brand in one easy to use system, across all your locations",
      desc: "Give customers a consistent brand experience, online and in person. With one source for all your business information, you'll unify your guest data, business operations, marketing efforts, and more from one login area.",
      img: one,
      bg: "bg-[#00B0AD]",
      text: "text-white",
      color: "white",
    },
    {
      id: 2,
      tag: "Invite unlimited team members and assign custom roles and permissions",
      desc: "This feature enables organizations to efficiently manage team members across one or multiple locations. Roles can be assigned and customized to control access, ensuring that team members only view or edit information and resources relevant to their roles.",
      img: two,
      bg: "bg-[#327FF0]",
      text: "text-white",
      color: "white",
    },
    {
      id: 3,
      tag: "Securely manage and organize payments: Cash, Debit, Credit",
      desc: "Customers can securely payment via online credit, debit card, In person POS, Tap to pay and in app wallet. Also can record of cash and other gateway payment for reporting. Ambel integrates with gateways like Stripe, Clover, Square, and PayPal, providing comprehensive support for all your accounting and bookkeeping needs.",
      img: three,
      bg: "bg-[#0046B0]",
      text: "text-white",
      color: "white",
    },
    {
      id: 4,
      tag: "Third party apps Integrations tailored your business",
      desc: "Connect tools like Google Meet, Zoom, Loom, Zapier, Zendesk, and WhatsApp to streamline operations. Ambel also integrates with payment gateways such as Stripe, PayPal, Clover, and Square, allowing you to access all features in one convenient platform.",
      img: four,
      bg: "bg-[#EFF4FC]",
      text: "text-black",
      color: "black",
    },
    {
      id: 5,
      tag: "Create a free website and start selling your products online.",
      desc: "With our Online Shop and Inventory Management System, you can easily manage inventory, streamline e-commerce operations, and provide an exceptional shopping experience for your customers. Enjoy full e-commerce functionality to manage products, orders, and inventory seamlessly.",
      img: five,
      bg: "bg-[#FD9F00]",
      text: "text-black",
      color: "black",
    },
    {
      id: 6,
      tag: "Boost Sales with Gift Cards, Packages, and Memberships",
      desc: "Enhance customer loyalty and increase revenue by offering gift cards for easy gifting, tailored packages that add value, and membership programs that reward repeat purchases. These options attract new customers, encourage larger purchases, and build a loyal customer base.",
      img: six,
      bg: "bg-[#79A78A]",
      text: "text-white",
      color: "white",
    },
    {
      id: 7,
      tag: "Boost Sales with Gift Cards, Packages, and Memberships",
      desc: "Enhance customer loyalty and increase revenue by offering gift cards for easy gifting, tailored packages that add value, and membership programs that reward repeat purchases. These options attract new customers, encourage larger purchases, and build a loyal customer base.",
      img: seven,
      bg: "bg-[#E41728]",
      text: "text-white",
      color: "white",
    },
    {
      id: 8,
      tag: "Unlimited SMS and Email Reminders, Notifications, and Marketing",
      desc: "Stay connected with your customers effortlessly with unlimited SMS and email options. Send reminders for upcoming bookings, real-time notifications, and targeted marketing emails to keep your audience engaged and informed, all without limits. Boost customer satisfaction and retention while promoting your brand effectively via your own business email.",
      img: eight,
      bg: "bg-[#EFFCFA]",
      text: "text-black",
      color: "black",
    },
    {
      id: 9,
      tag: "Create an Attractive and Customized Booking Page with your own domain",
      desc: "Digitize and organize your daily tasks efficiently with our all-in-one platform. Use customizable E-forms for patient intake and documentation, generate prescriptions instantly for seamless medication management, and maintain accurate med charts to monitor patient treatment plans. Simplify workflows, reduce paperwork, and ensure accurate, secure record-keeping for enhanced operational efficiency and patient care.",
      img: nine,
      bg: "bg-[#19525A]",
      text: "text-white",
      color: "white",
    },
    {
      id: 10,
      tag: "Streamline Daily Operations with E-Forms, Prescriptions, and Med Charts",
      desc: "Digitize and organize your daily tasks efficiently with our all-in-one platform. Use customizable E-forms for patient intake and documentation, generate prescriptions instantly for seamless medication management, and maintain accurate med charts to monitor patient treatment plans. Simplify workflows, reduce paperwork, and ensure accurate, secure record-keeping for enhanced operational efficiency and patient care.",
      img: ten,
      bg: "bg-[#DDF0FF]",
      text: "text-black",
      color: "black",
    },
    {
      id: 11,
      tag: "Comprehensive Dashboard with Real-Time Data Insights, Prescriptions, and Med Charts",
      desc: "Access a powerful dashboard with real-time data visualization to monitor key metrics, track performance, and make instant, informed decisions. Gain valuable insights with dynamic charts and analytics, all in one intuitive interface.",
      img: eleven,
      bg: "bg-[#FCF8EF]",
      text: "text-black",
      color: "black",
    },
  ];
  return (
    <div className="container mx-auto mt-[50px] ">
      <div className="max-w-[1200px] md:mx-auto mx-[10px]">
        {Blogs.map((blog) => (
          <div
            key={blog.id}
            className={` mb-[20px] ${blog.bg} p-[30px]  rounded-[30px] ${blog.text} flex justify-end gap-[30px] items-center md:flex-row flex-col-reverse `}
          >
            <div className="flex-1">
              <h2 className="text-[30px] font-medium leading-[40px] my-[20px]">
                {blog.tag}
              </h2>
              <p className="text-[16px] font-light my-[30px]">{blog.desc}</p>

              <Link
                className="flex justify-start items-center gap-[5px]"
                href="/"
              >
                <p className="text-[14px] font-extralight border-b-[0.5px]">
                  Learn more
                </p>
                {/* <Image src={link} alt="link image" width={18} height={18} /> */}
                <svg
                  className={`${blog.text}`}
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.32393 2.25159C5.58725 2.25651 4.15418 2.32369 3.23834 3.23951C2.25 4.22782 2.25 5.8185 2.25 8.9998C2.25 12.1812 2.25 13.7718 3.23834 14.7601C4.22668 15.7485 5.8174 15.7485 8.99885 15.7485C12.1802 15.7485 13.771 15.7485 14.7593 14.7601C15.6751 13.8444 15.7423 12.4113 15.7473 9.67473"
                    stroke={`${blog.color}`}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.3612 2.63816L11.1992 6.78866M15.3612 2.63816C14.9907 2.26728 12.495 2.30186 11.9674 2.30936M15.3612 2.63816C15.7316 3.00905 15.6971 5.5075 15.6896 6.03569"
                    stroke={`${blog.color}`}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <Image
              className="flex-1"
              src={blog.img}
              alt="link image"
              width={450}
              height={400}
            />
          </div>
        ))}
      </div>
      <Replace />
    </div>
  );
};

export default BlogSection;
