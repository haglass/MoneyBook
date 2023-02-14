import styled from "styled-components";

//nav
export const navInner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: red;
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
      margin-top: 100px;
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
`;
