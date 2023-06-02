import { FC, ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Routes
import { routes } from '../../router/routes';
// Components
import InputField from './_inputField/InputField';
// Helpers
import { getCurrentDay } from '../../helpers/getCurrentDay';
// Style
import './form.modules.scss';

const Form: FC = (): ReactElement => {

    const navigate = useNavigate();

    // RADIO INPUT STATES
    const [checkedProductivityTimeValue, setProductivityTimeValue] = useState('');
    const [checkedWeekendOfValue, setWeekendOfValue] = useState('');

    const handleFormSubmit = (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();

        const { name, date, pages, pagesCompleted, sleepHours, freeTime } = event.target as typeof event.target & {
            name: { value: string };
            date: { value: string };
            pages: { value: number };
            pagesCompleted: { value: number };
            sleepHours: { value: number };
            freeTime: { value: number };
        };

        const userInputData = {
            name: name.value,
            dueDate: new Date(date.value),
            totalPages: Number(pages.value),
            pagesCompleted: Number(pagesCompleted.value),
            hoursForSleep: Number(sleepHours.value),
            freeHours: Number(freeTime.value),
            productivityPeak: checkedProductivityTimeValue,
            weekendWork: checkedWeekendOfValue,
        };

        localStorage.setItem('userData', JSON.stringify(userInputData));
        navigate(routes.dashboardPage);

    };

    return (
        <div className="form-container">
            <div className="form z-index-5">
                <div className="form-title">
                    <h5>Tell us more</h5>
                    <h2>Your progress & working style</h2>
                </div>

                <form action="" onSubmit={handleFormSubmit}>

                    <div className="double-input-container">
                        <InputField
                            labelFor='name'
                            labelText='Your Name'
                            inputType='text'
                            inputName='name'
                            inputId='name'
                            inputPlaceholder='Enter your name...'
                            required
                        ></InputField>

                        <InputField
                            labelFor='date'
                            labelText='Due Date'
                            inputType='date'
                            inputName='date'
                            inputId='date'
                            min={getCurrentDay()}
                            required
                        ></InputField>
                    </div>

                    <div className="double-input-container">
                        <InputField
                            labelFor='pages'
                            labelText='Number Of Pages To Write'
                            inputType='number'
                            inputName='pages'
                            inputId='pages'
                            min={0}
                            max={10000}
                            inputPlaceholder='Enter amount of pages...'
                            required
                        ></InputField>

                        <InputField
                            labelFor='pagesCompleted'
                            labelText='Pages Completed'
                            inputType='number'
                            inputName='pagesCompleted'
                            inputId='pagesCompleted'
                            min={0}
                            max={10000}
                            inputPlaceholder='Already written pages...'
                            required
                        ></InputField>

                    </div>

                    <div className="double-input-container">
                        <InputField
                            labelFor='sleepHours'
                            labelText='Hours For Sleep'
                            inputType='number'
                            inputName='sleepHours'
                            inputId='sleepHours'
                            min={0}
                            max={24}
                            inputPlaceholder='Enter hours for sleep...'
                            required
                        ></InputField>


                        <InputField
                            labelFor='freeTime'
                            labelText='Hours For Other Activities'
                            inputType='number'
                            inputName='freeTime'
                            inputId='freeTime'
                            min={0}
                            max={24}
                            inputPlaceholder='Enter hours for free time...'
                            required
                        ></InputField>
                    </div>

                    <div className='double-input-container fieldset-container'>
                        <fieldset>
                            <legend>Productivity Peak</legend>

                            <div className="radio-input-container">
                                <input type="radio" name="productivityTime" value="morning" onChange={(e) => setProductivityTimeValue(e.target.value)} />
                                <span>Morning</span>
                            </div>
                            <div className="radio-input-container">
                                <input type="radio" name="productivityTime" value="night" onChange={(e) => setProductivityTimeValue(e.target.value)} />
                                <span>Night</span>
                            </div>

                        </fieldset>

                        <fieldset>
                            <legend>Work On Weekends</legend>

                            <div className="radio-input-container">
                                <input type="radio" name="weekendOff" value="on" onChange={(e) => setWeekendOfValue(e.target.value)} />
                                <span>Count me in!</span>
                            </div>
                            <div className="radio-input-container">
                                <input type="radio" name="weekendOff" value="off" onChange={(e) => setWeekendOfValue(e.target.value)} />
                                <span>Definitely not!</span>
                            </div>

                        </fieldset>


                    </div>

                    {/* FORM SUBMIT BUTTON */}
                    <div className='form-btn'>
                        <button
                            type='submit'
                            className='action-button'
                        >Create Your Dashboard!</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Form;
