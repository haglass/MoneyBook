import React, { useState } from "react";
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
const ChartMonth = () => {
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

  return (
    <div>
      <Header>
        <Link to={"/"}>
          <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
        </Link>
        <h1 className="text-xl font-bold text-main">월간 사용 금액</h1>
      </Header>
      <img
        src="/images/logo-2.png"
        alt="로고"
        className="absolute left-[50px] top-[135px]   w-10 h-10"
      />
      <div className="ml-9 mt-20 mb-10">
        <Calendar
          title={"Schedule"}
          // 일요일부터 출력
          calendarType="US"
          // 날짜 선택시 날짜변경
          onChange={setDate}
          // 달력에 출력될 html 작성
          tileContent={({ date, view }) => {
            let html = [];
            // date         : Mon Feb 28 2022 00:00:00 GMT+0900 (한국 표준시)
            // item.date    : "2023-02-07"
            // 각각의 날짜 영역에 출력하고 싶은 내용을 작성한다.
            // 날짜를 비교해서 같으면 출력을 하겠다.
            if (
              todoData.find((item, index) => {
                // 현재 date 는 포맷이 다릅니다.
                return item.timestamp === moment(date).format("YYYY-MM-DD");
              })
            ) {
              // 조건에 맞으므로 html 을 생성해 준다.
              html.push(
                <img
                  key={`todoData_${moment(date)}`}
                  src={`${publicFolder}/images/starbucks.png`}
                  alt="아이콘"
                  style={{ width: 20, height: 20 }}
                />
              );
            }
            return <div>{html}</div>;
          }}
        />
      </div>
      {/* <div className="calender-detail">
        {todoData && (
          <div className="calender-detail__item">
            <div className="calender-detail__title">
              <img
                src={`${publicFolder}/images/starbucks.png`}
                alt="스타벅스"
                className="calender-detail__icon"
                style={{ width: 20, height: 20 }}
              />
              방문한날
            </div>
            <div className="calender-detail__date-wrap">
              {todoData.map((item, index) => item.title)}
            </div>
          </div>
        )}
      </div>
      <div>{moment(date).format("YYYY년 MM월 DD일")}</div>
      <div>{todoData.map((item, index) => item.title)}</div> */}
      <div className="  m-20 m-14 ">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-l font-bold text-main">가장 많이 쓴날</h1>
          <span className="text-sm font-bold text-sub2">
            {moment(date).format("MM월 DD일")}
          </span>
          <span className="text-sm font-bold text-sub">250,000원</span>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-l font-bold text-main">가장 적게 쓴날</h1>
          <span className="text-sm font-bold text-sub2">
            {moment(date).format("MM월 DD일")}
          </span>
          <span className="text-sm font-bold text-sub">20,000원</span>
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

export default ChartMonth;
