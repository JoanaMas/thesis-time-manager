import { FC, ReactElement, useState } from 'react';
// Redus
import { useAppSelector } from '../../../redux/hooks';
// Components
import DailyGoalCard from '../../../components/dailyGoalCard/DailyGoalCard';
// MUI icons
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
// Helpers
import { getDaysCount } from '../../../helpers/daysLeftCount';
import { countPagerPerDay } from '../../../helpers/pagesPerDayCounter';
// Style
import './aside.modules.scss';

interface AsideProps {
  loader: boolean;
  onClick: VoidFunction;
}

const Aside: FC<AsideProps> = (props): ReactElement => {

  const { onClick, loader } = props;

  // USER DATA
  const userData = useAppSelector(store => store.userData.userData);
  const pagesToWrite = useAppSelector(store => store.pages.pages);
  const productiveTime = useAppSelector(store => store.productivityTime.productivityTime);

  // HOW MANY DAYS LEFT UNTIL DEADLINE
  const daysLeft = getDaysCount(userData.dueDate);

  // HOW MANY PAGES PER DAY TO WRITE
  const pagesPerDay = countPagerPerDay(pagesToWrite, daysLeft);


  // Test
  const [partOfTheDay, setPartOfTheDay] = useState('night');


  return (
    <aside>
      <div className="productivity-stats-container">

        <div className="greeting-container">

          <div className="icon">
            {partOfTheDay === 'morning'
              ? <WbSunnyOutlinedIcon />
              : <NightlightOutlinedIcon />}
          </div>

          {partOfTheDay === 'morning'
            ? <h3>Good Morning, Early Bird!</h3>
            : <h3>Good Afternoon, Night Owl!</h3>
          }

          <div className="sub-heading">
            {partOfTheDay === 'morning'
              ? <h6>We heard you love mornings, so we took care of your daily work schedule accordingly! </h6>
              : <h6>We heard you love evenings, so we took care of your daily work schedule accordingly!</h6>
            }
          </div>

        </div>

        <div className="daily-goals-container">
          <DailyGoalCard goalTitle='Daily Pages' goalCount={pagesPerDay.toString()} />
          <DailyGoalCard goalTitle='Days Left' goalCount={daysLeft.toString()} />
          <DailyGoalCard goalTitle='Work Schedule' goalCount={partOfTheDay === 'morning' ? `${8}-${8 + productiveTime}h` : `${12}-${12 + productiveTime}h`} />
        </div>

        <div className="save-pdf-container">
          <button onClick={onClick} className='action-button' disabled={loader === true}>Save As PDF</button>
        </div>

      </div>

    </aside>
  );
};

export default Aside;