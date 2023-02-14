import React from "react";
import { Link } from "react-router-dom";
import * as css from "../../styles/Styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import tw from "tailwind-styled-components";

const Login = () => {
  return (
    <div>
      <css.LoginDiv>
        <Header>
          <Link to={"/"}>
            <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
          </Link>
          <h1 className="text-xl font-bold text-main">로그인</h1>
        </Header>
        <div className="login-inner">
          <div className="login-area">
            <form>
              <div className="left">
                <input placeholder="아이디" />
                <input placeholder="비밀번호" />
              </div>
              <button>로그인</button>
            </form>
            <span>유효성메세지</span>
            <Link to={"/signup"}>
              <button className="btSignUp">회원가입</button>
            </Link>
          </div>
          <div className="sns-area">
            <span>SNS 간편로그인</span>
            <div className="line"></div>
            <div className="sns">
              <Link to={"/"}>
                <img src="/images/snslogo1.jpg" alt="kakao" />
              </Link>
              <Link to={"/"}>
                <img src="/images/snslogo2.jpg" alt="google" />
              </Link>
            </div>
          </div>
        </div>
      </css.LoginDiv>
    </div>
  );
};

const Header = tw.div`
flex
items-center
w-full
h-20
`;

export default Login;
