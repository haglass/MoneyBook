import React from "react";

import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
// 정보를 redux 에서 참조할 때 사용 코드
import { useSelector } from "react-redux";
const MainPage = () => {
  // 정보를 redux 에서 참조할 때 사용 코드
  const user = useSelector((state) => state.user);

  return (
    <div className=" ">
      <Link to={user.miSeq ? "/Main" : "/Login"}>
        <h1
          className="absolute font-bold text-main text-[50px]
       right-[100px] top-[250px] "
        >
          나의 텅장
        </h1>
      </Link>
      <h1
        className="absolute font-medium text-sub text-[24px]
       right-[70px] top-[330px] "
      >
        지출 가계부
      </h1>
      <Link to={user.miSeq ? "/Main" : "/Login"}>
        <img
          src="/images/logo-2.png"
          alt="로고"
          className="absolute left-[50px] bottom-[330px] scale-50 animate-bounce w-20 h-20"
        />
      </Link>
      <div className="absolute left-[52px] bottom-[300px] ">
        <Link to="/Login">
          <MainBt>로그인</MainBt>
        </Link>
      </div>
    </div>
  );
};

const MainBt = tw.button`
bg-main
text-white
text-2xl
font-bold
py-2
px-4
rounded-xl
w-80
h-12
leading-6
`;
export default MainPage;
