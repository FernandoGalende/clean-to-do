import * as views from "../components/views";

import { LOGIN, HOME } from "./paths";

const Login = {
  Component: views.Login,
  path: LOGIN,
};

const Home = {
  Component: views.Home,
  path: HOME,
};

const routes = [Login, Home];

export default routes;
