import { cleanup, render } from '@testing-library/react';
import LoginPage from './LoginPage';

afterEach(cleanup);

test('it renders proprly', () => {
    render(<LoginPage />);
});
