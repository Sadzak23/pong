import { FC } from 'react';
import { Paddle } from 'src/components/Paddle/Paddle';
import { Ball } from '../components/Ball/Ball';
import { Header } from '../components/Header/Header';
import { GameProvider } from 'src/context/GameContext';
import { AlertProvider } from 'src/context/AlertContext';

const Game: FC = () => {
  return (
    <div className="game">
      <GameProvider>
        <Header />
        <div className="board">
          <AlertProvider>
            <span className="devider" />
            <span className="center" />
            <Paddle player="p1" />
            <Paddle player="p2" />
            <Ball />
          </AlertProvider>
        </div>
      </GameProvider>
    </div>
  );
};

export default Game;
