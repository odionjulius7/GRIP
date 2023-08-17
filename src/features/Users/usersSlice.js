import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import usersService from "./usersServices";

const initialState = {
  users: [],
  userAggregate: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getUsers = createAsyncThunk(
  "users/get-users",
  async (thunkAPI) => {
    try {
      return await usersService.getUsers();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getCreatorUsers = createAsyncThunk(
  "users/get-creator-users",
  async (thunkAPI) => {
    try {
      return await usersService.getCreatorUsers();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUsersAggregate = createAsyncThunk(
  "users/get-Aggregate",
  async (thunkAPI) => {
    try {
      return await usersService.getUsersAggregate();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAUser = createAsyncThunk(
  "user/get-a-user",
  async (id, thunkAPI) => {
    try {
      return await usersService.getAUser(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const changeUserRole = createAsyncThunk(
  "user/change-user-role",
  async (id, thunkAPI) => {
    try {
      return await usersService.changeUserRole(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder // Get Users
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
        state.message = "success";
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      // Get all creators
      .addCase(getCreatorUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCreatorUsers.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.creators = action.payload;
        state.message = "success";
      })
      .addCase(getCreatorUsers.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      // Aggregate
      .addCase(getUsersAggregate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsersAggregate.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.userAggregate = action.payload;
        state.message = "success";
      })
      .addCase(getUsersAggregate.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      // get a user
      .addCase(getAUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "success";
      })
      .addCase(getAUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      // Change User Role
      .addCase(changeUserRole.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeUserRole.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.updatedRole = action.payload;
        state.message = "success";
      })
      .addCase(changeUserRole.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(resetState, () => initialState);
  },
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
