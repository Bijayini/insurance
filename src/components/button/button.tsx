import React, { FC, InputHTMLAttributes } from 'react';
import './button.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    handleClick: (value: any) => void;
    label: string;
    disabled?: boolean;
}

export const Button: FC<Props> = ({ handleClick, label, disabled }) => (
    <button onClick={handleClick} disabled={disabled}>
        {label}
    </button>
);
