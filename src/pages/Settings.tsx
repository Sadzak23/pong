import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { TextInput } from 'src/components/Inputs/TextInput';
import { lsGet, lsSet } from 'src/utils/localStorageUtils';

const Settings: FC = () => {
  const [p1Name, setP1Name] = useState(lsGet('p1-name') || '');
  const [p2Name, setP2Name] = useState(lsGet('p2-name') || '');

  return (
    <div className="flex column align-center">
      <h2>Settings</h2>
      <div className="settings">
        <div className="flex gap-5">
          <TextInput
            label="Player 1"
            value={p1Name}
            setValue={e => {
              setP1Name(e);
              lsSet('p1-name', e);
            }}
          />
          <TextInput
            label="Player 2"
            value={p2Name}
            setValue={e => {
              setP2Name(e);
              lsSet('p2-name', e);
            }}
          />
        </div>
        <h3>Controls</h3>
        <div className="flex justify-between gap-5 full-width">
          <div className="flex column gap-2 full-width">
            <p>Up: W</p>
            <p>Down: S</p>
          </div>
          <div className="flex column gap-2 full-width">
            <p>Up: ArrowUp</p>
            <p>Down: ArrowDown</p>
          </div>
        </div>
        <Link to="/" className="mt-4">
          <button className="full-width">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Settings;
