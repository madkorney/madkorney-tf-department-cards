import './buttonHeader.scss';

type ButtonHeaderProps = {
  active?: boolean;
  caption: string;
};

export const ButtonHeader = ({ active, caption }: ButtonHeaderProps) => {
  const btnClass = active ? 'btn-header active' : 'btn-header';

  return <button className={btnClass}>{caption}</button>;
};
