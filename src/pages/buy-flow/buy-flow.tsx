import React, { useState } from 'react';
import { AgeStep } from './AgeStep';
import EmailStep from './EmailStep';
import SummaryStep from './SummaryStep';
import { ProductIds, Products } from '../../config';

interface BuyflowProps {
    productId: ProductIds;
}

export const BuyFlow: React.FC<BuyflowProps> = props => {
    const [currentStep, setStep] = useState('email');
    const [collectedData, updateData] = useState({
        email: '',
        age: 0
    });
    const getStepCallback = (nextStep: string) => (
        field: string,
        value: any
    ) => {
        updateData({ ...collectedData, [field]: value });
        setStep(nextStep);
    };

    return (
        <div className='page-container'>
            <h4 className='page-text'>
                Buying {Products[props.productId].name}
            </h4>
            {(currentStep === 'email' && (
                <EmailStep cb={getStepCallback('age')} />
            )) ||
                (currentStep === 'age' && (
                    <AgeStep cb={getStepCallback('summary')} />
                )) ||
                (currentStep === 'summary' && (
                    <SummaryStep collectedData={collectedData} />
                ))}
        </div>
    );
};
