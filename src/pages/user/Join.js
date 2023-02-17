import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as css from "../../styles/Styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import tw from "tailwind-styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Join = () => {
  const navigate = useNavigate();
  const [btFlag, setBtFlag] = useState(false);
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [gender, setGender] = useState(0);

  const handleSelect = (e) => {
    setGender(e.target.value);
  };

  const registFunc = (e) => {
    if (!nickName) {
      alert("닉네임을 입력하세요.");
    }
    if (!email) {
      alert("이메일을 입력하세요.");
    }
    if (!pw) {
      alert("비밀번호을 입력하세요.");
    } else if (pw.length < 6) {
      alert("비밀번호를 6자리 이상 12자리 이하입니다.");
    }
    if (!pwCheck) {
      alert("비밀번호 확인을 입력하세요.");
    }
    if (pw !== pwCheck) {
      alert("비밀번호는 같아야 합니다.");
    }
    if (!gender) {
      alert("성별을 선택하세요.");
    }
    setBtFlag(true);
    let body = {
      miNickname: nickName,
      miEmail: email,
      miPwd: pw,
      miCheckPwd: pwCheck,
      miGen: gender,
    };
    axios
      .post("http://192.168.0.151:9898/member/join", body)
      .then((res) => {
        console.log(res.data);
        navigate("/Login");
      })
      .catch((err) => {
        console.log(err);
        setBtFlag(false);
      });
  };

  useEffect(() => {}, []);
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
          <input
            type="text"
            placeholder="닉네임을 입력하세요."
            required
            onChange={(e) => setNickName(e.target.value)}
          />
          <span className="err text-xs"></span>
          <input
            type="text"
            placeholder="이메일 주소를 입력해주세요."
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="err text-xs"></span>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            required
            onChange={(e) => setPw(e.target.value)}
            maxLength={12}
            minLength={6}
          />
          <span className="err text-xs"></span>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            required
            onChange={(e) => setPwCheck(e.target.value)}
            maxLength={12}
            minLength={6}
          />
          <span className="err text-xs"></span>
          <select placeholder="성별" required onChange={handleSelect}>
            <option value={0}>선택안함</option>
            <option value={1}>남자</option>
            <option value={2}>여자</option>
          </select>
          <span className="err text-xs"></span>
          <button
            onClick={(e) => {
              registFunc();
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
export default Join;
