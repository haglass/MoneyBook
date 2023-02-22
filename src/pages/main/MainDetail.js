import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { FaCapsules } from "react-icons/fa";

import tw from "tailwind-styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

const MainDetail = () => {
  const user = useSelector((state) => state.user);
  const [month, setMonth] = useState([]);
  const [top, setTop] = useState([]);
  const [total, setTotal] = useState([]);
  const monthList = async () => {
    try {
      const res = await axios.get(
        `http://192.168.0.151:9898/expenses/monthList/${user.miSeq}?year=2023&month=02`
      );
      setMonth(res.data);
      setTotal(res.data.map((item) => item.edAmount));
    } catch (err) {
      console.log(err);
    }
  };

  const initialValue = 0;
  const sumWithInitial = total.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  useEffect(() => {
    monthList();
  }, []);

  function priceToString(price) {
    if (price === undefined || price === null) return;
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div>
      <Header>
        <Link to={"/main"}>
          <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
        </Link>
        <h1 className="text-xl font-bold text-main">상세내역</h1>
      </Header>

      <div className="w-full h-60 p-8 flex flex-col gap-1 border-b-4 border-sub2">
        <span className="text-l font-bold  text-main">소비 합계</span>
        <span className="text-3xl pt-5  text-sub font-bold">
          {priceToString(sumWithInitial)} 원
        </span>
        <br />
        <Link to={"/MainAddDetail"}>
          <MainBt>내역추가</MainBt>
        </Link>
      </div>
      <div className="pt-4">
        <div className="pt-7 overflow-auto  h-[32rem]">
          {month.map((item, index) => (
            <div className="w-full px-5  flex flex-col " key={index}>
              <span className="text-s font-bold  text-sub2 ">
                {item.edDate}
              </span>
              <div className="flex justify-between mb-3">
                <span className="text-main text-m font-bold ">
                  {item.edCateName}{" "}
                </span>
                <span className="text-m   text-sub font-bold">
                  {" "}
                  -{item.edAmount}원
                </span>
              </div>
            </div>
          ))}
        </div>
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

const MainBt = tw.button`
bg-main
text-white
text-sm
font-bold
rounded-xl
w-20
h-10
py-2

`;

export default MainDetail;
