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
  const [per, setPer] = useState("");
  const [minus, setMinus] = useState("");

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
        // (14000 - 2000) / 2000 x 100 = 600

        const lastYear = Object.values(newData[0]).reduce(
          (acc, curr) => acc + curr
        );
        const thisYear = Object.values(newData[1]).reduce(
          (acc, curr) => acc + curr
        );
        
        function calculateGrowthRate(lastYear, thisYear) {
          // 전년 대비 올해 증감율 계산
          const growthRate = ((thisYear - lastYear) / lastYear) * 100;
          // 소수점 두 자리까지만 반환
          return parseFloat(Math.round(growthRate));
        }
        const growthRate = calculateGrowthRate(lastYear, thisYear);
        setPer(growthRate);
        setMinus(thisYear - lastYear);
        console.log(thisYear - lastYear);
        console.log(growthRate);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
                color: "#38BCB2",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#EED312",
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
          <span className="text-main text-5xl  font-bold">{per}%</span>
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
