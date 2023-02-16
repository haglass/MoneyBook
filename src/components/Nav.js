import React from "react";
import * as css from "../styles/Styles";
import { Link, NavLink } from "react-router-dom";
//icon
import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";
import { RiUserFill } from "react-icons/ri";
import { FaRegComments } from "react-icons/fa";
import { FaComments } from "react-icons/fa";

import { useState } from "react";

const Nav = () => {
  const [navIcon, setNavIcon] = useState({
    focus: false,
  });
  const handleNavIcon = (e) => {
    setNavIcon(() => {
      if (!navIcon.focus) {
        return { focus: true };
      }
      return { focus: false };
    });
  };

  return (
    <>
      <css.navInner className="flex justify-around py-4 text-5xl ">
        <css.NavStyle
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          <AiFillHome />
        </css.NavStyle>
        <css.NavStyle
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/Chart"
        >
          <BsBarChartFill />
        </css.NavStyle>
        <css.NavStyle
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/Login"
        >
         
            <RiUserFill />
        
        </css.NavStyle>
        <css.NavStyle
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/Board"
        >
         
        <FaComments />
         
        </css.NavStyle>
      </css.navInner>
    </>
  );
};

export default Nav;
