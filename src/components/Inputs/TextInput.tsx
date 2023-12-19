import { forwardRef, InputHTMLAttributes } from 'react';

export interface ITextInput {
  label?: string;
  value?: string;
  setValue: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}
export const TextInput = forwardRef<HTMLInputElement, ITextInput>(
  (
    { label, value, setValue, required, disabled, autoFocus, placeholder, inputProps },
    ref
  ) => (
    <div className="input-container">
      {label && <div className="label">{required ? `${label} *` : label}</div>}
      <input
        ref={ref}
        autoFocus={autoFocus}
        placeholder={placeholder}
        value={value || ''}
        onChange={e => setValue(e.target.value)}
        required={required}
        disabled={disabled}
        {...inputProps}
      />
    </div>
  )
);
