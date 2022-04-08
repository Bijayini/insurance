import { fireEvent, getAllByTestId, render } from '@testing-library/react';
import { BuyFlow } from './buy-flow';
import { ProductIds } from '../../config';

describe('<BuyFlow />', () => {
    describe('For Developer Insurance', () => {
        const props = {
            productId: ProductIds.devIns
        };

        it('should render BuyFlow without throwing error', () => {
            const { container, getByText } = render(<BuyFlow {...props} />);

            expect(() => container).not.toThrow();
            expect(getByText('Email:')).toBeInTheDocument();
        });

        it('should go ahead with flow without any error', () => {
            const { getByText, getByTestId } = render(<BuyFlow {...props} />);

            fireEvent.change(getByTestId('input'), {
                target: { value: 'sdf@sdf.com' }
            });
            fireEvent.click(getByText('Next'));

            expect(getByText('Age:')).toBeInTheDocument();

            fireEvent.change(getByTestId('input'), {
                target: { value: '20' }
            });
            fireEvent.click(getByText('Next'));

            expect(getByText('Age: 20')).toBeInTheDocument();
        });
    });

    describe('For Designer Insurance', () => {
        const props = {
            productId: ProductIds.designIns
        };

        it('should render BuyFlow without throwing error', () => {
            const { container, getByText } = render(<BuyFlow {...props} />);

            expect(() => container).not.toThrow();
            expect(getByText('First Name:')).toBeInTheDocument();
        });

        it('should go ahead with flow without any error', () => {
            const { getByText, getByTestId, getAllByTestId } = render(
                <BuyFlow {...props} />
            );

            fireEvent.change(getAllByTestId('input')[0], {
                target: { value: 'Some' }
            });
            fireEvent.change(getAllByTestId('input')[1], {
                target: { value: 'Name' }
            });
            fireEvent.click(getByText('Next'));

            fireEvent.change(getByTestId('input'), {
                target: { value: 'sdf@sdf.com' }
            });
            fireEvent.click(getByText('Next'));

            expect(getByText('Age:')).toBeInTheDocument();

            fireEvent.change(getByTestId('input'), {
                target: { value: '20' }
            });
            fireEvent.click(getByText('Next'));

            expect(getByText('Age: 20')).toBeInTheDocument();
            expect(getByText('Name: Some Name')).toBeInTheDocument();
        });
    });
});
