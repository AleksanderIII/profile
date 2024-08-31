interface ILabelProps {
  htmlFor: string;
  children: string;
}

const Label = ({ htmlFor, children }: ILabelProps) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
