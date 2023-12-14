import { FC } from 'react';
import './styles/App.scss';
import { Game } from './components/GameBoard/GameBoard';
import { Header } from './components/Header.tsx/Header';

export const App: FC = () => {
  return (
    <>
      <Header />
      <Game />
    </>
  );
};

export default App;
