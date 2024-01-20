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

const Todos = {
  Component: views.Todos,
  path: TODOS,
  isPrivate: true
};

const routes: Route[] = [Login, Todos];

export default routes;
