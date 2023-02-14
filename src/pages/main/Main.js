import React from "react";

// tailwind 적용
import tw from "tailwind-styled-components";

// Chart import
import MainChart from "./MainChart";

const Main = () => {
  return (
    <div>
      <MainSpan>남은 예산</MainSpan>
      <div className="flex flex-col justify-center items-center mt-40">
        <MainEdit>목표금액 수정</MainEdit>
        <MainChart />
        <div className="flex flex-col gap-7">
          <MainBt>내역추가</MainBt>
          <MainBt>상세내역</MainBt>
        </div>
      </div>
    </div>
  );
};

const MainSpan = tw.span`
absolute
font-medium
text-main
text-[24px]
mt-[100px]
ml-[163px]
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
