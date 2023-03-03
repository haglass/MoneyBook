import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as css from "../../styles/Styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import tw from "tailwind-styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import BoardList from "./BoardList";
const Board = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://192.168.0.151:9898/board/search/list/${user.miSeq}?page=${page}&size=8&keyword=${search}`
      )
      .then((res) => {
        setSearchList(res.data.content);
        setSearchData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [searchWord, setSearchWord] = useState("");
  const handleKeyUp = (e) => {
    // console.log(e.keyCode);
    if (e.keyCode === 13) {
      setSearchWord(search);
    }
  };
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="검색"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyUp={handleKeyUp}
              />
              <button type="submit">
                <BiSearchAlt
                  className="text-sub text-3xl font-bold "
                  type="submit"
                />
              </button>
            </form>
          </div>
          {/* 보드리스트 */}
          <BoardList searchWord={searchWord} />
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
