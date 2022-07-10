// src/routes.ts
import Router from "@koa/router";

import AuthController from "../controllers/auth";
import UserController from "../controllers/user";

const unprotectedRouter = new Router();

// auth 相关的路由
unprotectedRouter.post("/api/auth/login", AuthController.login);
unprotectedRouter.post("/api/auth/register", AuthController.register);

const protectedRouter = new Router();

// users 相关的路由
protectedRouter.get("/api/users", UserController.listUsers);
protectedRouter.get("/api/users/:id", UserController.showUserDetail);
protectedRouter.put("/api/users/:id", UserController.updateUser);
protectedRouter.delete("/api/users/:id", UserController.deleteUser);

export { protectedRouter, unprotectedRouter };
