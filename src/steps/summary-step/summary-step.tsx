import React from 'react';
import { StepData } from '../../global/type';

interface CollectedData {
    [StepData.EMAIL]: string;
    [StepData.AGE]: number;
    [StepData.NAME]?: string;
}

interface SummaryStepProps {
    collectedData: CollectedData;
}

const label = {
    [StepData.NAME]: 'Name',
    [StepData.EMAIL]: 'Email',
    [StepData.AGE]: 'Age'
};

const getText = (data: CollectedData, key: StepData) => {
    const value = data[key];
    if (value) {
        return `${label[key]}: 
                        ${value}`;
    }
    return '';
};

export const SummaryStep: React.FC<SummaryStepProps> = ({ collectedData }) => {
    return (
        <>
            {collectedData &&
                Object.keys(collectedData).map(item => {
                    const text = getText(collectedData, item as StepData);
                    return !!text && <div key={item}>{text}</div>;
                })}
            <div>
                <a href='/purchased=dev_ins'>Purchase</a>
            </div>
        </>
    );
};
