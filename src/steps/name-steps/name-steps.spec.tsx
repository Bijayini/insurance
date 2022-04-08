import { NameStep } from './name-step';
import { fireEvent, getByText, render } from '@testing-library/react';

describe('<NameStep/>', () => {
    const props = {
        cb: jest.fn()
    };
    it('should render NameStep correctly with disabled button', () => {
        const { getByText } = render(<NameStep {...props} />);

        expect(getByText('Next')).toBeDisabled();
    });

    it('button should be disabled when user is entering empty string for one of the name field', () => {
        const { getAllByTestId, getByText } = render(<NameStep {...props} />);
        const firstName = getAllByTestId('input')[0];
        const lastName = getAllByTestId('input')[1];

        fireEvent.change(firstName, { target: { value: '   ' } });
        fireEvent.change(lastName, { target: { value: 'sdfsdf' } });

        expect(getByText('Next')).toBeDisabled();
    });

    it('should call callback with name on clicking on Next button', () => {
        const { getAllByTestId, getByText } = render(<NameStep {...props} />);
        const firstName = getAllByTestId('input')[0];
        const lastName = getAllByTestId('input')[1];
        const button = getByText('Next');

        fireEvent.change(firstName, { target: { value: 'fij' } });
        fireEvent.change(lastName, { target: { value: 'sdf' } });

        expect(button).not.toBeDisabled();

        fireEvent.click(button);

        expect(props.cb).toHaveBeenCalledWith('name', 'fij sdf');
    });
});
