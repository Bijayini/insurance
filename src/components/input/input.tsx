import React, { FC, InputHTMLAttributes } from 'react';
import './input.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    handleChange: (value: any) => void;
    label: string;
    value?: string;
    name: string;
    testId?: string;
    hint?: string;
}

export const Input: FC<Props> = ({
    handleChange,
    label,
    type,
    value,
    name,
    hint,
    testId,
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
            data-testid={testId || 'input'}
            {...restProps}
        />
        {!!hint && (
            <span className='input-hint' data-testid='input-hint'>
                {hint}
            </span>
        )}
    </div>
);
