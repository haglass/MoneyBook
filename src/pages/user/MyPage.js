import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as css from "../../styles/Styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import tw from "tailwind-styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

// 정보를 redux 에서 참조할 때 사용 코드
import { useSelector } from "react-redux";
// 정보를 redux 에서 업데이트 할 때 사용 코드
import { useDispatch } from "react-redux";
import { clearUser } from "../../reducer/userSlice";

import { type } from "@testing-library/user-event/dist/type";
// 회원테스트 정보 : aaa1@aaa.net    QWERt12!
const MyPage = () => {
  // 정보를 redux 에서 참조할 때 사용 코드
  const user = useSelector((state) => state.user);
  console.log(user.miSeq);
  // 정보를 redux 에서 업데이트 할 때 사용 코드
  const dispatch = useDispatch();

  let initVal = {
    nickname: "",
    email: "",
    nowPassword: "",
    password: "",
    password2: "",
  };

  // 설정 금액
  const cash = () => {
    console.log("예산: ", don);
    console.log("user: ", user);
    console.log("user.miSeq: ", user.miSeq);

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
  const handleChange = (e) => {
    // console.log(e.target);
    // tag = {name:"nickname", value:"123"}
    // console.log(e.target.name); // tag name="nickname"
    // console.log(e.target.value);// tag value
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };
  // 에러 정보 관리 객체
  const [Err, setErr] = useState({});
  const check = (_val) => {
    const errs = {};
    // 닉네임 체크
    if (_val.nickname.length < 3) {
      errs.nickname = "닉네임을 5글자 이상 입력해주세요.";
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
      _val.password.length < 5 ||
      !eng.test(_val.password) ||
      !num.test(_val.password) ||
      !spc.test(_val.password)
    ) {
      errs.password =
        "비밀번호는 5글자 이상 12글자 이하, 영문, 숫자, 특수문자를 모두 포함해 주세요.";
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

  // 예산을 수정시 항목 체크
  const handleDonSubmit = (e) => {
    e.preventDefault();
    if (don === 0) return alert("0원 이상 입력하세요.");
    // 서버로 updatemoney 를 한다.
    cash();
  };
  // 전송 실행시 각 항목의 내용 체크
  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(check(val));
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
          <Link to={"/main"}>
            <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
          </Link>
          <h1 className="text-xl font-bold text-main">마이페이지</h1>
        </Header>
        <div className="myPage-inner">
          <div>
            <h1 className="tex-2xl text-sub text-2xl font-bold">
              {user.miNickname} <span className=" text-main text-lg">님</span>
            </h1>
            <div className=" mt-5">
              <span className=" text-main text-xl font-bold ">예산</span>
              <div className="editdon">
                <form onSubmit={handleDonSubmit}>
                  <input
                    type="text"
                    placeholder="수정금액"
                    value={don}
                    required
                    onChange={(e) => setDon(parseInt(e.target.value))}
                  />
                  <button type="submit" className="rewrite">
                    수 정
                  </button>
                </form>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="nickname"
              name="nickname"
              placeholder="닉네임을 입력하세요."
              onChange={handleChange}
            />
            <span className="err text-xs">{Err.nickname}</span>
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
          <div className="flex justify-between">
            <button type="submit" onClick={handleSubmit} value="SUBMIT">
              정보수정
            </button>
            <button
              type="button"
              onClick={(e) => {
                userDeleteBt();
                navigate("/");
              }}
            >
              회원탈퇴
            </button>
            <button
              type="button"
              onClick={(e) => {
                dispatch(clearUser());
                navigate("/");
              }}
            >
              로그아웃
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
