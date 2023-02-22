import React, { useEffect, useState } from "react";
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
  const [selected, setSelected] = useState("");
  const [top, setTop] = useState([]);
  const expenditure = (e) => {
    let body = {
      edtitle: history,
      cateSeq: selected,
      edDate: day,
      edAmont: won,
    };
    axios
      .put(`http://192.168.0.151:9898/expenses/insert/${user.miSeq}`, body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
    <article>
      <div>
        <Header>
          <button onClick={() => navigate(-1)}>
            <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
          </button>

          <h1 className="text-xl font-bold text-main">내역추가</h1>
        </Header>
        <div>
          <div className="flex flex-col gap-2 p-8 pb-16">
            <MainBt className="flex justify-between text-xl">
              <input
                placeholder="- 소비금액 원"
                className="hover:outline-white ml-3 outline-white"
                onChange={(e) => {
                  setWon(e.target.value);
                }}
              />
            </MainBt>
            <MainBt className="flex text-xl">
              <FaCapsules className="text-main text-3xl font-bold " />
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
                placeholder="내역"
                className="ml-3 hover:outline-white outline-white"
                onChange={(e) => {
                  setHistory(e.target.value);
                }}
              />
            </MainBt>
            <MainBt className="flex text-xl ">
              <input
                type="date"
                className="ml-3 hover:outline-white outline-white"
                onChange={(e) => {
                  setDay(e.target.value);
                }}
              />
            </MainBt>
          </div>
        </div>

        <h1 className="text-xl  text-main pl-8 ">최근 소비</h1>
        {top.map((item, index) => (
          <div className="  px-8 pt-5" key={index}>
            <MainBt className="w-full">
              <div className="flex items-center mb-3">
                <FaThumbtack className=" text-main text-base font-bold " />
                <span className="text-base font-bol text-main">
                  {item.edTitle}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs  text-sub">{item.edDate}</span>
                <span className="text-base text-sub pl-20">
                  {priceToString(item.edAmount)} 원
                </span>
              </div>
            </MainBt>
          </div>
        ))}

        <div className="  p-8 ">
          <MainBt
            className="w-5/6 absolute bottom-36 inline-block bg-main  text-white"
            onClick={() => expenditure()}
          >
            저장하기
          </MainBt>
        </div>
      </div>
    </article>
  );
};
const Header = tw.div`
flex
items-center
w-full
h-20
`;
const MainBt = tw.button`
border
border-main
text-sub
text-2xl
py-2
px-4
rounded-xl
w-90

`;
export default MainAddD;
