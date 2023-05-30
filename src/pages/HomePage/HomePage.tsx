import { FC, ReactElement } from 'react';
// Redux
// import { useAppSelector, useAppDispatch } from '../redux/hooks';
// import { changeErrorMessage } from '../redux/features/errorSlice';

// Components
import Container from '../../components/container/Container';
import Header from '../../components/header/Header';
import FormSection from './_formSection/FormSection';

const HomePage: FC = (): ReactElement => {
    // const error = useAppSelector(state => state.error.error);

    return (
        <div>
            <Container>
                <Header />
                <FormSection/>
            </Container>
        </div>
    );
};

export default HomePage;
