import { cleanup, render } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('it renders proprly', () => {
    render(<App />);
});
