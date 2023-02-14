import React from "react";
import * as css from "../styles/Styles";
import { AiOutlineHome } from "react-icons/ai";
// import {AiFillHome} from "react-icons/ai"
import { BsBarChart } from "react-icons/bs";
// import {BsBarChartFill}from "react-icons/bs"

import { RiUserLine } from "react-icons/ri";
// import {RiUserFill} from "react-icons/ri"
import { FaRegComments } from "react-icons/fa";
import { Link } from "react-router-dom";
// import {FaComments} from "react-icons/fa"

const Nav = () => {
  return (
    <>
      <css.navInner className="flex justify-around py-4 text-5xl text-main ">
        <Link to="/Main">
          <button className="text-main">
            <AiOutlineHome />
          </button>
        </Link>
        {/* <AiFillHome/> */}
        <Link to="/Cart">
          <button className="text-main">
            <BsBarChart />
          </button>
        </Link>
        {/* <BsBarChartFill/> */}
        <Link to="/Login">
          <button className="text-main">
            <RiUserLine />
          </button>
        </Link>
        {/* <RiUserFill/>  */}
        <Link to="/Board">
          <button className="text-main ">
            <FaRegComments />
          </button>
        </Link>
        {/* <FaComments/> */}
      </css.navInner>
    </>
  );
};

export default Nav;
