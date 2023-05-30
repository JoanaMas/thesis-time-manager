import { FC, ReactElement } from 'react';
// Components
import Container from '../../components/container/Container';
import Aside from './_aside/Aside';
import DashboardSection from './_dashboarSection/DashboardSection';
// Style
import './dashboard.modules.scss';

const Dashboard: FC = (): ReactElement => {
  return (
    <Container>
      <main>
        
        <Aside/>
        <DashboardSection />
        
      </main>
    </Container>
  );
};

export default Dashboard;