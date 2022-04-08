import { render } from '@testing-library/react';
import { Button } from './button';

describe('<Button/>', () => {
    it('should render Button correctly', () => {
        const props = {
            label: 'label',
            handleClick: jest.fn(),
            disabled: true
        };
        const component = render(<Button {...props} />);
        expect(() => component).not.toThrow();
        expect(component.getByText(props.label)).toBeVisible();
    });
});
