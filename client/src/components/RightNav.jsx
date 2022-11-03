import React from "react";
import { Link } from "react-scroll";
import { rightnavigation } from "./data/navigation";

const RightNav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {rightnavigation.map((item, index) => {
          return (
            <li
              className="text-black hover:text-white cursor-pointer"
              key={index}
            >
              <Link
                to={item.href}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default RightNav;
