import { FC } from 'react';
import './styles/App.scss';
import { Game } from './components/GameBoard/GameBoard';

export const App: FC = () => {
  return (
    <>
      <Game />
    </>
  );
};

export default App;
