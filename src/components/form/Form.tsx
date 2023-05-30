import { FC, ReactElement } from 'react';
// Components
import InputField from './_inputField/InputField';
// Style
import './form.modules.scss';

const Form: FC = (): ReactElement => {
    return (
        <div className="form-container">

            <div className="form">
                <div className="form-title">
                    <h5>Tell us more</h5>
                    <h2>Your progress & working style</h2>
                </div>

                <form action="">

                    <div className="double-input-container">
                        <InputField
                            labelFor='name'
                            labelText='Your Name'
                            inputType='text'
                            inputName='name'
                            inputId='name'
                            inputPlaceholder='Enter your name...'
                        ></InputField>

                        <InputField
                            labelFor='date'
                            labelText='Due Date'
                            inputType='date'
                            inputName='date'
                            inputId='date'
                        ></InputField>
                    </div>

                    <div className="double-input-container">
                        <InputField
                            labelFor='pages'
                            labelText='Number Of Pages To Write'
                            inputType='number'
                            inputName='pages'
                            inputId='pages'
                            inputPlaceholder='Enter amount of pages...'
                        ></InputField>


                        <InputField
                            labelFor='pagesWritten'
                            labelText='Pages Written'
                            inputType='number'
                            inputName='pagesWritten'
                            inputId='pagesWritten'
                            inputPlaceholder='Already written pages...'
                        ></InputField>
                    </div>

                    <div className="double-input-container">
                        <InputField
                            labelFor='sleepHours'
                            labelText='Hours For Sleep'
                            inputType='number'
                            inputName='sleepHours'
                            inputId='sleepHours'
                            inputPlaceholder='Enter hours for sleep...'
                        ></InputField>


                        <InputField
                            labelFor='freeTime'
                            labelText='Hours For Other Activities'
                            inputType='number'
                            inputName='pagesWritten'
                            inputId='pagesWritten'
                            inputPlaceholder='Enter hours for free time...'
                        ></InputField>
                    </div>

                    <div className='double-input-container fieldset-container'>
                        <fieldset>
                            <legend>Productivity Peak</legend>

                            <InputField
                                labelFor='morning'
                                labelText='Morning Person'
                                inputType='radio'
                                inputName='productivity'
                                inputId='morning'
                                inputValue='morning'
                            ></InputField>

                            <InputField
                                labelFor='night'
                                labelText='Night Person'
                                inputType='radio'
                                inputName='productivity'
                                inputId='night'
                                inputValue='night'
                            ></InputField>

                        </fieldset>
                        <fieldset>
                            <legend>Work On Weekends</legend>
                            <InputField
                                labelFor='on'
                                labelText='Count me in!'
                                inputType='radio'
                                inputName='WeekendWork'
                                inputId='on'
                                inputValue='on'
                            ></InputField>

                            <InputField
                                labelFor='off'
                                labelText='Definitely not!'
                                inputType='radio'
                                inputName='WeekendWork'
                                inputId='off'
                                inputValue='off'
                            ></InputField>
                        </fieldset>


                    </div>

                    {/* FORM SUBMIT BUTTON */}
                    <div className='form-btn'>
                        <button type="submit" className='action-button'>Create Your Dashboard!</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Form;
