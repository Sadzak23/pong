import { FC } from 'react';
import { Paddle } from 'src/components/Paddle/Paddle';
import { Ball } from '../components/Ball/Ball';
import { Header } from '../components/Header/Header';
import { GameProvider } from 'src/context/GameContext';

const Game: FC = () => {
  return (
    <div className="game">
      <GameProvider>
        <Header />
        <div className="board">
          <span className="devider" />
          <span className="center" />
          <Paddle player="p1" />
          <Paddle player="p2" />
          <Ball />
        </div>
      </GameProvider>
    </div>
  );
};

export default Game;
