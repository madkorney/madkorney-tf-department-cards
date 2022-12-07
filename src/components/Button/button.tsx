import './button.scss';

type ButtonProps = {
  caption: string;
  type: 'confirm' | 'cancel';
  handleClick: (e: React.MouseEvent) => void;
};

export const Button = ({ type, caption, handleClick }: ButtonProps) => {
  const btnClass = `btn-general ${type}`;
  return (
    <button className={btnClass} onClick={handleClick}>
      {caption}
    </button>
  );
};
