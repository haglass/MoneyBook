import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as css from "../../styles/Styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import tw from "tailwind-styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import moment from "moment/moment";
import Pagination from "react-js-pagination";

const Board = (props) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [postlist, setpostList] = useState([]);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [btState, setBtState] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (btState === false) {
      axios
        .get(
          `http://192.168.0.151:9898/board/show/list/${user.miSeq}?page=${page}`
        )
        .then((res) => {
          setpostList(res.data.content);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
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
    }
  }, [search]);

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

  // 페이지 체인지
  const handlePageChange = (count) => {
    let tempPage = count - 1;
    if (tempPage < 0) {
      tempPage = 0;
    }
    // console.log(tempPage);
    setPage(tempPage);
    // console.log(page);
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
              />
              <button type="submit">
                <BiSearchAlt
                  className="text-sub text-3xl font-bold "
                  type="submit"
                  onClick={(e) => {
                    setBtState(true);
                  }}
                />
              </button>
            </form>
          </div>
          {/* 보드리스트 */}

          {search === "" ? (
            <css.BoardList>
              <div className="postList">
                {postlist.map((item, index) => (
                  <div
                    className="post"
                    key={index}
                    onClick={() => {
                      navigate("/BoardView", { state: { seq: item.seq } });
                      console.log(item.seq);
                    }}
                  >
                    <p>{item.title}</p>
                    <div className="postDetail">
                      <div className="postIcon">
                        <FaRegComment />
                        <span>{item.comment}</span>
                        <FaRegThumbsUp />
                        <span>{item.likes}</span>
                      </div>
                      <span>{moment(item.regDt).format("YYYY-MM-DD")}</span>
                    </div>
                  </div>
                ))}
              </div>
              <css.Paging>
                <Pagination
                  activePage={page + 1} //현재페이지
                  itemsCountPerPage={data.size} //한 페이지당 보여줄 리스트 아이템의 개수
                  totalItemsCount={parseInt(data.totalElements)} //총 아이템의 개수
                  pageRangeDisplayed={5} //Paginator 내에서 보여줄 페이지의 범위
                  prevPageText={"‹"}
                  nextPageText={"›"}
                  onChange={handlePageChange}
                />
              </css.Paging>
            </css.BoardList>
          ) : (
            <css.BoardList>
              <div className="postList">
                {searchList.map((item, index) => (
                  <div
                    className="post"
                    key={index}
                    onClick={() => {
                      navigate("/BoardView", { state: { seq: item.seq } });
                      console.log(item.seq);
                    }}
                  >
                    <p>{item.title}</p>
                    <div className="postDetail">
                      <div className="postIcon">
                        <FaRegComment />
                        <span>{item.comment}</span>
                        <FaRegThumbsUp />
                        <span>{item.likes}</span>
                      </div>
                      <span>{moment(item.regDt).format("YYYY-MM-DD")}</span>
                    </div>
                  </div>
                ))}
              </div>
              <css.Paging>
                <Pagination
                  activePage={page + 1} //현재페이지
                  itemsCountPerPage={searchData.size} //한 페이지당 보여줄 리스트 아이템의 개수
                  totalItemsCount={parseInt(searchData.totalElements)} //총 아이템의 개수
                  pageRangeDisplayed={5} //Paginator 내에서 보여줄 페이지의 범위
                  prevPageText={"‹"}
                  nextPageText={"›"}
                  onChange={handlePageChange}
                />
              </css.Paging>
            </css.BoardList>
          )}
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
