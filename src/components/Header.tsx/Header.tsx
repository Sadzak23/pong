import { FC } from 'react';
import styles from './header.module.scss';
import { lsGet } from 'src/utils/scoreUtils';

export const Header: FC = () => {
  const p1Score = lsGet('p1-score') || 0;
  const p2Score = lsGet('p2-score') || 0;

  return (
    <div className={styles.header}>
      <h2>Player 1</h2>
      <div className={styles.score}>
        <h1>{p1Score}</h1>:<h1>{p2Score}</h1>
      </div>
      <h2>Player 2</h2>
    </div>
  );
};
