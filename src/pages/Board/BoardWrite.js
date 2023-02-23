import React from "react";
import { Link } from "react-router-dom";
import * as css from "../../styles/Styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import tw from "tailwind-styled-components";
import { useState } from "react";
import axios from "axios";

const BoardWrite = () => {
  const [fileImage, setFileImage] = useState("");
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
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
          <form>
            <input type="text" placeholder="제목" className="writetitle" />
            <textarea cols="40" rows="10" placeholder="내용"></textarea>
            <div className="imgup">
              <div className="filebox">
                <input type="file" accept="image/*" onChange={saveFileImage} />
                <button onClick={() => deleteFileImage()}>초기화</button>
                {fileImage && <img src={fileImage} alt="preview-img" />}
              </div>
            </div>
          </form>
          <button className="btsunmit">등록</button>
        </div>
      </css.write>
    </div>
  );
};

const Header = tw.div`
flex
items-center
w-full
h-20
`;

export default BoardWrite;
