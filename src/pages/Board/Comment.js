import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

import tw from "tailwind-styled-components";
const Comment = ({ seq }) => {
  const [comment, setComment] = useState([]);

  const user = useSelector((state) => state.user);
  // 댓글 삭제
  const deleteBt = (e) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      axios
        .delete(`http://192.168.0.151:9898/board/delete/${user.miSeq}/${seq}`)
        .then((res) => {
          console.log(res);
          alert("삭제 되었습니다.");
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
        });
      // navigate("/board");
    } else {
      alert("삭제 되었습니다.");
    }
  };
  // 댓글 수정
  const reWriteBt = (e) => {
    if (window.confirm("정말 수정하시겠습니까?")) {
      axios
        .post(
          `http://192.168.0.151:9898//comment/update/${user.miSeq}/${seq}`
        )
        .then((res) => {
          console.log(res);
          alert("수정 되었습니다.");
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
        });
      // navigate("/board");
    } else {
      alert("수정 되었습니다.");
    }
  };

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
              <Button onClick={(e) => reWriteBt()}>수정</Button>
              <Button
                className="ml-2 "
                onClick={(e) => {
                  deleteBt();
                }}
              >
                삭제
              </Button>
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
