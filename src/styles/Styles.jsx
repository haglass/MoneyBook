import styled from "styled-components";
import { NavLink } from "react-router-dom";

//nav
export const navInner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  font-size: 3rem;
  li {
    cursor: pointer;
    width: calc(100% / 4);
    position: relative;
    svg {
      color: #b8a6b3;
      margin: 0 auto;
      height: 100%;
    }
  }
`;
export const NavStyle = styled(NavLink)`
  &.active::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 4px;
    background-color: #ad5299;
    border-radius: 20px;
  }
  &.active > svg {
    color: #ad5299;
  }
`;

//Login
export const LoginDiv = styled.div`
  .login-inner {
    width: 100%;
    padding: 0 20px;
    .login-area {
      padding-top: 100px;
      form {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .left {
          width: 70%;
          input {
            background-color: whitesmoke;
            outline: none;
            border: 1px solid #ad5299;
            border-radius: 20px;
            padding: 5px 10px;
            color: #ad5299;
            &:first-child {
              margin-bottom: 15px;
            }
            &:focus {
              background-color: #fff;
            }
          }
        }
        button {
          display: block;
          width: 100px;
          height: 100px;
          background: #ad5299;
          border-radius: 20px;
          color: #fff;
          font-size: 1.2rem;
        }
      }
      span {
        display: block;
        margin-left: 10px;
        color: red;
      }
      .btSignUp {
        width: 100%;
        padding: 10px;
        color: #ad5299;
        margin: 20px auto;
        font-size: 1.2rem;
      }
    }
    .sns-area {
      width: 100%;
      margin-top: 50px;
      position: relative;
      span {
        background: #fff;
        padding: 0 10px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
      .line {
        position: absolute;
        top: 11px;
        width: 100%;
        height: 2px;
        background: rgba(0, 0, 0, 0.2);
        z-index: -1;
      }
      .sns {
        width: 100%;
        padding-top: 54px;
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: center;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
      }
    }
  }
`;
// MyPage
export const MyPageDiv = styled.div`
  .myPage-inner {
    width: 100%;
    padding: 0 20px;
    .editdon {
      form {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        input {
          margin-bottom: 0;
          width: 75%;
        }
        button {
          margin: 0;
        }
      }
    }
    input {
      background-color: whitesmoke;
      outline: none;
      border: 1px solid #ad5299;
      border-radius: 20px;
      padding: 5px 10px;
      color: #ad5299;
      // &:first-child {
      //   margin-bottom: 15px;
      // }
      &:focus {
        background-color: #fff;
      }
    }

    .rewrite {
      padding: 7px 15px;
      border: 1px solid #ad5299;
      border-radius: 20px;
      font-size: 14px;
      text-align: center;
      margin-top: 5px;
    }
    form {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      input {
        background-color: whitesmoke;
        outline: none;
        border: 1px solid #ad5299;
        border-radius: 20px;
        padding: 5px 10px;
        color: #ad5299;
        margin-bottom: 10px;
        &:focus {
          background-color: #fff;
        }
      }
      span {
        display: block;
        margin-left: 10px;
        color: red;
        margin-bottom: 10px;
      }
    }
    button {
      display: block;
      padding: 5px 20px;
      border: 1px solid #ad5299;
      border-radius: 15px;
      color: #ad5299;
      font-weight: 500;
      font-size: 1.2rem;
      margin-top: 40px;
    }
  }
`;
//SighUp
export const SignUpDiv = styled.div`
  .signup-inner {
    width: 100%;
    padding: 0 20px;
    form {
      display: flex;
      flex-direction: column;
      margin-top: 100px;
      input {
        background-color: whitesmoke;
        outline: none;
        border: 1px solid #ad5299;
        border-radius: 20px;
        padding: 5px 10px;
        color: #ad5299;
        margin-bottom: 10px;
        &:focus {
          background-color: #fff;
        }
      }
      span {
        display: block;
        margin-left: 10px;
        color: red;
        margin-bottom: 10px;
      }
      select {
        background-color: whitesmoke;
        outline: none;
        border: 1px solid #ad5299;
        border-radius: 20px;
        padding: 5px 10px;
        color: #ad5299;
        &:focus {
          background-color: #fff;
        }
      }
    }
    button {
      display: block;
      padding: 5px 20px;
      background: #ad5299;
      border-radius: 15px;
      color: #fff;
      font-size: 1.2rem;
      margin: 0 auto;
      margin-top: 40px;
    }
  }
`;

//Board
export const BoardDiv = styled.div`
  .board-inner {
    width: 100%;
    padding: 0 20px;
    .postTop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .writeBt {
        padding: 5px 10px;
        border: 1px solid #ad5299;
        border-radius: 20px;
      }
      form {
        display: flex;
        align-items: center;
        justify-content: end;
        input {
          width: 50%;
          background: whitesmoke;
          padding: 5px 10px;
          border-radius: 20px;
          outline: none;
          border: 1px solid #ad5299;
          color: #ad5299;
          &:focus {
            background-color: #fff;
          }
        }
      }
    }
  }
