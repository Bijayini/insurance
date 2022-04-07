export interface StepProps {
    cb: (field: string, value: string) => void;
}

export enum StepData {
    EMAIL = 'email',
    AGE = 'age',
    NAME = 'name'
}
