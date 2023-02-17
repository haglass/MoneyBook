import React from "react";

import { Link, useNavigate } from "react-router-dom";

// tailwind 적용
import tw from "tailwind-styled-components";

// Chart import
import MainChart from "./MainChart";
const Main = () => {
  const navigate = useNavigate();
  const cashBt = (e) => {
    navigate("/mypage");
  };
  return (
    <div>
      <span className="absolute font-medium text-main text-[24px] right-[162px] top-[220px]">
        남은 예산
      </span>
      <div className="flex flex-col justify-center items-center mt-40 relative">
        <span className="absolute font-medium text-sub text-[16px] top-[210px]">
          예산 진행률 70%
        </span>
        <MainEdit
          onClick={(e) => {
            cashBt();
          }}
        >
          목표금액 수정
        </MainEdit>
        <div className="absolute top-[100px] z-1">
          <div className="flex flex-col items-center ">
            <MainText>40,000원</MainText>
            <MainText2>/50,000원</MainText2>
          </div>
        </div>
        <MainChart />
        <div className="flex flex-col gap-7">
          <Link to="/MainAddDetail">
            <MainBt>내역추가</MainBt>
          </Link>
          <Link to="/MainDetail">
            <MainBt>상세내역</MainBt>
          </Link>
        </div>
      </div>
    </div>
  );
};

const MainText2 = tw.span`
text-[24px] 
font-bold 
text-sub2
`;
const MainText = tw.span`
text-[36px]
font-bold
text-sub
mb-2
`;
const MainSpan = tw.span`
absolute
font-medium
text-main
text-[24px]
`;

const MainEdit = tw.button`
absolute
border
border-main
text-sub
w-[100px]
h-[18px]
rounded-full
text-xs
font-bold
z-10
`;

const MainBt = tw.button`
bg-main
text-white
text-2xl
font-bold
py-2
px-4
rounded-xl
w-80
h-10
leading-6
`;
export default Main;
