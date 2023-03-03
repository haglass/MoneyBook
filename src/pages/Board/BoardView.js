import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as css from "../../styles/Styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { GoThumbsup } from "react-icons/go";
import { GoThumbsdown } from "react-icons/go";
import tw from "tailwind-styled-components";
import moment from "moment/moment";
import { useSelector } from "react-redux";
import axios from "axios";
import { useRef } from "react";
import Comment from "./Comment";

const BoardView = () => {
  // 게시글 번호 받아오기
  const location = useLocation();
  // 목록에서 클릭해서 받아온 게시글 번호
  const { seq } = location.state;
  // console.log(seq);
  const navigate = useNavigate();
  // 유저 정보
  const user = useSelector((state) => state.user);

  // 게시글 삭제
  const deleteBt = (e) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      axios
        .delete(`http://192.168.0.151:9898/board/delete/${user.miSeq}/${seq}`)
        .then((res) => {
          alert("삭제 되었습니다.");
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
        });
      navigate("/board");
    } else {
      alert("취소 되었습니다.");
    }
  };

  // 라이크 버튼
  const likeBt = (e) => {
    axios
      .put(`http://192.168.0.151:9898/board/detail/like/${user.miSeq}/${seq}`)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 언라이크 버튼
  const unLikeBt = (e) => {
    axios
      .put(`http://192.168.0.151:9898/board/detail/unlike/${user.miSeq}/${seq}`)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 댓글 쓴 내용
  const [content, setContent] = useState("");
  // 답댓글을 위한 번호저장 (일반 댓글은 null이라 useState(null))
  const [contentAdd, setContentAdd] = useState(null);

  // 댓글 쓰기 버튼
  const commentWrite = (e) => {
    let body = {
      ciContent: content,
      ciCiseq: contentAdd,
    };
    axios
      .put(`http://192.168.0.151:9898/comment/add/${user.miSeq}/${seq}`, body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 상세글 내용 저장
  const [boardDetail, setBoardDetail] = useState([]);

  useEffect(() => {
    const boardContens = async () => {
      try {
        const res = await axios.get(
          `http://192.168.0.151:9898/board/show/detail/${user.miSeq}/${seq}`
        );
        setBoardDetail(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    boardContens();
  }, []);

  return (
    <div>
      <css.View>
        <Header>
          <Link to={"/board"}>
            <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
          </Link>
          <h1 className="text-xl font-bold text-main">게시글</h1>
        </Header>
        <div className="view-inner">
          <p>{moment(boardDetail.regDt).format("YYYY-MM-DD")}</p>
          <div className="flex justify-end items-center gap-3">
            <Button
              className="text-sm"
              onClick={(e) =>
                navigate("/boardedit", { state: { boardDetail, seq } })
              }
            >
              수정
            </Button>
            <Button
              className="text-sm"
              onClick={(e) => {
                deleteBt();
              }}
            >
              삭제
            </Button>
          </div>
          <div className="my-5">
            <div className="py-2 px-4 border border-main rounded-xl mb-5">
              {boardDetail.title}
            </div>
            <div className="bg-[whitesmoke] rounded-xl py-2 px-4 w-full h-[200px]">
              {boardDetail.detail}
            </div>
            {boardDetail.uri &&
              boardDetail.uri.map((item, i) => (
                <div key={i}>
                  <img
                    src={`http://192.168.0.151:9898/images/${item.file}`}
                    alt="boardView"
                    className="w-full h-40 align-middle object-cover mt-5"
                  />
                </div>
              ))}
            <div className="flex items-center gap-3 mt-7 mb-3">
              <Button>
                <GoThumbsup onClick={likeBt} />
              </Button>
              <Button>
                <GoThumbsdown onClick={unLikeBt} />
              </Button>
              <span className="ml-44">조회수 : {boardDetail.view}</span>
            </div>

            <Comment seq={seq} />

            <div className="mt-5 py-3 border-t-[1px]">
              <input
                onChange={(e) => setContent(e.target.value)}
                placeholder="댓글을 써주세요"
                className="bg-[whitesmoke] pl-[5px] rounded-[15px] outline-none w-3/4"
              />
              <button
                onClick={commentWrite}
                className="ml-5 border border-main px-1 rounded-[15px]"
              >
                댓글쓰기
              </button>
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

const Button = tw.button`
border
border-main
rounded-xl
py-1
px-3
`;
export default BoardView;
