import { render } from '@testing-library/react';
import { Home } from './home';
import { Products } from '../../config';

describe('<Home />', () => {
    it('should render without throwing error', () => {
        expect(() => render(<Home />)).not.toThrow();
    });

    it('should render link to designer and developer insurance', () => {
        const { getByText } = render(<Home />);

        expect(getByText(Products.design_ins.name)).toBeInTheDocument();
        expect(getByText(Products.dev_ins.name)).toBeInTheDocument();
    });
});
