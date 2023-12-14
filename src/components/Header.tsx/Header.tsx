import { FC, useContext } from 'react';
import { GameContext } from 'src/context/GameContext';

export const Header: FC = () => {
  const { score } = useContext(GameContext);

  return (
    <div className="header">
      <h2>Player 1</h2>
      <div className="score">
        <h1>{score.p1}</h1>:<h1>{score.p2}</h1>
      </div>
      <h2>Player 2</h2>
    </div>
  );
};
