import { AgeStep } from './age-step';
import { fireEvent, getByText, render } from '@testing-library/react';

describe('<AgeStep/>', () => {
    const props = {
        cb: jest.fn()
    };
    it('should render AgeStep correctly with disabled button', () => {
        const { getByText } = render(<AgeStep {...props} />);

        expect(getByText('Next')).toBeDisabled();
    });

    it('button should be disabled when user is entering age < 18', () => {
        const { getByTestId, getByText } = render(<AgeStep {...props} />);
        const input = getByTestId('input');

        fireEvent.change(input, { target: { value: 16 } });

        expect(getByText('Next')).toBeDisabled();
    });

    it('should call callback with age on clicking on Next button', () => {
        const { getByTestId, getByText } = render(<AgeStep {...props} />);
        const input = getByTestId('input');
        const button = getByText('Next');

        fireEvent.change(input, { target: { value: 20 } });

        expect(button).not.toBeDisabled();

        fireEvent.click(button);

        expect(props.cb).toHaveBeenCalledWith('age', 20);
    });
});
