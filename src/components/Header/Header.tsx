import { FC, useContext } from 'react';
import { GameContext } from 'src/context/GameContext';
import { lsGet } from 'src/utils/localStorageUtils';

export const Header: FC = () => {
  const { score } = useContext(GameContext);

  return (
    <div className="header">
      <h4>{lsGet('p1-name') || 'Player 1'}</h4>
      <h4>{`${score.p1} : ${score.p2}`}</h4>
      <h4>{lsGet('p2-name') || 'Player 2'}</h4>
    </div>
  );
};
