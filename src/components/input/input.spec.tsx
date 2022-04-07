import { Input } from './input';
import { fireEvent, getByText, render } from '@testing-library/react';

describe('<Input/>', () => {
    const props = {
        name: 'age',
        label: 'Age',
        handleChange: jest.fn(),
        hint: '>18',
        'data-testid': 'input'
    };

    it('should render Input correctly with hint', () => {
        const { getByTestId, getByText } = render(<Input {...props} />);
        const input = getByTestId('input');

        fireEvent.change(input, { target: { value: 15 } });

        expect(getByText(props.hint)).toBeVisible();
        expect(props.handleChange).toHaveBeenCalledWith('15');
    });

    it('should render Input correctly without hint when hint is undefined in props', () => {
        const updatedProps = {
            ...props,
            hint: undefined
        };
        const { queryByText } = render(<Input {...updatedProps} />);

        expect(queryByText(props.hint)).toBeFalsy();
    });
});
