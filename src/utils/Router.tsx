import { FC, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Dashboard = lazy(() => import('src/pages/Dashboard'));
const Game = lazy(() => import('src/pages/Game'));

const routes = [
  { path: '/', element: <Dashboard /> },
  { path: '/game', element: <Game /> },
];

export const Router: FC = () => (
  <Routes>
    {routes.concat(routes).map(route => (
      <Route
        key={route.path}
        path={route.path}
        element={<Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>}
      />
    ))}
  </Routes>
);
