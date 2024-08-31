import { ChangeEvent } from 'react';

interface ITextareaProps {
  id: string;
  rows: number;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  className: string;
}

const Textarea = ({ id, rows, value, onChange, className }: ITextareaProps) => {
  return (
    <textarea
      id={id}
      rows={rows}
      value={value}
      onChange={onChange}
      className={className}
    ></textarea>
  );
};

export default Textarea;
