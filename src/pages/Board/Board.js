import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import * as css from "../../styles/Styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import tw from "tailwind-styled-components";
import BoardList from "./BoardList";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Board = (props) => {
  const navigate = useNavigate();

  // const [search, setSearch] = useState("");

  // const onSearch = async (e) => {
  //   e.preventDefault();
  //   if (search === null || search === "") {
  //     alert("검색어를 입력하세요");
  //   } else {
  //     await axios.get().then((res)=>);
  //   }
  //   setSearch("");
  // };
  // const onChangeSearch = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  // };



  return (
    <div>
      <css.BoardDiv>
        <Header>
          <Link to={"/"}>
            <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
          </Link>
          <h1 className="text-xl font-bold text-main">게시판</h1>
        </Header>
        <div className="board-inner">
          <div className="postTop">
            <button
              className="writeBt"
              onClick={(e) => navigate("/boardwrite")}
            >
              글쓰기
            </button>
            {/* onSubmit={(e) => onSearch(e)} */}
            <form>
              <input
                type="text"
                placeholder="검색"
                // value={search}
                // onChange={onChangeSearch}
              />
              <button>
                <BiSearchAlt
                  className="text-sub text-3xl font-bold "
                  type="submit"
                />
              </button>
            </form>
          </div>
          <BoardList />

        </div>
      </css.BoardDiv>
    </div>
  );
};

const Header = tw.div`
flex
items-center
w-full
h-20
`;

export default Board;
