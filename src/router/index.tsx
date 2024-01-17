import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from './routes';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ Component, path }) => (
        <Route element={<Component />} path={path} key={path} />
      ))}
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
