import { FC, ReactElement } from 'react';
// Style
import './container.modules.scss';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }): ReactElement => {
  return (
    <div className='container'>{children}</div>
  );
};

export default Container;