import { FC, ReactElement } from 'react';
// Style
import './inputField.modules.scss';

interface InputFieldProps {
    labelFor: string;
    labelText: string;
    inputType: string;
    inputName: string;
    inputId?: string;
    inputValue?: string;
    inputPlaceholder?: string;
    max?: number | string;
    min?: number | string;
    required?: boolean;
}

const InputField: FC<InputFieldProps> = (props): ReactElement => {

    const {
        labelFor,
        labelText,
        inputType,
        inputName,
        inputId,
        inputValue,
        inputPlaceholder,
        max,
        min,
        required,
    } = props;

    return (
        <div className={inputType === 'radio' ? 'input-field-container' : ''}>
            <label className='input' htmlFor={labelFor}>{labelText}</label>
            <input type={inputType} name={inputName} id={inputId} placeholder={inputPlaceholder} value={inputValue} min={min} max={max} required={required}/>
        </div>
    );
};

export default InputField;
