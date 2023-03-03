import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as css from "../../styles/Styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import tw from "tailwind-styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const Join = () => {
  // 정보를 redux 에서 참조할 때 사용 코드
  const user = useSelector((state) => state.user);
  // console.log(user.miSeq);
  // 정보를 redux 에서 업데이트 할 때 사용 코드
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let initVal = {
    nickName: "",
    email: "",
    password: "",
    password2: "",
    gender: "",
  };
  const [val, setVal] = useState(initVal);
  const [selected, setSelected] = useState(0);

  const handleSelect = (e) => {
    // console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
    setSelected(e.target.value);
  };
  const [joinErr, setJoinErr] = useState("");

  const handleChange = (e) => {
    // console.log(e.target); // tag = {name:"userid", value:"123"}
    // console.log(e.target.name); // tag name="userid"
    // console.log(e.target.value);// tag value
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };
  const registFunc = () => {
    let body = {
      miNickname: val.nickName,
      miEmail: val.email,
      miPwd: val.password,
      miCheckPwd: val.password2,
      miGen: selected,
      miTargetAmount: 0,
    };
    // console.log("회원가입시 전달되는 정보 : ", body);
    axios
      .post("http://192.168.0.151:9898/member/join", body)
      .then((res) => {
        console.log(res.data);
        alert("회원가입 완료");
        navigate("/Login");
      })
      .catch((err) => {
        console.log(err);
        setJoinErr(err.response.data.message);

        // setBtFlag(false);
      });
  };
  // 에러 정보 관리 객체
  const [Err, setErr] = useState({});
  const check = (_val) => {
    const errs = {};
    // 아이디 체크
    if (_val.nickName.length < 3) {
      errs.nickName = "닉네임를 3글자 이상 입력해주세요.";
    }
    // 이메일 체크/이메일 정규표현식 이용한 처리
    if (_val.email.length < 8 || !/@/.test(_val.email)) {
      errs.email = "이메일은 최소 8글자 이상 @을 포함해 주세요.";
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
    // 성별 체크
    if (_val.gender === "" || _val.gender === "0") {
      errs.gender = "성별을 선택하세요.";
    }
    if (Object.keys(Err).length === 0) {
      errCheck.current = false;
    } else {
      errCheck.current = true;
    }
    return errs;
  };
  const errCheck = useRef(true);
  // 디버깅용

  useEffect(() => {
    // console.log("ERROR USEEFFECT:", Err);
  }, [Err]);

  // 전송 실행시 각 항목의 내용 체크
  const handleSubmit = (e) => {
    console.log("handleSubmit : ");
    // 웹브라우저가 갱신된다.
    // SPA 컨셉과 맞지 않는다.
    // state 도 초기화가 된다.
    e.preventDefault();
    // 필요항목에 대한 체크 실행
    // 각 항목 체크용 객체를 생성해 진행
    setErr(check(val));

    let errObj = check(val);
    const count = Object.keys(errObj).length;
    // console.log("count 체크 값 : ", count);
    if (count === 0) {
      registFunc();
    }
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
            <span className="err text-xs">
              {Err.email}
              {joinErr}
            </span>
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
            <select
              placeholder="성별"
              required
              onChange={handleSelect}
              name="gender"
            >
              <option value={0}>선택안함</option>
              <option value={1}>남자</option>
              <option value={2}>여자</option>
            </select>
            <span className="err text-xs">{Err.gender}</span>

            <button
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              회원가입
            </button>
          </form>
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
