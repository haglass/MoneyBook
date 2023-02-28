import React, { useEffect } from "react";
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
  const [imageList, setImageList] = useState([]);
  const [showImages, setShowImages] = useState([]);
  const navigate = useNavigate();

  const deleteFileImage = () => {
    setImageList([]);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageChange = (e) => {
    setImageList([...imageList, ...e.target.files]);
  };

  const handleAddImages = (e) => {
    const imageLists = e.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };

  // 글등록 기능
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("detail", content);
    imageList.forEach((image) => {
      formData.append("img", image);
    });

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
      // navigate("/board"); // 나중에 살리기
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
                  onChange={(handleImageChange, handleAddImages)}
                  id="image"
                  name="image"
                />
                <button onClick={() => deleteFileImage()}>초기화</button>
                {showImages.map((image, id) => (
                  <div key={id}>
                    <img src={image} alt={`${image}-${id}`} />
                  </div>
                ))}
                <div className="imgBox"></div>
              </div>
            </div>
            <button type="submit" className="btsunmit">
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
