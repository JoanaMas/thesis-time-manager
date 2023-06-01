import { FC, ReactElement, useState } from 'react';
// Redux
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { setPagesToWrite } from '../../../redux/features/pagesSlice';
import { setProductiveTime } from '../../../redux/features/productivityTimeSlice';
// Components
import CircularProgressBar from '../../../components/circularProgressBar/CircularProgressBar';
import TimeStatsCard from '../../../components/timeStatsCard/TimeStatsCard';
import PagesStatsCard from '../../../components/pagesStatsCard/PagesStatsCard';
// Illustrations 
import bussyWorkImage from '../../../assets/busy-work-illustration.jpg';
import freeTimeImage from '../../../assets/free-time-illustration.jpg';
import sleepImage from '../../../assets/sleep-illustration.jpg';
// Interfaces
import { IUserData } from '../../../redux/features/interfaces/UserDataInterface';
// Helpers
import { pagesToWrite } from '../../../helpers/pagesLeftToWriteCount';
import { countProductiveTime } from '../../../helpers/productiveTimeCounters';
import { getDataFromLocalStorage } from '../../../helpers/getDataFromLocalStorage';
// Style
import './dashboardSection.modules.scss';


const DashboardSection: FC = (): ReactElement => {

  const [userData] = useState<IUserData>(getDataFromLocalStorage);

  // STATES FROM REDUX
  // const userData = useAppSelector(store => store.userData.userData);
  const pagesLeftToWrite = useAppSelector(store => store.pages.pages);
  const productiveTime = useAppSelector(store => store.productivityTime.productivityTime);

  const dispatch = useAppDispatch();

  // SETTING AMOUNT OF PAGES TO WRITE IN ORDER TO COUNT HOW MANY PAGES PER DAY TO WRITE IN ASIDE COMPONENT
  dispatch(setPagesToWrite(pagesToWrite(userData.totalPages, userData.pagesCompleted)));

  // SETTING PRODUCTIVITY TIME TO USE IN ASIDE COMPONENT IN ORDER TO CALCULATE RECOMMENDED PRODUCTIVITY HOURS
  dispatch(setProductiveTime(countProductiveTime(userData.hoursForSleep, userData.freeHours)));


  return (
    <section className='dashboard-section'>

      <div className="dashboard-title-progress-container">

        <div className='dashboard-left-side'>
          <h1>Hello! <span>{userData.name}</span></h1>
          <h5>Never put off till tomorrow what can be done today!</h5>

          <div className='page-stats-container'>
            <PagesStatsCard backgroundGreenClass='background-green' title='Pages Left To Write' pagesNumber={pagesLeftToWrite} />
            <PagesStatsCard title='Pages Written' pagesNumber={userData.pagesCompleted} />
            <PagesStatsCard title='Total Pages' pagesNumber={userData.totalPages} />
          </div>
        </div>

        <div className='dashboard-right-side'>
          <CircularProgressBar totalPages={userData.totalPages} pagesWritten={userData.pagesCompleted} />
        </div>


      </div>


      <div className='time-stats-container'>
        <TimeStatsCard
          illustrationURL={bussyWorkImage}
          heading={'Productive Time'}
          hours={productiveTime}
          description={'Taking a break is essential to higher productivity, energy, concentration, efficiency, creativity, and just about every other good thing that you need to survive.'}
        />

        <TimeStatsCard
          illustrationURL={freeTimeImage}
          heading={'Free Time'}
          hours={userData.freeHours}
          description={'Leisure time is an important part of our mental health. Finding up to two hours of free time each day can significantly reduce stress and improve your general well-being.'}
        />

        <TimeStatsCard
          illustrationURL={sleepImage}
          heading={'Sleep Time'}
          hours={userData.hoursForSleep}
          description={'At least 7-8 hours of sleep is important for healthy brain function and emotional wellbeing, physical health, energy and appetite regulation, productivity and work performance.'}
        />

      </div>



    </section>
  );
};

export default DashboardSection;