`;
//BoardList
export const BoardList = styled.div`
  .postList {
    margin-top: 20px;
    height: calc(84px * 8);
    overflow: hidden;
    .post {
      width: 100%;
      border-bottom: 1px solid #ad5299;
      padding-bottom: 10px;
      margin-bottom: 15px;
      p {
        padding-bottom: 10px;
      }
      .postDetail {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .postIcon {
          display: flex;
          justify-content: start;
          align-items: center;
          span {
            padding: 0 8px;
          }
        }
      }
    }
  }
`;
//pagination
export const Paging = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    li {
      display: inline-block;
      width: 30px;
      height: 30px;
      border: 1px solid #e2e2e2;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      &:first-child {
        border-radius: 5px 0 0 5px;
      }
      &:last-child {
        border-radius: 0 5px 5px 0;
      }
      &.active {
        background-color: #52424d;
      }
      &.active a {
        color: #fff;
      }
      a {
        color: #52424d;
        &:hover {
          color: #ad5299;
        }
        &.active {
          color: #ad5299;
        }
      }
      .page-selection {
        width: 48px;
        height: 30px;
        color: #52424d;
      }
    }
  }
`;
//BoardWrite
export const write = styled.div`
  .write-inner {
    width: 100%;
    padding: 0 20px;
    text-align: center;
    form {
      margin-top: 50px;
      .writetitle {
        outline: none;
        padding: 5px 10px;
        border: 1px solid #ad5299;
        border-radius: 15px;
        width: 100%;
        margin-bottom: 20px;
      }
      textarea {
        background-color: whitesmoke;
        outline: none;
        padding: 5px 10px;
        border-radius: 15px;
        width: 100%;
      }
      .imgup {
        .filebox {
          margin-top: 30px;
          img {
            width: 100%;
            height: 200px;
            margin: 0 auto;
            margin-top: 20px;
            border-radius: 15px;
            object-fit: contain;
            vertical-align: middle;
            background-color: rgba(184, 166, 179, 0.3);
          }
          input {
            display: inline-block;
            width: 75%;
            padding: 5px 10px;
            /* border: 1px solid #ad5299; */
            border-radius: 15px;
            vertical-align: middle;
            color: #52424d;
            outline: none;
            margin-right: 20px;
          }
          button {
            background-color: #ad5299;
            color: #fff;
            padding: 5px 10px;
            border-radius: 15px;
          }
        }
      }
    }
    .btsunmit {
      position: absolute;
      bottom: 170px;
      right: 50px;
      padding: 5px 10px;
      border: 1px solid #ad5299;
      border-radius: 15px;

      &:hover {
        background-color: #ad5299;
        color: #fff;
      }
    }
  }
`;
//BoardView
export const View = styled.div`
  .view-inner {
    width: 100%;
    padding: 0 20px;
    height: calc(970px - 180px);
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    &::-webkit-scrollbar {
      display: none; /* Chrome , Safari , Opera */
    }
    div {
      overflow-y: scroll;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE and Edge */
      &::-webkit-scrollbar {
        display: none; /* Chrome , Safari , Opera */
      }
    }
  }
`;

//MainDetail
export const Detaillist = styled.div`
  .detaillist-inner {
    width: 100%;
    padding: 0 20px;
    .scrbar {
      width: 100%;
      height: calc(970px - 180px - 250px);
      margin: 25px 0;
      overflow-y: scroll;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE and Edge */
      &::-webkit-scrollbar {
        display: none; /* Chrome , Safari , Opera */
      }
    }
  }
`;
// ChartCate
export const Chart =styled.div`
.chart-inner {
  width: 100%;
  padding: 0 20px;
  .scrbar2 {
    width: 100%;
    height: calc(800px - 180px - 250px);
    margin: 25px 0;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    &::-webkit-scrollbar {
      display: none; /* Chrome , Safari , Opera */
    }
  }
}

`