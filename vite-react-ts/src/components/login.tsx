import React, { useState, memo, useEffect } from "react";
import { getToken } from "../utils/helperFunctions";
// import FormInput from "../../components/FormInput";
// import Button from "../../components/Button";
import { login } from "../features/auth/authApi";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import history from "../utils/history";
import { RootState } from "../app/store";
import { Button } from "antd-mobile";
import { useLazyGetPostsListQuery } from "../api/posts";
import { useGetPostsList1Query } from "../api/authPosts";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const { token, loading } = useAppSelector((state: RootState) => state.auth);

  if (token || getToken()) {
    history.push("/login");
  }
  let sd: unknown;
  let sd1: unknown = useGetPostsList1Query();
  console.log(1234, sd1);
  useEffect(() => {
    // sd = useLazyGetPostsListQuery();
    // sd1
    // console.log(333, sd);
    // console.log(122, sd1);
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ username, password }));
    //dispatch(1);
  };

  return (
    <div className="page">
      <div>
        <h2>Login</h2>
      </div>

      <form onSubmit={handleLogin}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          type="username"
          value={username}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          value={password}
        />

        {loading ? (
          <div className="loading">
            <span>Loading...</span>
          </div>
        ) : (
          <button type="submit" name="Login" />
        )}
        <Button>登录</Button>
      </form>
    </div>
  );
};

export default memo(Login);
