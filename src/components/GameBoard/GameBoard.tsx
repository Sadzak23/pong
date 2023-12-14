import { FC } from 'react';
import { Paddel } from 'src/components/Paddel/Paddel';

export const Game: FC = () => {
  return (
    <div className="game">
      <Paddel player="p1" />
      <Paddel player="p2" />
    </div>
  );
};
