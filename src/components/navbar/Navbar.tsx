import { FC, ReactElement } from 'react';
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