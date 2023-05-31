import { FC, ReactElement } from 'react';
// Style
import './TimeStatsCard.modules.scss';


interface TimeStatCardProps {
  illustrationURL: string;
  heading: string;
  hours: number;
  description: string;



}

const TimeStatsCard: FC<TimeStatCardProps> = (props): ReactElement => {

  const { illustrationURL, heading, hours, description } = props;

  return (
    <div className='time-stats-card-container'>
      <div className="card-illustration-section">
        <div className='image-container' style={{ backgroundImage: `url(${illustrationURL})` }}>
            <h6>{heading}</h6>
        </div>

        <div className='time-stats'>
            <h1>{hours}</h1>
            <span>hours</span>
        </div>
      </div>

      <div className="card-description-section">
        <h6>Productivity Tips</h6>
          <p>{description}</p>
      </div>

    </div>
  );
};

export default TimeStatsCard;