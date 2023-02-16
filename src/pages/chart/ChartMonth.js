import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ChartMonth = () => {
  const inintData = [
    {
      category: "star",
      title: "많이 쓴날",
      content: "0",
      date: "2023-01-13",
    },
    {
      category: "star",
      title: "적게 쓴날",
      content: "15,000",
      date: "2023-02-01",
    },
  ];
  return (
    <div>
      <Calendar calendarType="US" />
    </div>
  );
};

export default ChartMonth;
