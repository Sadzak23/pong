import { FC } from 'react';
import { Paddel } from 'src/components/Paddel/Paddel';
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
            <Paddel player="p1" />
            <Paddel player="p2" />
            <Ball />
          </AlertProvider>
        </div>
      </GameProvider>
    </div>
  );
};

export default Game;
