// 내역추가

import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { useNavigate } from "react-router";

const MainAddDetail = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>
        <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
      </button>
    </>
  );
};

export default MainAddDetail;
