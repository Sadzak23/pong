import { FC, useState } from 'react';
import { lsGet, lsSet } from 'src/utils/localStorageUtils';

export const GameTo: FC = () => {
  const [gameTo, setGameTo] = useState(Number(lsGet('gameTo') || 5));

  return (
    <div className="other">
      <div className="flex align-center gap-2">
        <p>Game to:</p>
        <div className="counter">{gameTo}</div>
      </div>
      <input
        type="range"
        value={gameTo}
        onChange={e => {
          setGameTo(+e.target.value);
          lsSet('gameTo', e.target.value);
        }}
        min={1}
        max={15}
      />
    </div>
  );
};
