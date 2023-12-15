import { FC } from 'react';
import { Paddel } from 'src/components/Paddel/Paddel';
import { Ball } from '../Ball/Ball';
import { Header } from '../Header.tsx/Header';
import { GameProvider } from 'src/context/GameContext';
import { AlertProvider } from 'src/context/AlertContext';

export const Game: FC = () => {
  return (
    <div className="game">
      <GameProvider>
        <Header />
        <div className="board">
          <AlertProvider>
            <div className="devider" />
            <Paddel player="p1" />
            <Paddel player="p2" />
            <Ball />
          </AlertProvider>
        </div>
      </GameProvider>
    </div>
  );
};
