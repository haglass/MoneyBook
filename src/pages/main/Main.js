import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

// tailwind 적용
import tw from "tailwind-styled-components";

// Chart import
import MainChart from "./MainChart";

// 정보를 redux 에서 참조할 때 사용 코드
import { useSelector } from "react-redux";
import axios from "axios";

const Main = () => {
  // 정보를 redux 에서 참조할 때 사용 코드
  const user = useSelector((state) => state.user);
  const [expenses, setExpenses] = useState([]);
  const navigate = useNavigate();

  const eData = async () => {
    try {
      const res = await axios.get(
        `http://192.168.0.151:9898/expenses/target/${user.miSeq}`
      );
      setExpenses(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const cashBt = (e) => {
    navigate("/mypage");
  };

  useEffect(() => {
    eData();
  }, []);
  return (
    <div>
      <span className="absolute font-medium text-main text-[24px] right-[162px] top-[220px]">
        남은 예산
      </span>
      <div className="flex flex-col justify-center items-center mt-40 relative">
        <span className="absolute font-medium text-sub text-[16px] top-[210px]">
          {user.miTargetAmount < 1 ? (
            <>
              <span>현재 목표 금액이 없습니다.</span>
              <br />
              <MainEdit
                onClick={(e) => {
                  cashBt();
                }}
              >
                목표금액 설정
              </MainEdit>
            </>
          ) : (
            <>
              <span>예산 진행률 {Math.floor(expenses.remainingRete)}%</span>
              <br />
              <MainEdit
                onClick={(e) => {
                  cashBt();
                }}
              >
                목표금액 수정
              </MainEdit>
            </>
          )}
        </span>

        <div className="absolute top-[100px] z-1">
          <div className="flex flex-col items-center ">
            {/* 소비된 금액을 userSlice.js 에서 추가할 필요성 있을까? */}
            <MainText>{expenses.remaining}원</MainText>
            <MainText2>/{expenses.target}원</MainText2>
          </div>
        </div>
        <MainChart expenses={expenses} />
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
h-[30px]
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
