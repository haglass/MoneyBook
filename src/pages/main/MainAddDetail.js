import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaCapsules } from "react-icons/fa";
import { FaThumbtack } from "react-icons/fa";
import tw from "tailwind-styled-components";
const MainAddD = () => {
  return (
    <article>
    <div>
      <Header>
        <Link to={"/"}>
          <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
        </Link>
        <h1 className="text-xl font-bold text-main">내역추가</h1>
      </Header>
      <div>
        <div className="flex flex-col gap-2 p-8 pb-16">
          <MainBt className="flex justify-between text-xl">
            - 소비금액 <p>원</p>
          </MainBt>
          <MainBt className="flex text-xl">
            <FaCapsules className="text-main text-3xl font-bold " />
            <span className="pl-2">내용</span>
          </MainBt>
        </div>
      </div>
      <h1 className="text-xl  text-main pl-8 ">최근 소비</h1>

      <div className="  px-8 pt-5">
        <MainBt className="w-full ">
          <div className="flex items-center mb-3">
            <FaThumbtack className=" text-main text-base font-bold " />
            <span className="text-base font-bol text-main">고정지출입니다</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs  text-sub">2월 14일</span>
            <span className="text-base text-sub pl-20">50,000 원</span>
          </div>
        </MainBt>
      </div>
      <div className="  p-8 ">
        <MainBt className="w-5/6 absolute bottom-36 inline-block bg-main  text-white">
          저장하기
        </MainBt>
      </div>
    </div>
</article>
  );
};
const Header = tw.div`
flex
items-center
w-full
h-20
`;
const MainBt = tw.button`
border
border-main
text-sub
text-2xl
py-2
px-4
rounded-xl
w-90

`;
export default MainAddD;
