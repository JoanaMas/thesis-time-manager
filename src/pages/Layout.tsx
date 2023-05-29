import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const Layout: FC = (): ReactElement => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  );
};

export default Layout;