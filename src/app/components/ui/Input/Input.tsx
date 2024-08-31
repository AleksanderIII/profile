import { ChangeEvent } from 'react';

interface IInputProps {
  id: string;
  type: string;
  value: string;
  className: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, id, type, className, onChange }: IInputProps) => {
  return (
    <input
      id={id}
      className={className}
      type={type}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default Input;
