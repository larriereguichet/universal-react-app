import Home from './Pages/Home';
import Hello from './Pages/Hello';

const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: Hello,
    path: '/hello',
    exact: true,
  },
];

export default routes;

export const getPaths = routes.map(({ path }) => path);
