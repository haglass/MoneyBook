import React from "react";
import * as css from "../../styles/Styles";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

const BoardList = () => {
  return (
    <css.BoardList>
      <div className="postList">
        <div className="post">
          <p>게시글1</p>
          <div className="postDetail">
            <div className="postIcon">
              <FaRegComment />
              <span>2</span>
              <FaRegThumbsUp />
              <span>5</span>
            </div>
            <span>2023-02-15</span>
          </div>
        </div>
        <div className="post">
          <p>게시글2</p>
          <div className="postDetail">
            <div className="postIcon">
              <FaRegComment />
              <span>2</span>
              <FaRegThumbsUp />
              <span>5</span>
            </div>
            <span>2023-02-15</span>
          </div>
        </div>
        <div className="post">
          <p>게시글3</p>
          <div className="postDetail">
            <div className="postIcon">
              <FaRegComment />
              <span>2</span>
              <FaRegThumbsUp />
              <span>5</span>
            </div>
            <span>2023-02-15</span>
          </div>
        </div>
      </div>
    </css.BoardList>
  );
};

export default BoardList;
