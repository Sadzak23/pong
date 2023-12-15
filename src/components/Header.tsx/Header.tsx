import { FC, useContext } from 'react';
import { GameContext } from 'src/context/GameContext';
import { names } from 'src/utils/settings';

export const Header: FC = () => {
  const { score } = useContext(GameContext);

  return (
    <div className="header">
      <h2>{names.p1}</h2>
      <div className="score">
        <h1>{score.p1}</h1>:<h1>{score.p2}</h1>
      </div>
      <h2>{names.p2}</h2>
    </div>
  );
};
