import React from "react";
import { signOut } from "../features/auth/authApi";
import { useAppDispatch } from "../app/hooks";
// import Button from "../../components/Button";

const Home = () => {
  //
  const dispatch = useAppDispatch();

  return (
    <div className="page">
      <h2>Home</h2>

      <div>
        <button onClick={() => dispatch(signOut())} name="Sign Out" />
      </div>
    </div>
  );
};

export default Home;
