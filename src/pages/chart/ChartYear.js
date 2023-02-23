import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import tw from "tailwind-styled-components";
import { ResponsiveBar } from "@nivo/bar";
import { useSelector } from "react-redux";
import axios from "axios";
const ChartYear = () => {
  const user = useSelector((state) => state.user);
  const [year, setYear] = useState([]);

  const yearData = () => {
    axios
      .get(`http://192.168.0.151:9898/expenses/year/${user.miSeq}`)
      .then((res) => {
        setYear(res.data);
        // console.log(res.data);

        const newData = res.data.map((obj) => {
          const { year, ...rest } = obj;
          return rest;
        });

        let one = Object.values(newData[0]).reduce((acc, curr) => acc + curr);
        console.log(one);
        let two = Object.values(newData[1]).reduce((acc, curr) => acc + curr);
        console.log(two);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(year);

  const chartData = year.map((item) => {
    let yData = {
      year: item.year,
      jan: item.jan,
      feb: item.feb,
      mar: item.mar,
      apr: item.apr,
      may: item.may,
      jun: item.jun,
      jul: item.jul,
      aug: item.aug,
      sep: item.sep,
      oct: item.oct,
      nov: item.nov,
      dec: item.dec,
    };
    return yData;
  });

  useEffect(() => {
    yearData();
  }, []);

  return (
    <div>
      <Header>
        <Link to={"/chart"}>
          <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
        </Link>
        <h1 className="text-xl font-bold text-main">연간 사용 금액</h1>
      </Header>
      <div className="px-5">
        <div style={{ width: "100%", height: 350 }}>
          <ResponsiveBar
            data={chartData}
            keys={[
              "jan",
              "feb",
              "mar",
              "apr",
              "may",
              "jun",
              "jul",
              "aug",
              "sep",
              "oct",
              "nov",
              "dec",
            ]}
            indexBy="year"
            margin={{ top: 90, right: 5, bottom: 50, left: 40 }}
            padding={0.25}
            innerPadding={2}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "greens" }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "#38bcb2",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#eed312",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "fries",
                },
                id: "dots",
              },
              {
                match: {
                  id: "sandwich",
                },
                id: "lines",
              },
            ]}
            borderColor={{
              from: "color",
              modifiers: [["darker", "1"]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: "",
              tickPadding: 5,
              tickRotation: 0,
              legend: "",
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: "",
              tickPadding: 5,
              tickRotation: 0,
              legend: "",
              legendPosition: "middle",
              legendOffset: -40,
            }}
            enableGridY={false}
            enableLabel={false}
            labelSkipWidth={8}
            labelSkipHeight={5}
            labelTextColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={function (e) {
              return (
                e.id + ": " + e.formattedValue + " in country: " + e.indexValue
              );
            }}
          />
        </div>
        <div className="my-20 text-center">
          <h1 className="text-sub text-2xl mb-2 font-bold">전년대비</h1>
          <span className="text-main text-5xl  font-bold">70% 더</span>
          <p className="text-sub2 text-2xl mt-3 font-bold">사용 하였습니다!</p>
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

export default ChartYear;
