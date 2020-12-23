import { cleanup, fireEvent, render } from '@testing-library/react';
import DashboardPage from './DashboardPage';

afterEach(cleanup);
describe("Dashboard testing", () => {
    it('should renders proprly', () => {
        render(<DashboardPage />);
    });
    it("renders button and click event", () => {
        // const fn = jest.mock();
        const { getByTestId } = render(<DashboardPage />);
        expect(getByTestId('btn')).toBeDefined();
        // fireEvent.click(getByTestId("btn"));
        // expect(fn).toBeCalled();
    })
});