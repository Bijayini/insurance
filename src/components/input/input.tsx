import React, { FC, InputHTMLAttributes } from 'react';
import './input.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    handleChange: (value: any) => void;
    label: string;
    value?: string;
    name: string;
    hint?: string;
}

export const Input: FC<Props> = ({
    handleChange,
    label,
    type,
    value,
    name,
    hint,
    ...restProps
}) => (
    <div className='input-wrapper'>
        <label>{label}: </label>
        <input
            type={type || 'text'}
            onChange={({ target: { value } }) => {
                handleChange(value);
            }}
            value={value}
            name={name}
            {...restProps}
        />
        {!!hint && <span className='input-hint'>{hint}</span>}
    </div>
);
