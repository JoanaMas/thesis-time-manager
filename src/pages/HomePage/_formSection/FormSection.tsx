import { FC, ReactElement } from 'react';
// Components
import Form from '../../../components/form/Form';
// Style
import './formSection.modules.scss';

const FormSection:FC = (): ReactElement => {
  return (
    <section id="form-section" className='form-section'>
      <Form />
    </section>
  );
};

export default FormSection;