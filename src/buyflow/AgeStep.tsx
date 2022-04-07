import React, { useState } from 'react';
import { Input } from '../components/input';
import { Button } from '../components/button';

interface AgeStepProps {
    cb: (field: string, value: number) => void;
}

export const AgeStep: React.FC<AgeStepProps> = props => {
    const [age, setAge] = useState(0);

    const updateAge = (value: string) => {
        setAge(Number(value));
    };
    return (
        <div className='form-container'>
            <Input
                handleChange={updateAge}
                label='Age'
                value={age.toString()}
                name='age'
                type='number'
                hint='>18'
            />
            <Button
                handleClick={() => props.cb('age', age)}
                label='Next'
                disabled={!(age && age > 18)}
            />
        </div>
    );
};
