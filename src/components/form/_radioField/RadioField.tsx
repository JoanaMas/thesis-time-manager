import { FC, ReactElement } from 'react';
// Style
import './radioField.modules.scss';

interface RadioFieldProps {
    radioName: string;
    radioValue: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;


}

const RadioField: FC<RadioFieldProps> = (props): ReactElement => {

    const { radioName, radioValue, label, onChange } = props;

    return (
        <div className="radio-input-container">
            <input type="radio" name={radioName} value={radioValue} onChange={onChange} />
            <span>{label}</span>
        </div>
    );
};

export default RadioField;