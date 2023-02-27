import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";

import tw from "tailwind-styled-components";
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
        <div className="">
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
              <Button className="">수정</Button>
              <Button className="ml-2 ">삭제</Button>
            </div>
          </div>

          <span className="">{item.ciContent}</span>
        </div>
      ))}
    </div>
  );
};

const Button = tw.div`
border
border-main
rounded-xl
px-3
py-1

`;
export default Comment;
