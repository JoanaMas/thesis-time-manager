import { FC, ReactElement } from 'react';
// Style
import './dailyGoalCard.modules.scss';

interface DailyGoalCardProps {
    goalTitle: string;
    goalCount: string;
}

const DailyGoalCard: FC<DailyGoalCardProps> = (props): ReactElement => {

    const { goalTitle, goalCount } = props;

  return (
    <div className='daily-goal-card-container'>

        <h6>{goalTitle}</h6>

        <div className="circle-container">
            <span>{goalCount}</span>
        </div>
    </div>
  );
};

export default DailyGoalCard;