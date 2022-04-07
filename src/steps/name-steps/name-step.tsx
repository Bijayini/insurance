import React, { useState } from 'react';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { StepProps } from '../../global/type';

export const NameStep: React.FC<StepProps> = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return (
        <div className='form-container'>
            <Input
                handleChange={setFirstName}
                label='First Name'
                value={firstName}
                name='firstName'
                type='text'
            />
            <Input
                handleChange={setLastName}
                label='Last Name'
                value={lastName}
                name='lastName'
                type='text'
            />
            <Button
                handleClick={() => props.cb('name', `${firstName} ${lastName}`)}
                label='Next'
                disabled={!(firstName.trim() && lastName.trim())}
            />
        </div>
    );
};
