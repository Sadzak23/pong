import { FC } from 'react';
import { PlayerId } from 'src/styles/types/GameTypes';

interface Props {
  player: PlayerId;
}

export const PlayerControls: FC<Props> = ({ player }) => {
  const isPlayer1 = player === 'p1';

  return (
    <div className="flex column gap-2 full-width">
      <p>Up: {isPlayer1 ? 'W' : 'ArrowUp'}</p>
      <p>Down: {isPlayer1 ? 'S' : 'ArrowDown'}</p>
    </div>
  );
};
