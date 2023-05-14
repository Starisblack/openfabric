import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLogin, signUpUser } from "./authAPI";

const initialState = {
  authToken: null,
  user: null,
  loading: false,
  status: null,
  error: null,
};

export const loginAsync = createAsyncThunk(
  "login",
  async (userInput, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await userLogin(userInput);

      setTimeout(() => {
        dispatch(logout);
      }, 10);

      return data.token;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const signUpAsync = createAsyncThunk(
  "signUp",
  async (userInput, { rejectWithValue }) => {
    try {
      const { data } = await signUpUser(userInput);
      return data.token;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    logout: (state) => {
      state.authToken = null;
      state.user = null;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.authToken = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signUpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.authToken = action.payload;
        state.error = null;
      })
      .addCase(signUpAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser, clearError, setError, logout } = authSlice.actions;

export const authToken = (state) => state.auth.authToken;
export const error = (state) => state.auth.error;
export const loading = (state) => state.auth.loading;
export const user = (state) => state.auth.user;

export default authSlice.reducer;
