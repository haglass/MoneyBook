import React from "react";

import { Link } from "react-router-dom";
import * as css from "../../styles/Styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import tw from "tailwind-styled-components";
import { useState } from "react";
import { useEffect } from "react";
const MyPage = () => {
  let initVal = {
    userid: "",
    email: "",
    password: "",
    password2: "",
    gender: "",

  };
  const [val, setVal] = useState(initVal);
  const [Selected, setSelected] = useState("");
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const handleChange = (e) => {
    // console.log(e.target); // tag = {name:"userid", value:"123"}
    // console.log(e.target.name); // tag name="userid"
    // console.log(e.target.value);// tag value
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };

  // 에러 정보 관리 객체
  const [Err, setErr] = useState({});
  const check = (_val) => {
    const errs = {};
    // 아이디 체크
    if (_val.userid.length < 5) {
      errs.userid = "아이디를 5글자 이상 입력해주세요.";
    }
    // 이메일 체크/이메일 정규표현식 이용한 처리
    if (_val.email.length < 8 || !/@/.test(_val.email)) {
      errs.email = "이메일은 최소 8글자 이상 @을 포함해 주세요.";
    }
    // 전화번호 체크
    if (_val.phone === "") {
      errs.phone = "전화번호를 입력해주세요.";
    }
    // 비밀번호
    const eng = /[a-zA-Z]/;
    const num = /[0-9]/;
    const spc = /[!@#$%^&*()_+]/;
    if (
      _val.password.length < 5 ||
      !eng.test(_val.password) ||
      !num.test(_val.password) ||
      !spc.test(_val.password)
    ) {
      errs.password =
        "비밀번호는 5글자 이상, 영문, 숫자, 특수문자를 모두 포함해 주세요.";
    }
    // 비밀번호2 체크
    if (_val.password !== _val.password2 || !_val.password2) {
      errs.password2 = "비밀번호를 동일하게 입력해주세요.";
    }
    // 생년월일체크
    if (_val.birthday === "") {
      errs.birthday = "생년월일을 선택하세요.";
    }
    // 성별 체크
    if (_val.gender === "") {
      errs.gender = "성별을 선택하세요.";
    }

    return errs;
  };
  // 데이터 조기화
  const handleReset = () => {
    setVal(initVal);
    setErr({});
  };
  // 디버깅용
  useEffect(() => {
    console.log(val);
  }, [val]);
  useEffect(() => {
    console.log(Err);
  }, [Err]);
  // 전송 실행시 각 항목의 내용 체크
  const handleSubmit = (e) => {
    // 웹브라우저가 갱신된다.
    // SPA 컨셉과 맞지 않는다.
    // state 도 초기화가 된다.
    e.preventDefault();
    // 필요항목에 대한 체크 실행
    // 각 항목 체크용 객체를 생성해 진행
    setErr(check(val));
  };

  return (
    <div>
      <css.SignUpDiv>
        <Header>
          <Link to={"/login"}>
            <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
          </Link>
          <h1 className="text-xl font-bold text-main">회원가입</h1>
        </Header>
        <div className="signup-inner">
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              id="nickName"
              name="nickName"
              placeholder="닉네임을 입력하세요."
              onChange={handleChange}
            />
            <span className="err text-xs">{Err.nickName}</span>
            <input
              required
              type="text"
              id="email"
              name="email"
              placeholder="이메일 주소를 입력해주세요."
              onChange={handleChange}
            />
            <span className="err text-xs">{Err.email}</span>
            <input
              required
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              onChange={handleChange}
            />
            <span className="err text-xs">{Err.password}</span>
            <input
              required
              type="password"
              id="password2"
              name="password2"
              placeholder="비밀번호를 입력하세요"
              onChange={handleChange}
            />
            <span className="err text-xs">{Err.password2}</span>
            <select placeholder="성별" required onChange={handleSelect}>
              <option value={0}>선택안함</option>
              <option value={1}>남자</option>
              <option value={2}>여자</option>
            </select>
            <span className="err text-xs">{Err.gender}</span>
          </form>
          <button
            onClick={(e) => {
              // registFunc();
            }}
          >
            회원가입
          </button>
        </div>
      </css.SignUpDiv>
    </div>
  );
};

const Header = tw.div`
flex
items-center
w-full
h-20
`;

export default MyPage;
