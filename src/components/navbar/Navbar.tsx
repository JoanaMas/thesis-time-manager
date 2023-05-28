import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
// Sub components
import Logo from './_logo/Logo';
import Links from './_links/Links';
// Style
import './navbar.modules.scss';

const Navbar: FC = (): ReactElement => {
  return (
    <nav>
        <Logo />
        <div className="vertical-line"></div>
        <Links />
    </nav>
  );
};

export default Navbar;