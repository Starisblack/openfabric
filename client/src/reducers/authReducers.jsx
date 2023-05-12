import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLogin, signUpUser, logOut } from "./authApi";


const initialState = {
  authToken: null,
  user: null,
  loading: false,
  status: null,
  error: null,
};

export const loginAsync = createAsyncThunk(
  "login",
  async (userInput, { rejectWithValue }) => {
    try {
      const { data } = await userLogin(userInput);
      localStorage.setItem("authToken", data.token);
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

 

  export const logoutAsync = createAsyncThunk(
    "logout",
    async () => {
        const { data } = await logOut();
        return data;
     
    }
  );


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },

    setError: (state, action) => {
      state.error = action.payload
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
      })
      .addCase(logoutAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.loading = false
        state.error = null;
        state.authToken = null
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.authToken = null
      });
  },
});

export const { clearError, setError } = authSlice.actions;

export const authToken = (state) => state.auth.authToken;
export const error = (state) => state.auth.error;
export const loading = (state) => state.auth.loading;

export default authSlice.reducer;
