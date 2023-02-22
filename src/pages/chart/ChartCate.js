import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { ResponsivePie } from "@nivo/pie";
import { Link, useNavigate } from "react-router-dom";

// tailwind
import tw from "tailwind-styled-components";

// ReactIcon
import { FaCapsules } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaThumbtack } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import axios from "axios";
import { useSelector } from "react-redux";
import { BiCategory } from "react-icons/bi";

const ChartCate = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const cateData = async () => {
    try {
      const res = await axios.get(
        `http://192.168.0.151:9898/expenses/cate/${user.miSeq}`
      );
      setCategory(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const chartData = category.map((item) => {
    let dd = {
      id: item.cate,
      label: item.rate,
      value: item.price,
    };
    return dd;
  });

  useEffect(() => {
    cateData();
  }, []);
  return (
    <>
      <Header>
        <Link to={"/chart"}>
          <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
        </Link>
        <h1 className="text-xl font-bold text-main">카테고리별 통계</h1>
      </Header>
      <div className="px-5">
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
        <div className=" flex flex-col  mt-[100px] gap-y-8">
          <div className="flex justify-around">
            <div className="flex items-center gap-5">
              <FaCarSide className="text-main text-[50px] " />
              <Won>10,000원</Won>
            </div>
            <div className="flex items-center gap-5">
              <FaCapsules className="text-main text-[50px] " />
              <Won>30,000원</Won>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex items-center gap-5">
              <FaTicketAlt className="text-main text-[50px] " />
              <Won>20,000원</Won>
            </div>
            <div className="flex items-center gap-5">
              <FaShoppingBag className="text-main text-[50px] " />
              <Won>9,000원</Won>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex items-center gap-5">
              <FaUtensils className="text-main text-[50px] " />
              <Won>16,000원</Won>
            </div>
            <div className="flex items-center gap-5">
              <FaThumbtack className="text-main text-[50px] " />
              <Won>33,000원</Won>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Won = tw.span`
font-medium
text-[16px]
text-sub
`;

const Header = tw.div`
flex
items-center
w-full
h-20
`;
export default ChartCate;
