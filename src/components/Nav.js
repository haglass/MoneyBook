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

  const selected = {
    background: "red",
    border: "5px solid green",
  };
  return (
    <>
      <css.navInner className="flex justify-around py-4 text-5xl ">
        <NavLink to="/" activeClassName="selected">
          <div onClick={handleNavIcon}>
            {navIcon.focus ? <AiOutlineHome /> : <AiFillHome />}
          </div>
        </NavLink>

        <NavLink to="/Chart" activeClassName="selected">
          <div onClick={handleNavIcon}>
            {navIcon.focus ? <BsBarChart /> : <BsBarChartFill />}
          </div>
        </NavLink>
        <NavLink to="/Login" activeClassName="selected">
          <div onClick={handleNavIcon}>
            {navIcon.focus ? <RiUserLine /> : <RiUserFill />}
          </div>
        </NavLink>
        <NavLink to="/Board" activeClassName="selected">
          <div onClick={handleNavIcon}>
            {navIcon.focus ? <FaRegComments /> : <FaComments />}
          </div>
        </NavLink>
      </css.navInner>
    </>
  );
};

export default Nav;
