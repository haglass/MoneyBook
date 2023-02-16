import styled from "styled-components";
import { NavLink } from "react-router-dom";

//nav
export const navInner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  a {
    svg {
      color: #b8a6b3;
    }
  }
`;
export const NavStyle = styled(NavLink)`
  &.active::before {
    content: "";
    width: 100%;
    height: 5px;
    background-color: #ad5299;
    display: block;
    margin-bottom: 10px;
    border-radius: 20px;
  }
  &.active >svg {
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
    margin-top: 30px;
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
