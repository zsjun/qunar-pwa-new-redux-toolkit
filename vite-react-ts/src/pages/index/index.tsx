import React, { useEffect, memo } from "react";
import { Button } from "antd-mobile";
import k from "./index.module.scss";
import { login } from "./api";

function Index() {
  console.log(11, k);
  useEffect(() => {
    login({
      username: "zsj",
      password: "zsj",
    });
  }, []);
  return (
    <div className={k.kaimoIndex}>
      kaimo 的 index 页面
      <h3>sdsds</h3>
      <div className={k.wrapBox}></div>
      <Button color="primary" fill="solid">
        11222
      </Button>
    </div>
  );
}

export default memo(Index);
