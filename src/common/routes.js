import Home from './Pages/Home';
import Hello from './Pages/Hello';

export default [
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
