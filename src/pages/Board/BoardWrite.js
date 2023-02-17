import React from "react";
import { Link } from "react-router-dom";
import * as css from "../../styles/Styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import tw from "tailwind-styled-components";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const BoardWrite = () => {
  // let fileNme = document.getElementById("file").value;
  // document.getElementsByClassName("upload-name").value(fileNme);

  // $("#file").on("change", function () {
  //   var fileName = $("#file").val();
  //   $(".upload-name").val(fileName);
  // });

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
            <textarea cols="40" rows="7" placeholder="내용"></textarea>
            <div className="imgup">
              <img src="" alt="이미지" />
              <div className="filebox">
                <input
                  className="upload-name"
                  value="첨부파일"
                  placeholder="첨부파일"
                />
                <label for="file">파일찾기</label>
                <input type="file" id="file" accept="image/*" />
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
