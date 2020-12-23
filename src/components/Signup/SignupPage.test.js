import { cleanup, fireEvent, render } from '@testing-library/react';
import SignupPage from './SignupPage';

afterEach(cleanup);
describe('Singup test', () => {
    it('should renders proprly', () => {
        render(<SignupPage />);
    });

    it("should render each element", () => {
        const { getByTestId } = render(<SignupPage />);
        expect(getByTestId('firstName')).toBeDefined();
        expect(getByTestId('lastName')).toBeDefined();
        expect(getByTestId('password')).toBeDefined();
        expect(getByTestId('email')).toBeDefined();
        expect(getByTestId('firstName-error-text')).toBeDefined();
        expect(getByTestId('lastName-error-text')).toBeDefined();
        expect(getByTestId('password-error-text')).toBeDefined();
        expect(getByTestId('email-error-text')).toBeDefined();
        expect(getByTestId('submitButton')).toBeDefined();
    })
    it("should call submit function on submit", () => {
        const mockSubmit = jest.fn();
        const { getByTestId } = render(<SignupPage handleSubmit={mockSubmit} />);
        fireEvent.submit(getByTestId("submitButton"));
        expect(mockSubmit).toHaveBeenCalled();
        expect(mockSubmit).toHaveBeenCalledTimes(1);
    })
    it("should display error on blank submit", () => {
        const mockSubmit = jest.fn();
        const { getByTestId } = render(<SignupPage handleSubmit={mockSubmit} errors={{ firstNameError: "First name can't be empty", lastNameError: "Last name can't be empty", emailError: "Email can't be empty", passwordError: "Password can't be empty" }} />);
        fireEvent.submit(getByTestId("submitButton"));
        expect(getByTestId("password-error-text")).toHaveTextContent("Password can't be empty");
        expect(getByTestId("firstName-error-text")).toHaveTextContent("First name can't be empty");
        expect(getByTestId("lastName-error-text")).toHaveTextContent("Last name can't be empty");
        expect(getByTestId("email-error-text")).toHaveTextContent("Email can't be empty");
    })
})


