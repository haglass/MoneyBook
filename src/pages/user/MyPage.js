import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as css from "../../styles/Styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import tw from "tailwind-styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const MyPage = () => {
  const user = useSelector((state) => state.user);
  let initVal = {
    userid: "",
    email: "",
    nowPassword: "",
    password: "",
    password2: "",
  };

  // 설정 금액
  const cash = () => {
    let body = {
      miTargetAmount: don,
    };
    axios
      .post(`http://192.168.0.151:9898/member/updatemoney/${user.miSeq}`, body)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [don, setDon] = useState(0);
  const [val, setVal] = useState(initVal);
  const onChange = (e) => {
    setDon(e.target.value);
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
    // 닉네임 체크
    if (_val.nickName.length < 3) {
      errs.nickName = "닉네임을 5글자 이상 입력해주세요.";
    }
    // 이메일 체크/이메일 정규표현식 이용한 처리
    if (_val.email.length < 8 || !/@/.test(_val.email)) {
      errs.email = "이메일은 최소 8글자 이상 @을 포함해 주세요.";
    }
    // 비밀번호
    const eng = /[a-zA-Z]/;
    const num = /[0-9]/;
    const spc = /[!@#$%^&*()_+]/;
    if (!_val.nowPassword) {
      errs.nowPassword = "현재 비밀번호를 입력하세요.";
    }
    if (
      _val.password.length < 6 ||
      !eng.test(_val.password) ||
      !num.test(_val.password) ||
      !spc.test(_val.password)
    ) {
      errs.password =
        "비밀번호는 6글자 이상 12글자 이하, 영문, 숫자, 특수문자를 모두 포함해 주세요.";
    }
    // 비밀번호2 체크
    if (_val.password !== _val.password2 || !_val.password2) {
      errs.password2 = "비밀번호를 동일하게 입력해주세요.";
    }
    return errs;
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
    alert("업데이트 해요");
    // 웹브라우저가 갱신된다.
    // SPA 컨셉과 맞지 않는다.
    // state 도 초기화가 된다.
    e.preventDefault();
    // 필요항목에 대한 체크 실행
    // 각 항목 체크용 객체를 생성해 진행
    setErr(check(val));
    // 서버로 updatemoney 를 한다.
    cash();
  };
  const navigate = useNavigate();
  const userDeleteBt = (e) => {
    e.preventDefault();

    if (window.confirm("정말 탈퇴하겠습니까?")) {
      axios
        .post(`http://192.168.0.151:9898/member/delete?miSeq=${user.miSeq}`)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
      alert("탈퇴 되었습니다.");
    } else {
      alert("취소 되었습니다.");
    }
  };
  const pwEd = (e) => {
    axios
      .post(`http://192.168.0.151:9898/member/update/pwd/${user.miSeq}`)
      .then((res) => {
        alert("수정되었습니다.");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const nicknameEd = (e) => {
    axios
      .post(`http://192.168.0.151:9898/member/update/nickname/${user.miSeq}`)
      .then((res) => {
        alert("수정되었습니다.");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <css.MyPageDiv>
        <Header>
          <Link to={"/login"}>
            <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
          </Link>
          <h1 className="text-xl font-bold text-main">마이페이지</h1>
        </Header>
        <div className="myPage-inner">
          <div className="ml-3 mt-5">
            <h1 className="tex-2xl text-sub text-2xl font-bold">
              내꿈은 부자 <span className=" text-main text-xs">님</span>
            </h1>
            <div className=" mt-5">
              <span className=" text-main text-xl font-bold ">예산</span>
              <div className="flex justify-between items-center mt-3">
                <input
                  type="text"
                  placeholder="수정금액"
                  value={don}
                  required
                  onChange={(e) => setDon(e.target.value)}
                />
                <button onClick={onChange} className="rewrite">
                  수 정
                </button>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="userid"
              name="userid"
              placeholder="닉네임을 입력하세요."
              onChange={handleChange}
            />
            <span className="err text-xs">{Err.userid}</span>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="이메일 주소를 입력해주세요."
              onChange={handleChange}
            />
            <span className="err text-xs">{Err.email}</span>
            <input
              type="text"
              id="nowPassword"
              name="nowPassword"
              placeholder="현재 비밀번호를 입력하세요"
              onChange={handleChange}
            />
            <span className="err text-xs">{Err.nowPassword}</span>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="수정 할 비밀번호를 입력하세요"
              onChange={handleChange}
            />
            <span className="err text-xs">{Err.password}</span>
            <input
              type="password"
              id="password2"
              name="password2"
              placeholder="비밀번호 확인을 입력하세요"
              onChange={handleChange}
            />
            <span className="err text-xs">{Err.password2}</span>
          </form>
          <div className="flex justify-center">
            <button
              type="submit"
              onClick={handleSubmit}
              value="SUBMIT"
              className="ml-3"
            >
              정보수정
            </button>
            <button
              type="button"
              onClick={(e) => {
                userDeleteBt();
              }}
            >
              회원탈퇴
            </button>
          </div>
        </div>
      </css.MyPageDiv>
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
