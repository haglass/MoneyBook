import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import tw from "tailwind-styled-components";
import { ResponsiveBar } from "@nivo/bar";
const ChartYear = () => {
  const chartData = [
    {
      country: "1월",
      "hot dog": 95,
      "hot dogColor": "hsl(38, 70%, 50%)",
      burger: 137,
      burgerColor: "hsl(86, 70%, 50%)",
      sandwich: 172,
      sandwichColor: "hsl(93, 70%, 50%)",
      kebab: 18,
      kebabColor: "hsl(77, 70%, 50%)",
      fries: 76,
      friesColor: "hsl(233, 70%, 50%)",
      donut: 160,
      donutColor: "hsl(357, 70%, 50%)",
    },
    {
      country: "2월",
      "hot dog": 164,
      "hot dogColor": "hsl(72, 70%, 50%)",
      burger: 51,
      burgerColor: "hsl(351, 70%, 50%)",
      sandwich: 49,
      sandwichColor: "hsl(49, 70%, 50%)",
      kebab: 45,
      kebabColor: "hsl(321, 70%, 50%)",
      fries: 2,
      friesColor: "hsl(93, 70%, 50%)",
      donut: 184,
      donutColor: "hsl(66, 70%, 50%)",
    },
    {
      country: "3월",
      "hot dog": 64,
      "hot dogColor": "hsl(82, 70%, 50%)",
      burger: 104,
      burgerColor: "hsl(316, 70%, 50%)",
      sandwich: 103,
      sandwichColor: "hsl(173, 70%, 50%)",
      kebab: 132,
      kebabColor: "hsl(58, 70%, 50%)",
      fries: 127,
      friesColor: "hsl(77, 70%, 50%)",
      donut: 68,
      donutColor: "hsl(287, 70%, 50%)",
    },
    {
      country: "4월",
      "hot dog": 52,
      "hot dogColor": "hsl(307, 70%, 50%)",
      burger: 176,
      burgerColor: "hsl(65, 70%, 50%)",
      sandwich: 60,
      sandwichColor: "hsl(49, 70%, 50%)",
      kebab: 26,
      kebabColor: "hsl(60, 70%, 50%)",
      fries: 142,
      friesColor: "hsl(311, 70%, 50%)",
      donut: 181,
      donutColor: "hsl(267, 70%, 50%)",
    },
    {
      country: "5월",
      "hot dog": 119,
      "hot dogColor": "hsl(65, 70%, 50%)",
      burger: 24,
      burgerColor: "hsl(65, 70%, 50%)",
      sandwich: 104,
      sandwichColor: "hsl(95, 70%, 50%)",
      kebab: 50,
      kebabColor: "hsl(202, 70%, 50%)",
      fries: 120,
      friesColor: "hsl(219, 70%, 50%)",
      donut: 194,
      donutColor: "hsl(7, 70%, 50%)",
    },
    {
      country: "6월",
      "hot dog": 42,
      "hot dogColor": "hsl(48, 70%, 50%)",
      burger: 139,
      burgerColor: "hsl(95, 70%, 50%)",
      sandwich: 1,
      sandwichColor: "hsl(220, 70%, 50%)",
      kebab: 141,
      kebabColor: "hsl(116, 70%, 50%)",
      fries: 86,
      friesColor: "hsl(25, 70%, 50%)",
      donut: 141,
      donutColor: "hsl(71, 70%, 50%)",
    },
    {
      country: "7월",
      "hot dog": 101,
      "hot dogColor": "hsl(240, 70%, 50%)",
      burger: 128,
      burgerColor: "hsl(56, 70%, 50%)",
      sandwich: 141,
      sandwichColor: "hsl(324, 70%, 50%)",
      kebab: 77,
      kebabColor: "hsl(176, 70%, 50%)",
      fries: 93,
      friesColor: "hsl(151, 70%, 50%)",
      donut: 51,
      donutColor: "hsl(178, 70%, 50%)",
    },
  ];

  return (
    <div>
      <Header>
        <Link to={"/chart"}>
          <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
        </Link>
        <h1 className="text-xl font-bold text-main">연간 사용 금액</h1>
      </Header>
      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveBar
          data={chartData}
          keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
          indexBy="country"
          margin={{ top: 90, right: 10, bottom: 50, left: 50 }}
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
      <div className="m-20 text-center">
        <h1 className="text-sub text-2xl mb-2 font-bold">전년대비</h1>
        <span className="text-main text-5xl  font-bold">70% 더</span>
        <p className="text-sub2 text-2xl mt-3 font-bold">사용 하였습니다!</p>
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
