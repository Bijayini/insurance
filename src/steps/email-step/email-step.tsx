import React, { useState } from 'react';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { validateEmail } from '../../utils/validate-email';
import { StepProps } from '../../global/type';

export const EmailStep: React.FC<StepProps> = props => {
    const [email, setEmail] = useState('');

    return (
        <div className='form-container'>
            <Input
                handleChange={setEmail}
                label='Email'
                value={email}
                name='email'
                type='email'
            />
            <Button
                handleClick={() => props.cb('email', email)}
                label='Next'
                disabled={!(email && validateEmail(email))}
            />
        </div>
    );
};
