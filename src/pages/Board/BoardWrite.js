import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as css from "../../styles/Styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import tw from "tailwind-styled-components";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const BoardWrite = () => {
  const user = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState([]);
  const navigate = useNavigate();

  console.log(image);
  const saveFileImage = (e) => {
    const nowSelectList = e.target.file;
    const nowImageURLList = [...image];
    for (let i = 0; i < nowSelectList.length; i += 1) {
      const nowImageUrl = URL.createObjectURL(nowSelectList[i]);
      nowImageURLList.push(nowImageUrl);
    }
    setImage(nowImageURLList);
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
    formData.append("img", image);

    try {
      const response = await axios.post(
        `http://192.168.0.151:9898/board/add/${user.miSeq}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);

      alert("게시글을 등록하였습니다.");
      // navigate("/board");
      
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
          <h1 className="text-xl font-bold text-main">글쓰기</h1>
        </Header>
        <div className="write-inner">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="제목"
              className="writetitle"
              id="title"
              name="title"
              value={title}
              onChange={handleTitleChange}
            />
            <textarea
              cols="40"
              rows="10"
              id="detail"
              name="detail"
              placeholder="내용"
              value={content}
              onChange={handleContentChange}
            ></textarea>
            <div className="imgup">
              <div className="filebox">
                <input
                  type="file"
                  multiple="multiple"
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
              // onClick={(e) => navigate("/board")}
            >
              등록
            </button>
          </form>
        </div>
      </css.write>
    </div>
  );
};
export default BoardWrite;

const Header = tw.div`
flex
items-center
w-full
h-20
`;
