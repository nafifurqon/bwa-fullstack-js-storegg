import cx from 'classnames';

interface ButtonTabProps {
  title: string;
  active?: boolean | false;
  onClick: Function;
}

export default function ButtonTab(props: Partial<ButtonTabProps>) {
  const { title, active, onClick } = props;

  const buttonClass = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });

  return (
    <button onClick={onClick} type="button" className={buttonClass}>
      {title}
    </button>
  );
}
