import { SummaryStep } from './summary-step';
import { getByText, queryByText, render } from '@testing-library/react';

describe('<SummaryStep/>', () => {
    const props = {
        collectedData: {
            name: 'Some Name',
            age: 20,
            email: 'sdf@vb.in'
        }
    };

    it('should render SummaryStep correctly when all data is present', () => {
        const { getByText } = render(<SummaryStep {...props} />);

        expect(getByText('Name: Some Name')).toBeInTheDocument();
    });

    it('should render SummaryStep correctly when name is missing', () => {
        const updatedProps = {
            collectedData: {
                ...props.collectedData,
                name: undefined
            }
        };
        const { queryByText } = render(<SummaryStep {...updatedProps} />);

        expect(queryByText('Name: Some Name')).toBeFalsy();
    });
});
