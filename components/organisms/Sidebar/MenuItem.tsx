import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface MenuItemProps {
  title: string;
  icon: 'ic-menu-overview' | 'ic-menu-transaction' | 'ic-menu-messages' | 'ic-menu-card' | 'ic-menu-reward' | 'ic-menu-setting' | 'ic-menu-logout';
  active?: boolean;
  href?: string;
  onClick?: () => void;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const {
    title, icon, active, href = '/', onClick,
  } = props;
  const classItem = cx({
    item: true,
    'mb-30': true,
    active,
  });

  return (
    <div
      className={classItem}
      onClick={() => {}}
      onKeyPress={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="menu overview" />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none">{title}</a>
        ) : (
          <Link href={href}>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        )}
      </p>
    </div>
  );
}
