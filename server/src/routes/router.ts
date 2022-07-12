// src/routes.ts
import Router from '@koa/router';

import AuthController from '../controllers/auth';
import UserController from '../controllers/user';
import RestController from '../controllers/rest';

const unprotectedRouter = new Router();

// auth 相关的路由
unprotectedRouter.post('/api/auth/login', AuthController.login);
unprotectedRouter.post('/api/auth/register', AuthController.register);
unprotectedRouter.post('/api/rest/search', RestController.search);
unprotectedRouter.get('/api/rest/cities', RestController.cities);
unprotectedRouter.get('/api/rest/search', RestController.getSearch);
unprotectedRouter.get('/api/rest/query', RestController.query);
unprotectedRouter.get('/api/rest/ticket', RestController.ticket);
unprotectedRouter.get('/api/rest/schedule', RestController.schedule);
unprotectedRouter.get('/api/rest/order', RestController.order);
const protectedRouter = new Router();

// users 相关的路由
protectedRouter.get('/api/users', UserController.listUsers);
protectedRouter.get('/api/users/:id', UserController.showUserDetail);
protectedRouter.put('/api/users/:id', UserController.updateUser);
protectedRouter.delete('/api/users/:id', UserController.deleteUser);

export { protectedRouter, unprotectedRouter };
