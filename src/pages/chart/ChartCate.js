import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { ResponsivePie } from "@nivo/pie";

// ReactIcon
import { FaCapsules } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaThumbtack } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";

import { useNavigate } from "react-router";
const ChartCate = () => {
  const navigate = useNavigate();
  const chartData = [
    {
      id: "고정지출",
      label: "고정지출",
      value: 512,
      color: "hsl(162, 70%, 50%)",
    },
    {
      id: "교통비",
      label: "교통비",
      value: 591,
      color: "hsl(21, 70%, 50%)",
    },
    {
      id: "식비",
      label: "식비",
      value: 563,
      color: "hsl(287, 70%, 50%)",
    },
    {
      id: "쇼핑",
      label: "쇼핑",
      value: 127,
      color: "hsl(178, 70%, 50%)",
    },
    {
      id: "저축",
      label: "저축",
      value: 233,
      color: "hsl(101, 70%, 50%)",
    },
    {
      id: "여가비",
      label: "여가비",
      value: 180,
      color: "hsl(101, 70%, 50%)",
    },
    {
      id: "의료비",
      label: "의료비",
      value: 100,
      color: "hsl(101, 70%, 50%)",
    },
  ];
  return (
    <>
      <button onClick={() => navigate(-1)}>
        <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
      </button>
      <div className="flex justify-center items-center">
        <div className="w-[342px] h-[342px]">
          <ResponsivePie
            data={chartData}
            sortByValue={true}
            activeOuterRadiusOffset={8}
            borderColor="#ffffff"
            enableArcLinkLabels={false}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsRadiusOffset={0.65}
            arcLabelsSkipAngle={20}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", "2"]],
            }}
            motionConfig="slow"
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
      <FaCarSide className="text-main text-[50px] " />
      <FaCapsules className="text-main text-[50px] " />
      <FaTicketAlt className="text-main text-[50px] " />
      <FaShoppingBag className="text-main text-[50px] " />
      <FaUtensils className="text-main text-[50px] " />
      <FaThumbtack className="text-main text-[50px] " />
      <FaCoins className="text-main text-[50px] " />
    </>
  );
};

export default ChartCate;
