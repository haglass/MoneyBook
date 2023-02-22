import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as css from "../../styles/Styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { GoThumbsup } from "react-icons/go";
import { GoThumbsdown } from "react-icons/go";
import tw from "tailwind-styled-components";
import moment from "moment/moment";

const BoardView = () => {
  const navigate = useNavigate();
  const path = process.env.PUBLIC_URL;
  return (
    <div>
      <css.View>
        <Header>
          <Link to={"/board"}>
            <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
          </Link>
          {/* <h1 className="text-xl font-bold text-main">게시판</h1> */}
        </Header>
        <div className="view-inner">
          {/* <p>{moment(item.regDt).format("YYYY-MM-DD")}</p> */}
          <p>2023-02-10</p>
          <div className="flex justify-end items-center gap-3">
            <Button className="text-sm">수정</Button>
            <Button className="text-sm">삭제</Button>
          </div>
          <div className="my-5">
            <div className="py-2 px-4 border border-main rounded-xl mb-5">
              제목
            </div>
            <div className="bg-[whitesmoke] rounded-xl py-2 px-4 w-full h-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis odio aut eligendi? Minima excepturi facere in
              perferendis recusandae obcaecati aliquid. Vitae doloremque sint
              sed, laboriosam atque est quasi esse rerum?
            </div>
            <img
              src={`${path}/images/starbucks.png`}
              alt="boardView"
              className="w-full h-40 align-middle object-cover mt-5"
            />
            <div className="flex items-center gap-3 mt-7 mb-3">
              <Button>
                <GoThumbsup />
              </Button>
              <Button>
                <GoThumbsdown />
              </Button>
              <span className="ml-44">조회수 : 20 </span>
            </div>
            {/* 요기 div 맵돌리기~ */}
            <div className="mt-9">
              <span className="text-main">닉네임</span>
              <span className="ml-3 text-[14px]">2023-02-10</span>
              <br />
              <span className="ml-4">댓글내용</span>
            </div>
          </div>
        </div>
      </css.View>
    </div>
  );
};

const Header = tw.div`
flex
items-center
w-full
h-20
`;

const Button = tw.div`
border
border-main
rounded-xl
py-1
px-3
`;
export default BoardView;
