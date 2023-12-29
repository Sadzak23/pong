import { FC } from 'react';
import { Link } from 'react-router-dom';
import { GameTo } from 'src/components/Settings/GameTo';
import { PlayerControls } from 'src/components/Settings/PlayerControls';
import { PlayerName } from 'src/components/Settings/PlayerName';

const SettingsPage: FC = () => (
  <div className="flex column align-center">
    <h2>Settings</h2>
    <div className="settings">
      <h4>Names</h4>
      <div className="flex gap-5">
        <PlayerName player="p1" />
        <PlayerName player="p2" />
      </div>

      <h4>Controls</h4>
      <div className="flex gap-5">
        <PlayerControls player="p1" />
        <PlayerControls player="p2" />
      </div>

      <h4>Other</h4>
      <div className="flex column gap-2">
        <GameTo />
      </div>

      <Link to="/" className="mt-4">
        <button className="full-width">Back</button>
      </Link>
    </div>
  </div>
);

export default SettingsPage;
