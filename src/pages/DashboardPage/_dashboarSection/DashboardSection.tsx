import { FC, ReactElement } from 'react';
// Components
import CircularProgressBar from '../../../components/circularProgressBar/CircularProgressBar';
import TimeStatsCard from '../../../components/timeStatsCard/TimeStatsCard';
// Illustrations 
import bussyWorkImage from '../../../assets/busy-work-illustration.jpg';
import freeTimeImage from '../../../assets/free-time-illustration.jpg';
import sleepImage from '../../../assets/sleep-illustration.jpg';
// Style
import './dashboardSection.modules.scss';

const DashboardSection: FC = (): ReactElement => {
  return (
    <section className='dashboard-section'>

      <div className="dashboard-title-progress-container">

        <div>
          <h1>Hello! <span>{fakeData.name}</span></h1>
          <h5>Never put off till tomorrow what can be done today!</h5>

          <div className='page-stats-container'>Page stats container</div>
        </div>

        <div>
          <CircularProgressBar totalPages={fakeData.totalPages} pagesWritten={fakeData.pagesWritten} />
        </div>

      </div>

      <div className='time-stats-container'>
        <TimeStatsCard
          illustrationURL={bussyWorkImage}
          heading={'Productive Time'}
          hours={8}
          description={'Taking a break is essential to higher productivity, energy, concentration, efficiency, creativity, and just about every other good thing that you need to survive.'}
        />

        <TimeStatsCard
          illustrationURL={freeTimeImage}
          heading={'Free Time'}
          hours={8}
          description={'Leisure time is an important part of our mental health. Finding up to two hours of free time each day can significantly reduce stress and improve your general well-being.'}
        />

        <TimeStatsCard
          illustrationURL={sleepImage}
          heading={'Sleep Time'}
          hours={8}
          description={'At least 7-8 hours of sleep is important for healthy brain function and emotional wellbeing, physical health, energy and appetite regulation, productivity and work performance.'}
        />

      </div>



    </section>
  );
};

export default DashboardSection;


const fakeData = {
  name: 'Joana',
  totalPages: 550,
  pagesWritten: 300,
};