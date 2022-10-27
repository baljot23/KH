import React from "react";

const Nav = () => {
  return (
    <nav className="hidden md:flex items-center content-center space-x-1">
      <a
        href=""
        className="py-4 px-2 text-white border-b-4 font-semibold font-sans"
      >
        HOME
      </a>
      <a
        href="/shop"
        className="py-4 px-2 text-white font-semibold font-sans transition duration-300"
      >
        SHOP
      </a>
      <a
        href="/collections"
        className="py-4 px-2 text-white font-semibold font-sans transition duration-300"
      >
        COLLECTIONS
      </a>
      <a
        href="/contact-us"
        className="py-4 px-2 text-white font-semibold font-sans transition duration-300"
      >
        CONTACT US
      </a>
      <a
        href="/final-sale"
        className="py-4 px-2 text-white font-semibold font-sans transition duration-300"
      >
        FINAL SALE
      </a>
    </nav>
  );
};

export default Nav;
