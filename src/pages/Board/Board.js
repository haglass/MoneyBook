import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as css from "../../styles/Styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import tw from "tailwind-styled-components";
import BoardList from "./BoardList";
import { useState } from "react";
import axios from "axios";

const Board = (props) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  // const searchBar = (e) => {
  //   axios
  //     .get(
  //       `http://192.168.0.151:9898/board/search/list/161?page=${page}&size=8&keyword=${sss}`
  //     )
  //     .then((res) => {})
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <div>
      <css.BoardDiv>
        <Header>
          <Link to={"/main"}>
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
            <form>
              <input
                type="text"
                placeholder="검색"
                value={search}
                onChange={onChange}
              />
              <button>
                <BiSearchAlt
                  className="text-sub text-3xl font-bold "
                  type="submit"
                />
              </button>
            </form>
          </div>
          <BoardList search={search} onChange={onChange} />
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
