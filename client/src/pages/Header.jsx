import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    return window.scrollY > 50 ? setBg(false) : setBg(true);
  }, []);

  return (
    <header
      className={`${
        bg ? "bg-stone-300 h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between ">
        {/*Logo*/}
        <a href="/" className="ease-out duration-500 font-semibold font-sans">
          KIND HEARTED
        </a>

        {/*Nav*/}
        <div className="hidden lg:flex items-center text-center">
          <Nav />
        </div>

        {/*NavMobile*/}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
