import Index from '../pages/index'
import About from '../pages/about'
import Login from '../components/login'
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
    path: '/login',
    exact: true,
    component: Login,
  },
]

export default routes
