import { FC, ReactElement, useState } from 'react';
// Redus
import { useAppSelector } from '../../../redux/hooks';
// Components
import DailyGoalCard from '../../../components/dailyGoalCard/DailyGoalCard';
// Interfaces
import { IUserData } from '../../../redux/features/interfaces/UserDataInterface';
// MUI icons
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';
// Helpers
import { getDaysCount } from '../../../helpers/daysLeftCount';
import { countPagerPerDay } from '../../../helpers/pagesPerDayCounter';
import { getDataFromLocalStorage } from '../../../helpers/getDataFromLocalStorage';
import { isWeekend } from '../../../helpers/getWeekends';
// Style
import './aside.modules.scss';

interface AsideProps {
  loader: boolean;
  onClick: VoidFunction;
}

const Aside: FC<AsideProps> = (props): ReactElement => {

  const [userData] = useState<IUserData>(getDataFromLocalStorage);
  const { onClick, loader } = props;

  // USER DATA
  const pagesToWrite = useAppSelector(store => store.pages.pages);
  const productiveTime = useAppSelector(store => store.productivityTime.productivityTime);

  // HOW MANY DAYS LEFT UNTIL DEADLINE
  const daysLeft = getDaysCount(userData.dueDate);

  // HOW MANY PAGES PER DAY TO WRITE
  const pagesPerDay = countPagerPerDay(pagesToWrite, daysLeft);

  // TODAY'S DATE TO CHECK IF TODAY IS WEEKEND - enter upcoming weekend date inside new Date(yyyy-m-d) to check UI. (Months starts from 0 to 11).
  const today = new Date();


  return (
    <aside>
      <div className="productivity-stats-container">

        {
          userData.weekendWork === 'off' && isWeekend(today)

            ? <div className="weekend-greeting-container">
              <div className="icon-weekend">
                <WeekendOutlinedIcon />
              </div>
                <h3>Have A Lazy Day!</h3>
                <h6>Weekend Mode On</h6>

            </div>


            : <div className="greeting-container">

              <div className="icon">
                {userData.productivityPeak === 'morning'
                  ? <WbSunnyOutlinedIcon />
                  : <NightlightOutlinedIcon />}
              </div>

              {userData.productivityPeak === 'morning'
                ? <h3>Good Morning, Early Bird!</h3>
                : <h3>Good Afternoon, Night Owl!</h3>
              }

              <div className="sub-heading">
                {userData.productivityPeak === 'morning'
                  ? <h6>We heard you love working in the mornings, so we took care of your daily work schedule accordingly! </h6>
                  : <h6>We heard you love working in the evenings, so we took care of your daily work schedule accordingly!</h6>
                }
              </div>

            </div>
        }


        <div className="daily-goals-container">
          <DailyGoalCard goalTitle='Daily Pages' goalCount={pagesPerDay <= 0 ? '0-1' : pagesPerDay.toString()} />
          <DailyGoalCard goalTitle='Days Left' goalCount={daysLeft.toString()} />
          <DailyGoalCard goalTitle='Work Schedule' goalCount={userData.productivityPeak === 'morning' ? `${8}-${8 + productiveTime}h` : `${12}-${12 + productiveTime}h`} />
        </div>

        <div className="save-pdf-container">
          <button onClick={onClick} className='action-button small-btn' disabled={loader === true}>Save as PDF</button>
        </div>

      </div>

    </aside>
  );
};

export default Aside;