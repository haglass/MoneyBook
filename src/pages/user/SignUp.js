import React from "react";
import { Link } from "react-router-dom";
import * as css from "../../styles/Styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import tw from "tailwind-styled-components";
import { useState } from "react";

const SingUp = () => {
  const selectList = ["선택안함", "남성", "여성"];
  const [Selected, setSelected] = useState("");
  const handleSelect = (e) => {
    setSelected(e.target.value);
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
          <form>
            <input placeholder="닉네임" />
            <span>메세지</span>
            <input placeholder="이메일" />
            <span>메세지</span>
            <input placeholder="비밀번호" />
            <span>메세지</span>
            <input placeholder="비밀번호 확인" />
            <span>메세지</span>
            <select placeholder="성별" onChange={handleSelect} value={Selected}>
              {selectList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </form>
          <button>회원가입</button>
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

export default SingUp;
