import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  tight?: boolean;
};

const BootstrapRow = ({ tight = false, children }: Props) => {
  return (
    <div className="bootstrap-wrapper">
      <div className={clsx('row', !!tight && 'tight-row')}>{children}</div>
    </div>
  );
};

export default BootstrapRow;
