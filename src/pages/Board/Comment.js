import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import tw from "tailwind-styled-components";
const Comment = ({ seq }) => {
  const user = useSelector((state) => state.user);
  // 게시글 댓글 데이터 호출
  const [comment, setComment] = useState([]);
  const boardComment = () => {
    axios
      .get(`http://192.168.0.151:9898/comment/list/${seq}`)
      .then((res) => {
        setComment(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [commentEd, setCommentEd] = useState("");
  const [commentDt, setCommentDt] = useState("");

  const commentDeleteFn = (e) => {
    axios
      .delete(
        `http://192.168.0.151:9898/comment/delete/${user.miSeq}/${commentDt}`
      )
      .then((res) => {
        console.log(res);
        window.confirm("정말 삭제하시겠습니까?");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    boardComment();
  }, []);
  return (
    <div>
      {comment.viewStatus === true ? (
        <div>
          {comment.map((item, index) => (
            <div className="" key={index}>
              <div
                className="mt-9 flex justify-between mb-2"
                key={item.ciSeq}
                value={item.ciSeq}
              >
                <div>
                  <span className="text-main">{item.nickName}</span>
                  <span className="ml-3 text-[14px] text-sub2">
                    {moment(item.ciRegDt).format("YYYY-MM-DD")}
                  </span>
                </div>
                <div className="flex">
                  <Button
                    className="text-sm"
                    onClick={(e) => {
                      setCommentEd(item.ciSeq);
                    }}
                  >
                    수정
                  </Button>
                  <Button
                    className="ml-2 text-sm"
                    onClick={(e) => {
                      setCommentDt(item.ciSeq);
                      commentDeleteFn();
                    }}
                  >
                    삭제
                  </Button>
                </div>
              </div>
              <span>{item.ciContent}</span>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const Button = tw.button`
border
border-main
rounded-xl
px-3
py-1

`;
export default Comment;
