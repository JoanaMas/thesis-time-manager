import { FC, ReactElement } from 'react';
// Components
import CircularProgressBar from '../../../components/circularProgressBar/CircularProgressBar';
// Style
import './dashboardSection.modules.scss';

const DashboardSection: FC = (): ReactElement => {
  return (
    <section className='dashboard-section'>

      <div className="dashboard-title">

        <div>
          <h1>Hello! <span>{fakeData.name}</span></h1>
          <h5>Never put off till tomorrow what can be done today!</h5>
        </div>

        <div>
          <CircularProgressBar totalPages={fakeData.totalPages} pagesWritten={fakeData.pagesWritten} />
        </div>

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