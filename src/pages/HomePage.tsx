import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
// Redux
// import { useAppSelector, useAppDispatch } from '../redux/hooks';
// import { changeErrorMessage } from '../redux/features/errorSlice';
// Components
import Navbar from '../components/navbar/Navbar';

const HomePage: FC = (): ReactElement => {

  // const error = useAppSelector(state => state.error.error);


  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  );
};

export default HomePage;