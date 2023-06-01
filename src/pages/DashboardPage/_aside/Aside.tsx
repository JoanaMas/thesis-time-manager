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


const Aside: FC = (): ReactElement => {

  // USER DATA
  const userData = useAppSelector(store => store.userData.userData);
  const pagesToWrite = useAppSelector(store => store.pages.pages);
  const productiveTime = useAppSelector(store => store.productivityTime.productivityTime);
  
  // HOW MANY DAYS LEFT UNTIL DEADLINE
  const daysLeft = getDaysCount(userData.dueDate);
  
  // HOW MANY PAGES PER DAY TO WRITE
  const pagesPerDay = countPagerPerDay(pagesToWrite, daysLeft);


  // Test
  const [partOfTheDay, setPartOfTheDay] = useState('morning');


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
        </div>

        <div className="daily-goals-container">
              <DailyGoalCard goalTitle='Daily Pages' goalCount={pagesPerDay.toString()}/>
              <DailyGoalCard goalTitle='Days Left' goalCount={daysLeft.toString()}/>
              <DailyGoalCard goalTitle='Recommended productive hours' goalCount={partOfTheDay === 'morning' ? `${8}-${8+productiveTime}` : `${12}-${12+productiveTime}`}/>
        </div>

      </div>

    </aside>
  );
};

export default Aside;