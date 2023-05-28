import { FC, ReactElement } from 'react';
// Logo image
import logo from '../../../assets/logo.jpg';
// Style
import './logo.modules.scss';

const Logo: FC = (): ReactElement => {
    return (
        <div className="logo">
            <img src={logo} alt="logo" />
            <span>achievers</span>
        </div>
    );
};

export default Logo;
