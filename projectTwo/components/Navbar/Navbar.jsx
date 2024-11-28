"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Default menu state to closed
  const [openDropdown, setOpenDropdown] = useState(null); // dropdown menu state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // dropdown menu
  const menuItems = [
    { name: "Features", dropdown: ["Feature 1", "Feature 2", "Feature 3"] },
    { name: "Plans" },
    { name: "Solutions", dropdown: ["Solution 1", "Solution 2"] },
    { name: "Resources", dropdown: ["Blog", "Docs", "Tutorials"] },
    { name: "Find Professionals" },
    { name: "Help", dropdown: ["FAQ", "Contact Support"] },
  ];
  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="border-b border-light-gray">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo Section */}
        <div className="navbar-logo">
          <Link href="/">
            <Image src={logo} alt="Logo" width={150} height={39} priority />
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="gray"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              // Open Icon
              <svg
                viewBox="0 0 100 80"
                width="20"
                height="20"
                className="fill-gray"
              >
                <rect width="100" height="20" rx="10"></rect>
                <rect y="30" width="100" height="20" rx="10"></rect>
                <rect y="60" width="100" height="20" rx="10"></rect>
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Links Section */}
        <div className="hidden md:flex items-center justify-center space-x-8">
          <ul className="flex space-x-4 text-gray text-sm md:text-base xl:text-[16px] xl:gap-x-[20px]">
            {menuItems.map((item, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => handleDropdown(index)}
                  className="flex items-center hover:text-blue-600"
                >
                  {item.name}
                  {item.dropdown && (
                    <span className="ml-2">
                      {openDropdown === index ? (
                        <svg
                          className="rotate-180"
                          width="9"
                          height="6"
                          viewBox="0 0 9 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16553 1.49268L4.49747 4.82462L7.82941 1.49268"
                            stroke="#595959"
                            strokeWidth="1.66597"
                            strokeLinecap="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="9"
                          height="6"
                          viewBox="0 0 9 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16553 1.49268L4.49747 4.82462L7.82941 1.49268"
                            stroke="#595959"
                            strokeWidth="1.66597"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </span>
                  )}
                </button>
                {item.dropdown && openDropdown === index && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md">
                    {item.dropdown.map((submenu, subIndex) => (
                      <li
                        key={subIndex}
                        className="hover:bg-gray-100 px-4 py-2 text-gray-800"
                      >
                        <Link href="/">{submenu}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Login/Signup Buttons */}
        <div className="hidden md:flex items-center space-x-4 ">
          <Link href="/login">
            <button className="px-4 py-2 text-white bg-green rounded-[5px]   text-sm md:text-base xl:text-[16px]">
              Sign Up
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-3  text-gray text-sm md:text-base xl:text-[16px]">
              Sign In
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}

      {isMenuOpen && (
        <div className="container md:hidden bg-white mx-auto text-gray">
          <ul className="flex flex-col text-center space-y-4 text-gray-700 px-4 py-6">
            {menuItems.map((item, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => handleDropdown(index)}
                  className="flex justify-between items-center w-full text-left hover:text-blue-600"
                >
                  {item.name}
                  {item.dropdown && (
                    <span>
                      {openDropdown === index ? (
                        <svg
                          className="rotate-180"
                          width="9"
                          height="6"
                          viewBox="0 0 9 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16553 1.49268L4.49747 4.82462L7.82941 1.49268"
                            stroke="#595959"
                            strokeWidth="1.66597"
                            strokeLinecap="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="9"
                          height="6"
                          viewBox="0 0 9 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16553 1.49268L4.49747 4.82462L7.82941 1.49268"
                            stroke="#595959"
                            strokeWidth="1.66597"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </span>
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === index && (
                  <ul className="mt-2 bg-gray-50 text-left rounded-md shadow-inner">
                    {item.dropdown.map((submenu, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
                      >
                        <Link href="/" onClick={toggleMenu}>
                          {submenu}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Log In and Sign Up Buttons */}
            <div className="flex flex-col space-y-4 mt-4">
              <Link href="/login">
                <button className="px-4 py-2  rounded bg-green text-white  w-[100%]">
                  Sign Up
                </button>
              </Link>
              <Link href="/signup">
                <button className="px-4 py-2  border border-gray-300 rounded text-gray-700  w-[100%]">
                  Sign In
                </button>
              </Link>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
