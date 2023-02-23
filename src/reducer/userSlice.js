import { createSlice } from "@reduxjs/toolkit";
import { number } from "yup";

const initialState = {
  miSeq: number,
  miNickname: "",
  miEmail: "",
  miTargetAmount: number,
  miGen: number,
  miStatus: number,
  miSnsType: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      state.miSeq = action.payload.miSeq;
      state.miNickname = action.payload.miNickname;
      state.miEmail = action.payload.miEmail;
      state.miTargetAmount = action.payload.miTargetAmount;
      state.miGen = action.payload.miGen;
      state.miStatus = action.payload.miStatus;
      state.miSnsType = action.payload.miSnsType;
    },
    clearUser: (state, action) => {
      state.miSeq = "";
      state.miNickname = "";
      state.miEmail = "";
      state.miTargetAmount = "";
      state.miGen = "";
      state.miStatus = "";
      state.miSnsType = "";
    }
  },
});

export const { loginUser, clearUser } = userSlice.actions;
export default userSlice;
