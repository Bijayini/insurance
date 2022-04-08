import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('should render App without any error', () => {
    expect(() => render(<App />)).not.toThrow();
});
