import { FC, useState } from 'react';
import { PlayerId } from 'src/styles/types/GameTypes';
import { TextInput } from '../Inputs/TextInput';
import { lsGet, lsSet } from 'src/utils/localStorageUtils';

interface Props {
  player: PlayerId;
}

export const PlayerName: FC<Props> = ({ player }) => {
  const [name, setName] = useState(lsGet(`${player}-name`) || '');

  return (
    <TextInput
      label={`Player ${player === 'p1' ? '1' : '2'}`}
      value={name}
      setValue={e => {
        setName(e);
        lsSet(`${player}-name`, e);
      }}
    />
  );
};
