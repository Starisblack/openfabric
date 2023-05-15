import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLogin, signUpUser, forgotPassword } from "./authAPI";

const initialState = {
  authToken: null,
  user: null,
  loading: false,
  status: null,
  error: null,
  success: null,
};

export const loginAsync = createAsyncThunk(
  "login",
  async (userInput, { rejectWithValue }) => {
    try {
      const { data } = await userLogin(userInput);
      return data.token;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const signUpAsync = createAsyncThunk(
  "signup",
  async (userInput, { rejectWithValue }) => {
    try {
      const { data } = await signUpUser(userInput);
      return data.token;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const forgotPasswordAsync = createAsyncThunk(
  "forgotpassword",
  async (userInput, { rejectWithValue }) => {
    try {
      const { data } = await forgotPassword(userInput);
      return data.data;
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
    },
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
      })
      .addCase(forgotPasswordAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgotPasswordAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
        state.error = null;
      })
      .addCase(forgotPasswordAsync.rejected, (state, action) => {
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
export const success = state => state.auth.success

export default authSlice.reducer;
