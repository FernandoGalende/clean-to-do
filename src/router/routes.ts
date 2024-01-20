import * as views from '../views';

import { LOGIN, TODOS } from './paths';

type Route = {
  Component: React.ComponentType;
  path: string;
  isPrivate: boolean;
};

const Login = {
  Component: views.Login,
  path: LOGIN,
  isPrivate: false
};

const Home = {
  Component: views.Home,
  path: TODOS,
  isPrivate: true
};

const routes: Route[] = [Login, Home];

export default routes;
