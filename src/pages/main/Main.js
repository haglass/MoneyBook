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
  function priceToString(price) {
    if (price === undefined || price === null) return;
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div>
      
      <div className="absolute left-4 top-2">
      <img src="/images/money.png" alt="money" className="scale-[10%] absolute left-[35px] top-200 " />
        <h1
          className=" font-medium text-sub text-[17px] 
         "
        >
          잘 살아보기
        </h1>{" "}
        
        <h1
          className="font-bold text-main text-[30px] ml-3
      "
        >
          나의 텅장
        </h1>
        
      </div>
      <span className="absolute font-medium text-main text-[24px] right-[162px] top-[230px]">
        남은 예산
      </span>

      <div className="flex flex-col justify-center items-center mt-40 relative">
        {user.miTargetAmount < 1 ? (
          <>
            <img
              src="/images/chart.png"
              alt="chart"
              className="absolute bottom-[200px] w-[342px] "
            />
            <span className=" absolute bottom-[320px] left-[50%] -translate-x-2/4">
              현재 목표 금액이 없습니다.
            </span>
            <br />
            <MainEdit
              onClick={(e) => {
                cashBt();
              }}
            >
              목표금액 설정
            </MainEdit>
            {/* <MainChart expenses={expenses} /> */}
          </>
        ) : (
          <>
            <span className=" absolute bottom-[320px] left-[50%] -translate-x-2/4">
              예산 진행률 {Math.floor(expenses.remainingRete)}%
            </span>
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
        <span className="absolute font-medium text-sub text-[16px] top-[210px]"></span>

        <div className="absolute top-[110px] z-1">
          <div className="flex flex-col items-center ">
            {/* 소비된 금액을 userSlice.js 에서 추가할 필요성 있을까? */}
            <MainText>{priceToString(expenses.remaining)}원</MainText>
            <MainText2>/ {priceToString(expenses.target)}원</MainText2>
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <MainChart expenses={expenses} />
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

const MainEdit = tw.button`
absolute
border
border-main
text-sub
w-[100px]
h-[30px]
rounded-xl
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
