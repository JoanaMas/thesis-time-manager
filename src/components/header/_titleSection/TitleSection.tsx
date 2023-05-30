import { FC, ReactElement } from 'react';
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
                <a href="#form-section">
                    <button className='action-button'>Let's help you out!</button>
                </a>
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
                <a href="#form-section"><ArrowDownwardIcon /></a>
            </div>

        </div>
    );
};

export default TitleSection;
