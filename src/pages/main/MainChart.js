import React from "react";
import { ResponsivePie } from "@nivo/pie";

const MainChart = () => {
  const chartData = [
    {
      id: "lisp",
      label: "lisp",
      value: 70,
    },
    {
      id: "stylus",
      label: "stylus",
      value: 30,
    },
  ];
  return (
    <>
      <div className="w-[342px] h-[342px] mb-[80px]">
        {/* <div style={{ width: "342px", height: "342px", margin: "0 auto" }}> */}
        <ResponsivePie
          data={chartData}
          sortByValue={true}
          innerRadius={0.85}
          activeOuterRadiusOffset={8}
          colors={["#AD5299", "#B8A6B3"]}
          enableArcLinkLabels={false}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          enableArcLabels={false}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          isInteractive={false}
          motionConfig="slow"
          legends={[]}
        />
      </div>
    </>
  );
};

//

export default MainChart;
