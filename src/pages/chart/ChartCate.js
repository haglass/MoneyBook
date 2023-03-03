import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { ResponsivePie } from "@nivo/pie";
import { Link, useNavigate } from "react-router-dom";

import * as css from "../../styles/Styles";

// tailwind
import tw from "tailwind-styled-components";

import axios from "axios";
import { useSelector } from "react-redux";

const ChartCate = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);

  const cateData = async () => {
    try {
      const res = await axios.get(
        `http://192.168.0.151:9898/expenses/cate/${user.miSeq}?year=2023&month=03`
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

  function priceToString(price) {
    if (price === undefined || price === null) return;
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <css.Chart>
        <Header>
          <Link to={"/chart"}>
            <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
          </Link>
          <h1 className="text-xl font-bold text-main">카테고리별 통계</h1>
        </Header>
        <div className="chart-inner px-5">
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
          <div className="scrbar2">
            {category.map((item, index) => (
              <div className="flex justify-around gap-[95px] mb-3" key={index}>
                <MainBt>{item.cate}</MainBt>
                <Won className="mt-2">{priceToString(item.price)} 원</Won>
              </div>
            ))}
          </div>
        </div>
      </css.Chart>
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

const MainBt = tw.button`
bg-main
text-white
text-sm
rounded-xl
w-[100px]
h-10
py-2

`;
export default ChartCate;
