import { FC } from 'react';
import './styles/App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './utils/Router';

export const App: FC = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export default App;
