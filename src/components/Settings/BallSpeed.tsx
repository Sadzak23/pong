import { FC, useState } from 'react';
import { lsGet, lsSet } from 'src/utils/localStorageUtils';

export const BallSpeed: FC = () => {
  const [speed, setSpeed] = useState(Number(lsGet('ballSpeed') || 15));

  return (
    <div className="other">
      <div className="flex align-center gap-2">
        <p>Ball speed:</p>
        <div className="counter">{speed}</div>
      </div>
      <input
        type="range"
        value={speed}
        onChange={e => {
          setSpeed(+e.target.value);
          lsSet('ballSpeed', e.target.value);
        }}
        min={5}
        max={20}
      />
    </div>
  );
};
