import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import tw from "tailwind-styled-components";

const Main = () => {
  return (
    <>
      <Header>
        <Link to={"/"}>
          <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
        </Link>
        <h1 className="text-xl font-bold text-main">나의 텅장</h1>
      </Header>
    </>
  );
};

const Header = tw.div`
flex
items-center
w-full
h-20
`;

export default Main;
