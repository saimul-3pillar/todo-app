import { cleanup, render } from '@testing-library/react';
import DashboardPage from './DashboardPage';

afterEach(cleanup);

test('it renders proprly', () => {
    render(<DashboardPage />);
});