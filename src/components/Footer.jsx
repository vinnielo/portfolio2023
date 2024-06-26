import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Footer({ current, setCurrent }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      setCurrent("About");
    } else if (location.pathname === "/apps") {
      setCurrent("Applications");
    } else if (location.pathname === "/contact") {
      setCurrent("Contact");
    } else {
      setCurrent("home");
    }
  }, []);
  return (
    <footer
      className={
        current === "About"
          ? "bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600"
          : "fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600"
      }
    >
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Vinnielo™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="/about" className="mr-4 hover:underline md:mr-6">
            About
          </a>
        </li>
        {/* <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            
          </a>
        </li> */}
        {/* <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li> */}
        <li>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
