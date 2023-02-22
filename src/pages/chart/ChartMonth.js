import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import tw from "tailwind-styled-components";
import "react-calendar/dist/Calendar.css"; // css import
import "../../styles/carlendar.css";
// 날짜 관련 라이브러리
import moment from "moment/moment";
// 한글로 출력하게 해줌.
import "moment/locale/ko";
import axios from "axios";
// 정보를 redux 에서 참조할 때 사용 코드
import { useSelector } from "react-redux";
// 정보를 redux 에서 업데이트 할 때 사용 코드
import { useDispatch } from "react-redux";
const ChartMonth = () => {
  const [month, setMonth] = useState([]);
  const user = useSelector((state) => state.user);
  const initData = [
    {
      category: "star",
      title: "스타벅스간날1",
      content: "스타벅스 맛있어요",
      date: "2023-01-13",
    },
    {
      category: "star",
      title: "적게 쓴날",
      content: "15,000",
      date: "2023-02-01",
    },
  ];

  const getLocalPost = () => {
    const data = localStorage.getItem("post");
    if (data === null) {
      return [];
    } else {
      return JSON.parse(data);
    }
  };
  const [todoData, setTodoData] = useState(getLocalPost());
  // 선택된 날짜.
  const [date, setDate] = useState(new Date());
  // 이미지 출력
  const publicFolder = process.env.PUBLIC_URL;
  const chartm = async () => {
    try {
      const res = await axios.get(
        `http://192.168.0.151:9898/expenses/month/${user.miSeq}`
      );
      setMonth(res.data);
      console.log("받아온데이터 res.data", res.data);
      console.log("받아온데이터 res.data.daily", res.data.daily);
      console.log("받아온데이터 res.data.maxDay", res.data.maxDay);
      console.log("받아온데이터 res.data.minDay", res.data.minDay);
      console.log("받아온데이터 res.data.total", res.data.total);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    chartm();
  }, []);
  // 달력에 출력할 JSX 기능

  const showTile = ({ date, view }) => {
    let html = [];
    let obj = month.daily.find((item, index) => {
      if (item.date === moment(date).format("YYYY-MM-DD")) {
        return item;
      }
    });
    if (obj !== undefined) {
      html.push(<div key={obj.date}>{obj.price}</div>);
      return <div>{html}</div>;
    }
    return null;
  };

  return (
    <div>
      <Header>
        <Link to={"/chart"}>
          <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
        </Link>
        <h1 className="text-xl font-bold text-main">월간 사용 금액</h1>
      </Header>
      <div className="px-5">
        <img
          src="/images/logo-2.png"
          alt="로고"
          className="absolute left-[50px] top-[135px]   w-10 h-10"
        />
        <div className="mt-20 mb-10">
          {month.daily && (
            <Calendar
              className="calCss"
              title={"Schedule"}
              // 일요일부터 출력
              calendarType="US"
              // 날짜 선택시 날짜변경
              onChange={setDate}
              // 달력에 출력될 html 작성
              tileContent={showTile}
            />
          )}
        </div>
        {month.maxDay && (
          <div className="px-4">
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-l font-bold text-main">가장 많이 쓴날</h1>
              <span className="text-sm font-bold text-sub2">
                {moment(month.maxDay.date).format("MM월 DD일")}
              </span>
              <span className="text-sm font-bold text-sub">
                {month.maxDay.price}원
              </span>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-l font-bold text-main">가장 적게 쓴날</h1>
              <span className="text-sm font-bold text-sub2">
                {moment(month.minDay.date).format("MM월 DD일")}
              </span>
              <span className="text-sm font-bold text-sub">
                {month.minDay.price}원
              </span>
            </div>
          </div>
        )}
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

export default ChartMonth;
