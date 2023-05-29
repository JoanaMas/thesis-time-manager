import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
// MUI icons
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// Style
import './title.modules.scss';

const TitleSection: FC = (): ReactElement => {
    return (
        <div className="title">
            <h1>
                Happiness is... completing your <span>thesis on time.</span>
            </h1>
            <h5>We here to empower you to take full control of your productive time. </h5>

            <div className='navigation'>
                <NavLink to={'/'}>
                    <button>Let's help you out!</button>
                </NavLink>
                <div className="vertical-line"></div>
                <div className="social-icons">
                    <div>
                        <FacebookOutlinedIcon />
                    </div>
                    <div>
                        <InstagramIcon />
                    </div>
                    <div>
                        <TwitterIcon />
                    </div>
                </div>
            </div>

            <div className="navigation-down">
                <ArrowDownwardIcon />
            </div>

        </div>
    );
};

export default TitleSection;
