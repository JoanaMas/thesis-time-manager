import { FC, ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Routes
import { routes } from '../../router/routes';
// Components
import InputField from './_inputField/InputField';
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
            <div className="form">
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

                            {/* <InputField
                                labelFor='morning'
                                labelText='Morning Person'
                                inputType='radio'
                                inputName='productivity'
                                inputId='morning'
                                inputValue='morning'
                                onChange={(e) => setCheckedValue(e.target.value)}
                                required
                            ></InputField> */}

                            <input type="radio" name="productivityTime" value="morning" onChange={(e) => setProductivityTimeValue(e.target.value)} /> Morning
                            <input type="radio" name="productivityTime" value="night" onChange={(e) => setProductivityTimeValue(e.target.value)} /> Night

                            {/* <InputField
                                labelFor='night'
                                labelText='Night Person'
                                inputType='radio'
                                inputName='productivity'
                                inputId='night'
                                inputValue='night'
                                onChange={(e) => setCheckedValue(e.target.value)}
                                required
                            ></InputField> */}

                        </fieldset>
                        <fieldset>
                            <legend>Work On Weekends</legend>
                            {/* <InputField
                                labelFor='on'
                                labelText='Count me in!'
                                inputType='radio'
                                inputName='WeekendWork'
                                inputId='on'
                                inputValue='on'
                                required
                            ></InputField> */}

                            <input type="radio" name="weekendOff" value="on" onChange={(e) => setWeekendOfValue(e.target.value)} /> Count me in!
                            <input type="radio" name="weekendOff" value="off" onChange={(e) => setWeekendOfValue(e.target.value)} /> Definitely not!


                            {/* <InputField
                                labelFor='off'
                                labelText='Definitely not!'
                                inputType='radio'
                                inputName='WeekendWork'
                                inputId='off'
                                inputValue='off'
                                required
                            ></InputField> */}
                        </fieldset>


                    </div>

                    {/* FORM SUBMIT BUTTON */}
                    <div className='form-btn'>
                        <button
                            type='submit'
                            className='action-button'
                        // onClick={() => navigate(routes.dashboardPage)}
                        >Create Your Dashboard!</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Form;
