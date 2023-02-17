import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { FaCapsules } from "react-icons/fa";

import tw from "tailwind-styled-components";

const MainDetail = () => {
  return (
    <div>
      <Header>
        <Link to={"/"}>
          <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
        </Link>
        <h1 className="text-xl font-bold text-main">상세내역</h1>
      </Header>

      <div className="w-full h-60 p-8 flex flex-col gap-1 border-b-4 border-sub2">
        <span className="text-l font-bold  text-main">소비 합계</span>
        <span className="text-3xl pt-5  text-sub font-bold"> 80,000 원 </span>
        <br />
        <Link to={"/MainAddDetail"}>
          <MainBt>내역추가</MainBt>
        </Link>
      </div>

      <div className="w-full p-8  flex flex-col gap-3">
        <span className="text-xl font-bold  text-main ">2.28 화요일</span>
        <div className="flex justify-between mb-5">
          <FaCapsules className="text-main text-2xl font-bold " />
          <span className="text-xl   text-sub font-bold"> -80,000원</span>
        </div>
        <span className="text-xl font-bold  text-main">2.28 화요일</span>
        <div className="flex justify-between">
          <FaCapsules className="text-main text-2xl font-bold " />
          <span className="text-xl   text-sub font-bold"> -80,000원</span>
        </div>
      </div>
    </div>
  );
};
const Header = tw.div`
flex
items-center
w-full
h-20
`;

const MainBt = tw.button`
bg-main
text-white
text-sm
font-bold
rounded-xl
w-20
h-10
py-2

`;

export default MainDetail;
