import { FC, ReactElement, useState } from 'react';
// Components
import Container from '../../components/container/Container';
import Aside from './_aside/Aside';
import DashboardSection from './_dashboarSection/DashboardSection';
// Style
import './dashboard.modules.scss';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Dashboard: FC = (): ReactElement => {

  const [loader, setLoader] = useState(false);
  
const downloadPDF = async () => {
  try {
    const capture: HTMLElement | null = document.querySelector('.main-dashboard-container');
    if (!capture) {
      throw new Error('Container element not found.');
    }
    setLoader(true);
    const canvas = await html2canvas(capture);
    const imgData = canvas.toDataURL('image/png');
    const doc = new jsPDF('p', 'mm', 'a4', true);
    const customWidth = 210;
    const aspectRatio = canvas.width / canvas.height;
    const componentWidth = customWidth;
    const componentHeight = customWidth / aspectRatio;
    doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
    setLoader(false);
    doc.save('dashboard.pdf');
  } catch (error) {
    console.error('Error:', error);
  }
};

  return (
    <Container className='main-dashboard-container'>
      <main>
        
        <Aside onClick={downloadPDF} loader={loader}/>
        <DashboardSection />
        
      </main>
    </Container>
  );
};

export default Dashboard;