import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import authService from "./authServices";

// get the user stored data in local storage from set in the authService
// const getUserfromLocalStorage = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : null;

const initialState = {
  user: {
    username: "Julius",
    password: "James",
    email: "HubLot",
  },
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// export const login = createAsyncThunk(
//   "auth/login",
//   async (userData, thunkAPI) => {
//     try {
//       return await authService.login(userData);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const getOrders = createAsyncThunk(
//   "order/get-orders",
//   async (thunkAPI) => {
//     try {
//       return await authService.getOrders();
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      const { password, email, role } = action.payload;
      state.user.password = password;
      state.user.email = email;
      state.user.role = role;
    },
  },
});

export const { getUserRole, loginUser } = authSlice.actions;
export default authSlice.reducer;
