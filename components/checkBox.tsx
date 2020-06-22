import React from 'react';

interface CheckBoxProps {
    label: string,
    checked: boolean,
    onChange: () => void
}

const CheckBox: React.SFC<CheckBoxProps> = ({ label, onChange, checked }) => {
    return (

        <label>
            {label}
            <input type='checkbox' checked={checked} onChange={onChange}></input>
        </label>
    )
}

export default CheckBox