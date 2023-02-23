import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaCapsules } from "react-icons/fa";
import { FaThumbtack } from "react-icons/fa";
import tw from "tailwind-styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { BiCategory } from "react-icons/bi";
const MainAddD = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [won, setWon] = useState("");
  const [history, setHistory] = useState("");
  const [day, setDay] = useState("");
  const [category, setCategory] = useState([]);
  const [selected, setSelected] = useState(1);
  const [top, setTop] = useState([]);

  // 에러 정보 관리 객체let
  const initVal = {
    won: "",
    history: "",
    day: "",
  };
  const [val, setVal] = useState(initVal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };

  const [Err, setErr] = useState({});
  const errCheck = useRef(true);
  const check = (_val) => {
    const errs = {};
    // 지출금액 체크
    console.log(_val);
    if (_val.won === 0 || _val.won === "") {
      errs.won = "금액을 입력해주세요.";
    }
    // 히스토리 체크
    if (_val.history.length < 1) {
      errs.history = "항목 내용을 입력해주세요.";
    }
    // 날짜 체크
    if (_val.day === "") {
      errs.day = "날짜를 입력해주세요.";
    }

    if (Object.keys(Err).length === 0) {
      errCheck.current = false;
    } else {
      errCheck.current = true;
    }
    return errs;
  };
  const expenditure = (e) => {
    e.preventDefault();
    setErr(check(val));
    let errObj = check(val);
    const count = Object.keys(errObj).length;
    if (count === 0) {
      let body = {
        edtitle: val.history,
        cateSeq: selected,
        edDate: val.day,
        edAmont: val.won,
      };
      // console.log(body);
      axios
        .put(`http://192.168.0.151:9898/expenses/insert/${user.miSeq}`, body)
        .then((res) => {
          console.log(res.data);
          if (res.data.status) {
          alert("추가 되었습니다");
            navigate("/maindetail");
          } else {
            console.log("항목을 채워주세요.");
            alert("다시 시도해 주세요.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const cate = async () => {
    try {
      const res = await axios.get(
        "http://192.168.0.151:9898/expenses/categoryList"
      );
      setCategory(res.data);
      // console.log(res.data.map((item) => item.cateSeq));
      const res2 = await axios.get(
        `http://192.168.0.151:9898/expenses/NmonthTop3/${user.miSeq}`
      );
      setTop(res2.data);
      console.log(res2.data.map((item) => item.edSeq));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    cate();
  }, []);

  function priceToString(price) {
    if (price === undefined || price === null) return;
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div>
      <Header>
        <button onClick={() => navigate(-1)}>
          <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
        </button>
        <h1 className="text-xl font-bold text-main">내역추가</h1>
      </Header>
      <div className="px-5">
        <div className="flex flex-col gap-2 py-8 pb-20">
          <input
            className="outline-none py-2 px-4 border-main border rounded-xl"
            placeholder="지출 금액                                    -                     원"
            name="won"
            onChange={handleChange}
          />
          <span className="err text-xs">{Err.won}</span>
          <div className="flex items-center border border-main text-sub py-2 px-2 rounded-xl">
            <select
              onChange={(e) => {
                setSelected(e.target.value);
              }}
            >
              {category.map((item, index) => (
                <option key={index} value={item.cateSeq}>
                  {item.cateName}
                </option>
              ))}
            </select>
            <input
              placeholder="내용 입력"
              className="ml-5 outline-none px-4"
              name="history"
              onChange={handleChange}
            />
          </div>
          <span className="err text-xs">{Err.history}</span>
          <input
            type="date"
            className="outline-none py-2 px-4 text-sub border-main border rounded-xl cursor-pointer"
            name="day"
            onChange={handleChange}
          />
          <span className="err text-xs">{Err.day}</span>
        </div>
        <div>
          <h1 className="text-xl  text-main mb-5">최근 소비</h1>
          {top.map((item, index) => (
            <div
              className="border border-main py-2 px-4 rounded-xl mb-3"
              key={index}
            >
              <div>
                <div className="flex items-center mb-2">
                  <FaThumbtack className=" text-main text-base font-bold mr-1" />
                  <span className="text-base font-bol text-main mb-1">
                    {item.edTitle}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs  text-sub">{item.edDate}</span>
                  <span className="text-base text-sub pl-20">
                    {priceToString(item.edAmount)} 원
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-main  text-white border border-main rounded-xl py-2 text-2xl mt-14"
          onClick={(e) => expenditure(e)}
        >
          저장하기
        </button>
      </div>
    </div>
  );
};
const Header = tw.div`
flex
items-center
w-full
h-20
`;

export default MainAddD;
