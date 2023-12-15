import { FC } from 'react';
import { Link } from 'react-router-dom';

const Dashboard: FC = () => {
  return (
    <div className="dashboard">
      <span className="splash" />
      <span className="dashboard-ball" />
      <div className="content">
        <h1>PONG</h1>
        <div className="button-container">
          <Link to="/game">
            <button>Play</button>
          </Link>
          <button>Settings</button>
        </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default Dashboard;
