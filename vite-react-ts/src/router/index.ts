import Index from '../pages/index';
import About from '../pages/about';
import Login from '../components/login';
import Query from '../pages/query';
const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/about',
    exact: true,
    component: About,
  },
  {
    path: '/query',
    exact: true,
    component: Query,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
];

export default routes;
