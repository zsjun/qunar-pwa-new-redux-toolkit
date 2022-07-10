import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToken, removeToken, setToken } from "../../utils/helperFunctions";
import api from "../../services/api";
import history from "../../utils/history";
import type { loginInfo } from "./authType";

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = getToken();
      api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      const response = await api.get("/user");
      return { ...response.data, accessToken };
    } catch (e) {
      removeToken();
      return rejectWithValue("");
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (loginInfo: loginInfo) => {
    const response = await api.post("/api/auth/login", loginInfo);
    setToken(response.data.accessToken);
    history.push("/home");
    return response.data;
  }
);

export const signOut = createAsyncThunk("auth/signOut", async () => {
  removeToken();
});
