import { FC, useEffect, useState } from 'react';
import { ICoordinates } from 'src/styles/types/Game';
import { setBallDirection } from 'src/utils/ballUtils';

export const Ball: FC = () => {
  const [position, setPosition] = useState<ICoordinates>({ x: 150, y: 10 });
  const [movement, setMovement] = useState({
    x: !!Math.round(Math.random()),
    y: !!Math.round(Math.random()),
  });
  const [increments, setIncrements] = useState(setBallDirection());

  // Controll Bounce
  useEffect(() => {
    const headerHeight = 50;
    const ballR = 24;
    const maxLeft = document.body.clientWidth - ballR - 30;
    const maxTop = document.body.clientHeight - headerHeight - ballR;

    // Bounce horizontal
    if (position.x <= 20 && !movement.x) {
      setMovement(e => ({ ...e, x: true }));
    } else if (position.x >= maxLeft && movement.x) {
      setMovement(e => ({ ...e, x: false }));
    }
    // Bounce vertical
    if (position.y < 0) {
      setMovement(e => ({ ...e, y: true }));
    } else if (position.y >= maxTop) {
      setMovement(e => ({ ...e, y: false }));
    }
  }, [position, movement.x]);

  // Controll Movement
  useEffect(() => {
    let intervalId: number;
    const movementRate = 5;

    const move = () => {
      setPosition(e => {
        const top = movement.y ? e.y + increments.y : e.y - increments.y;
        const left = movement.x ? e.x + increments.x : e.x - increments.x;
        return { y: top, x: left };
      });
    };
    intervalId = setInterval(move, movementRate);

    return () => {
      clearInterval(intervalId);
    };
  }, [movement, increments]);

  return <div className="ball" style={{ top: position.y, left: position.x }} />;
};
