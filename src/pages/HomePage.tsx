import { FC, ReactElement } from 'react';
// Redux
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { changeErrorMessage } from '../redux/features/errorSlice';


const HomePage: FC = (): ReactElement => {

  const error = useAppSelector(state => state.error.error);
  console.log(error);

  const dispatch = useAppDispatch();
  const changeError = () => {
    dispatch(changeErrorMessage('Kaip sekasi?'));
  };

  return (
    <div>HomePage
      {error}
      <button onClick={changeError}>Click me</button>
    </div>
  );
};

export default HomePage;