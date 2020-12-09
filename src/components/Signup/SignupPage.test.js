import { cleanup, render } from '@testing-library/react';
import SignupPage from './SignupPage';

afterEach(cleanup);

test('it renders proprly', () => {
    render(<SignupPage />);
});


