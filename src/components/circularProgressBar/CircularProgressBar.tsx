import { FC, ReactElement, useState, useEffect } from 'react';
// Helpers
import { countWrittenPageProgress } from '../../helpers/progressCounter';
// Style
import './circularProgressBar.modules.scss';

interface CircularProgressBarProps {
    totalPages: number;
    pagesWritten: number;
}

const CircularProgressBar: FC<CircularProgressBarProps> = (props): ReactElement => {

    const { totalPages, pagesWritten } = props;

    const progressColorGreen = '#61cc96';
    const progressColorWhite = '#ede8e8';

    const progressStartValue = 0;
    const progressCompleted = countWrittenPageProgress(totalPages, pagesWritten);
    const speed = 100;
    const [progressValue, setProgressValue] = useState<number>(progressStartValue);

    useEffect(() => {

        const progressInterval = setInterval(() => {
            setProgressValue((prevValue) => prevValue + 1);
        }, speed);


        if (progressValue >= progressCompleted) {
            clearInterval(progressInterval);
        }

        return () => clearInterval(progressInterval);

    }, [progressValue, progressCompleted]);



    return (
        <div className='circular-progress-container'>
            <div className="circular-progress"
                style={{ background: `conic-gradient(${progressColorGreen} ${progressValue * 3.6}deg, ${progressColorWhite} 0deg)` }}
            >
                <span className="progress-value">{`${progressValue}%`}</span>
            </div>
            
            <div className="progress-phrase-container">
            <span className='progress-name'>Progress</span>

            <div className="conditional-progress-phrase">
                {progressValue < 50
                    ? <h6>Great start!</h6>
                    : <h6>Keep up good work! You are almost there...</h6>
                }
            </div>

            </div>

        </div>
    );
};

export default CircularProgressBar;