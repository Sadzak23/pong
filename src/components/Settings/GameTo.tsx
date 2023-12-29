import { FC, useState } from 'react';
import { lsGet, lsSet } from 'src/utils/localStorageUtils';

export const GameTo: FC = () => {
  const [gameTo, setGameTo] = useState(Number(lsGet('gameTo') || 5));

  return (
    <div className="game-to">
      <p>Game to:</p>
      {[3, 5, 10, 15].map(e => (
        <button
          key={e}
          className={gameTo === e ? 'active' : undefined}
          onClick={() => {
            setGameTo(e);
            lsSet('gameTo', `${e}`);
          }}
        >
          {e}
        </button>
      ))}
    </div>
  );
};
