import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";

const Comment = ({ seq }) => {
  const [comment, setComment] = useState([]);
  // 게시글 댓글 데이터 호출

  const boardComment = () => {
    axios
      .get(`http://192.168.0.151:9898/comment/list/${seq}`)
      .then((res) => {
        setComment(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    boardComment();
  }, [setComment]);

  return (
    <div>
      {comment.map((item, index) => (
        <div className="mt-9" key={item.ciSeq} value={item.ciSeq}>
          <span className="text-main">{item.nickName}</span>
          <span className="ml-3 text-[14px]">
            {moment(item.ciRegDt).format("YYYY-MM-DD")}
          </span>
          <br />
          <span className="ml-4">{item.ciContent}</span>
        </div>
      ))}
    </div>
  );
};

export default Comment;
