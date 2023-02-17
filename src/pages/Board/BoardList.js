import React, { useState } from "react";
import * as css from "../../styles/Styles";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import moment from "moment/moment";

const BoardList = () => {
  const [postlist, setpostList] = useState([
    {
      title: "string",
      detail: "string",
      view: 0,
      likes: 3,
      unLikes: 0,
      regDt: "2023-02-06T02:51:38.579Z",
      editDt: "2023-02-16T02:51:38.579Z",
      uri: ["string"],
    },
    {
      title: "string",
      detail: "string",
      view: 2,
      likes: 0,
      unLikes: 0,
      regDt: "2023-02-16T02:51:38.579Z",
      editDt: "2023-02-16T02:51:38.579Z",
      uri: ["string"],
    },
    {
      title: "string",
      detail: "string",
      view: 0,
      likes: 5,
      unLikes: 0,
      regDt: "2023-02-23T02:51:38.579Z",
      editDt: "2023-02-16T02:51:38.579Z",
      uri: ["string"],
    },
    {
      title: "string",
      detail: "string",
      view: 0,
      likes: 5,
      unLikes: 0,
      regDt: "2023-02-23T02:51:38.579Z",
      editDt: "2023-02-16T02:51:38.579Z",
      uri: ["string"],
    },
    {
      title: "string",
      detail: "string",
      view: 0,
      likes: 5,
      unLikes: 0,
      regDt: "2023-02-23T02:51:38.579Z",
      editDt: "2023-02-16T02:51:38.579Z",
      uri: ["string"],
    },
    {
      title: "string",
      detail: "string",
      view: 0,
      likes: 5,
      unLikes: 0,
      regDt: "2023-02-23T02:51:38.579Z",
      editDt: "2023-02-16T02:51:38.579Z",
      uri: ["string"],
    },
    {
      title: "string",
      detail: "string",
      view: 0,
      likes: 5,
      unLikes: 0,
      regDt: "2023-02-23T02:51:38.579Z",
      editDt: "2023-02-16T02:51:38.579Z",
      uri: ["string"],
    },
    {
      title: "string",
      detail: "string",
      view: 0,
      likes: 5,
      unLikes: 0,
      regDt: "2023-02-23T02:51:38.579Z",
      editDt: "2023-02-16T02:51:38.579Z",
      uri: ["string"],
    },
    {
      title: "string",
      detail: "string",
      view: 0,
      likes: 5,
      unLikes: 0,
      regDt: "2023-02-23T02:51:38.579Z",
      editDt: "2023-02-16T02:51:38.579Z",
      uri: ["string"],
    },
    {
      title: "string",
      detail: "string",
      view: 0,
      likes: 5,
      unLikes: 0,
      regDt: "2023-02-23T02:51:38.579Z",
      editDt: "2023-02-16T02:51:38.579Z",
      uri: ["string"],
    },
    {
      title: "string",
      detail: "string",
      view: 0,
      likes: 5,
      unLikes: 0,
      regDt: "2023-02-23T02:51:38.579Z",
      editDt: "2023-02-16T02:51:38.579Z",
      uri: ["string"],
    },
    {
      title: "string",
      detail: "string",
      view: 0,
      likes: 5,
      unLikes: 0,
      regDt: "2023-02-23T02:51:38.579Z",
      editDt: "2023-02-16T02:51:38.579Z",
      uri: ["string"],
    },
    {
      title: "string",
      detail: "string",
      view: 0,
      likes: 5,
      unLikes: 0,
      regDt: "2023-02-23T02:51:38.579Z",
      editDt: "2023-02-16T02:51:38.579Z",
      uri: ["string"],
    },
    {
      title: "string",
      detail: "string",
      view: 0,
      likes: 5,
      unLikes: 0,
      regDt: "2023-02-23T02:51:38.579Z",
      editDt: "2023-02-16T02:51:38.579Z",
      uri: ["string"],
    },
    {
      title: "string",
      detail: "string",
      view: 0,
      likes: 5,
      unLikes: 0,
      regDt: "2023-02-23T02:51:38.579Z",
      editDt: "2023-02-16T02:51:38.579Z",
      uri: ["string"],
    },
  ]);

  return (
    <css.BoardList>
      <div className="postList">
        {postlist.map((item, index) => (
          <div className="post" key={index}>
            <p>{item.title}</p>
            <div className="postDetail">
              <div className="postIcon">
                <FaRegEye />
                <span>{item.view}</span>
                <FaRegThumbsUp />
                <span>{item.likes}</span>
              </div>
              <span>{moment(item.regDt).format("YYYY-MM-DD")}</span>
            </div>
          </div>
        ))}
      </div>
    </css.BoardList>
  );
};

export default BoardList;
