import { FC, ReactElement } from 'react';
// Style
import './container.modules.scss';

interface ContainerProps {
    className: string;
    children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ className, children }): ReactElement => {
  return (
    <div className={`container ${className}`}>{children}</div>
  );
};

export default Container;