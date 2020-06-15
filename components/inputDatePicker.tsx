import DatePicker from 'react-datepicker';
import React, { FunctionComponent } from 'react';


interface InputDataPickerProps {
    name: string,
    startDate: Date,
    handleChange: (data: Date) => void,
    labelTitle: string,
}

const InputDatePicker: FunctionComponent<InputDataPickerProps> = ({ name, startDate, handleChange, labelTitle }) => {

    return (
        <label>
            {labelTitle}
            <DatePicker
                name={name}
                selected={startDate}
                onChange={handleChange}
                dateFormat='MM/dd/yyyy' />
        </label>
    )
}

export default InputDatePicker;