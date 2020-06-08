import React, { FunctionComponent } from 'react';

interface InputFieldProps {
    value: string;
    labelTitle: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string
}

const InputField: FunctionComponent<InputFieldProps> = ({ value, handleChange, labelTitle, name }) => {
    return (
        <>
            <label>
                {labelTitle}
                <input type='text' name={name} value={value} onChange={handleChange}></input>
            </label>
        </>)
}


export default InputField;
