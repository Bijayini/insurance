import { Input } from './input';
import { fireEvent, getByText, render } from '@testing-library/react';

describe('<Input/>', () => {
    const props = {
        name: 'age',
        label: 'Age',
        handleChange: jest.fn(),
        hint: '>18',
        testId: 'some-input'
    };

    it('should render Input correctly with hint', () => {
        const { getByTestId, getByText } = render(<Input {...props} />);
        const input = getByTestId('some-input');

        fireEvent.change(input, { target: { value: 15 } });

        expect(getByText(props.hint)).toBeVisible();
        expect(props.handleChange).toHaveBeenCalledWith('15');
    });

    it('should render Input correctly without hint when hint is undefined in props', () => {
        const updatedProps = {
            ...props,
            hint: undefined,
            testId: undefined
        };
        const { queryByText, getByTestId } = render(
            <Input {...updatedProps} />
        );

        expect(queryByText(props.hint)).toBeFalsy();
        expect(getByTestId('input')).toBeInTheDocument();
    });
});
