import { FC, ReactElement } from 'react';
// Components
import TitleSection from './_titleSection/TitleSection';
import IllustrationSection from './_illustrationSection/IllustrationSection';
// Style
import './header.modules.scss';

const Header: FC = (): ReactElement => {
    return (
        <header>
            <div className='headerContainer'>
                <TitleSection />
                <IllustrationSection />
            </div>
        </header>
    );
};

export default Header;
