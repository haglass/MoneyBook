import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import * as css from "../../styles/Styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import tw from "tailwind-styled-components";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import moment from "moment";

const BoardEdit = () => {
  // 게시글 정보 받아오기
  const location = useLocation();
  // 상세 게시글에서 받아온 게시글 정보
  const boardData = location.state;
  console.log(boardData.boardDetail.uri);

  const user = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const saveFileImage = (e) => {
    setImage(e.target.files[0]);
  };
  const deleteFileImage = () => {
    URL.revokeObjectURL(image);
    setImage("");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("detail", content);
    formData.delete("imgSeq", 0);
    formData.append("img", image);

    try {
      const response = await axios.post(
        `http://192.168.0.151:9898/board/update/${user.miSeq}}/${boardData.seq}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <css.write>
        <Header>
          <Link to={"/board"}>
            <MdOutlineKeyboardArrowLeft className="text-sub text-5xl font-bold" />
          </Link>
          <h1 className="text-xl font-bold text-main">글수정</h1>
        </Header>
        <div className="write-inner">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="writetitle"
              id="title"
              name="title"
              placeholder={boardData.boardDetail.title}
              value={title}
              onChange={handleTitleChange}
            />
            <textarea
              cols="40"
              rows="10"
              id="detail"
              name="detail"
              placeholder={boardData.boardDetail.detail}
              value={content}
              onChange={handleContentChange}
            ></textarea>
            <div className="imgup">
              <div className="filebox">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(handleImageChange, saveFileImage)}
                  id="image"
                  name="image"
                />
                <button onClick={() => deleteFileImage()}>초기화</button>
                {image && <img src={image} alt="preview-img" />}
              </div>
            </div>
            <button
              type="submit"
              className="btsunmit"
              onClick={(e) => Navigate("/board")}
            >
              등록
            </button>
          </form>
        </div>
      </css.write>
    </div>
  );
};

export default BoardEdit;

const Header = tw.div`
flex
items-center
w-full
h-20
`;
