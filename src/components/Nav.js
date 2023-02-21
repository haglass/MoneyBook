import React from "react";
import * as css from "../styles/Styles";
//icon
import { AiFillHome } from "react-icons/ai";
import { BsBarChartFill } from "react-icons/bs";
import { RiUserFill } from "react-icons/ri";
import { FaComments } from "react-icons/fa";
// 정보를 redux 에서 참조할 때 사용 코드
import { useSelector } from "react-redux";

const Nav = () => {
  // 정보를 redux 에서 참조할 때 사용 코드
  const user = useSelector((state) => state.user);

  return (
    <>
      <css.navInner>
        <li>
          <css.NavStyle
            className={({ isActive }) => (isActive ? "active" : "")}
            to={user.miSeq ? "/Main" : "/Login"}
          >
            <AiFillHome />
          </css.NavStyle>
        </li>
        <li>
          <css.NavStyle
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/chart"
          >
            <BsBarChartFill />
          </css.NavStyle>
        </li>
        <li>
          <css.NavStyle
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/mypage"
          >
            <RiUserFill />
          </css.NavStyle>
        </li>
        <li>
          <css.NavStyle
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/board"
          >
            <FaComments />
          </css.NavStyle>
        </li>
      </css.navInner>
    </>
  );
};

export default Nav;
