import { FC } from 'react';
import { Link } from 'react-router-dom';
import { BallSpeed } from 'src/components/Settings/BallSpeed';
import { GameTo } from 'src/components/Settings/GameTo';
import { PlayerControls } from 'src/components/Settings/PlayerControls';
import { PlayerName } from 'src/components/Settings/PlayerName';
import { SettingsSection } from 'src/components/Settings/SettingsSection';

const SettingsPage: FC = () => (
  <div className="flex column align-center">
    <h2>Settings</h2>
    <div className="settings">
      <SettingsSection label="Names">
        <div className="flex gap-4">
          <PlayerName player="p1" />
          <PlayerName player="p2" />
        </div>
      </SettingsSection>
      <SettingsSection label="Controls">
        <div className="flex gap-5">
          <PlayerControls player="p1" />
          <PlayerControls player="p2" />
        </div>
      </SettingsSection>

      <h4>Other</h4>
      <div className="flex column gap-3">
        <GameTo />
        <BallSpeed />
      </div>

      <Link to="/" className="mt-4" draggable="false">
        <button className="full-width">Back</button>
      </Link>
    </div>
  </div>
);

export default SettingsPage;
