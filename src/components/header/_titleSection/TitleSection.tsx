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
                        <a href="https://www.facebook.com" target="_blank"><FacebookOutlinedIcon /></a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com" target="_blank"><InstagramIcon /></a>
                    </div>
                    <div>
                        <a href="https://twitter.com" target="_blank"><TwitterIcon /></a>

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
