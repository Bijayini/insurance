import { EmailStep } from './email-step';
import { fireEvent, getByText, render } from '@testing-library/react';

describe('<EmailStep/>', () => {
    const props = {
        cb: jest.fn()
    };
    it('should render EmailStep correctly with disabled button', () => {
        const { getByText } = render(<EmailStep {...props} />);

        expect(getByText('Next')).toBeDisabled();
    });

    it('button should be disabled when user is entering invalid email', () => {
        const { getByTestId, getByText } = render(<EmailStep {...props} />);
        const input = getByTestId('input');

        fireEvent.change(input, { target: { value: 'sdfsdf.com' } });

        expect(getByText('Next')).toBeDisabled();
    });

    it('should call callback with email data on clicking on Next button', () => {
        const { getByTestId, getByText } = render(<EmailStep {...props} />);
        const input = getByTestId('input');
        const button = getByText('Next');

        fireEvent.change(input, { target: { value: 'sdf@sdf.com' } });

        expect(button).not.toBeDisabled();

        fireEvent.click(button);

        expect(props.cb).toHaveBeenCalledWith('email', 'sdf@sdf.com');
    });
});
