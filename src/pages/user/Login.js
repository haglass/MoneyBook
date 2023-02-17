import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as css from "../../styles/Styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import tw from "tailwind-styled-components";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const SignInFunc = (event) => {
    event.preventDefault();
    if (!email) {
      return setErrMsg("이메일을 입력하세요.");
    }
    if (!pw) {
      return setErrMsg("비밀번호를 입력하세요.");
    }
  };

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
                <input
                  type="text"
                  placeholder="이메일"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="비밀번호"
                  required
                  onChange={(e) => setPw(e.target.value)}
                  maxLength={12}
                  minLength={6}
                />
              </div>
              <button onClick={(e) => SignInFunc(e)}>로그인</button>
            </form>
            {errMsg !== "" && <span>{errMsg}</span>}
            <Link to={"/join"}>
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
