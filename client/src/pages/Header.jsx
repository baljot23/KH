import React, { useEffect, useState } from "react";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import NavMobile from "../components/NavMobile";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    return window.scrollY > 50 ? setBg(false) : setBg(true);
  }, []);

  return (
    <header
      className={`${
        bg ? " h-20" : "h-24 underline"
      } flex items-center fixed top-0 w-full text-black z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between ">
        {/*Left-Nav*/}
        <div className="hidden lg:flex items-center text-center">
          <LeftNav />
        </div>
        {/*NavMobile*/}
        <div className="lg:hidden">
          <NavMobile />
        </div>
        {/*Logo*/}
        <a href="/" className="ease-out duration-500 font-semibold font-sans">
          KIND HEARTED
        </a>
        {/*Right-Nav*/}
        <div className="hidden lg:flex items-center text-center">
          <RightNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
