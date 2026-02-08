import { FC, ReactNode } from 'react';

interface Props {
  label: string;
  children: ReactNode;
}

export const SettingsSection: FC<Props> = ({ label, children }) => (
  <div className="flex column gap-3">
    <h4>{label}</h4>
    {children}
  </div>
);
