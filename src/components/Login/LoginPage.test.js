import { cleanup, fireEvent, render } from '@testing-library/react';
import LoginPage from './LoginPage';


afterEach(cleanup);
describe('Singup test', () => {
    it('should renders proprly', () => {
        render(<LoginPage />);
    });

    it("should render each element", () => {
        const { getByTestId } = render(<LoginPage />);
        expect(getByTestId('password')).toBeDefined();
        expect(getByTestId('email')).toBeDefined();
        expect(getByTestId('password-error-text')).toBeDefined();
        expect(getByTestId('email-error-text')).toBeDefined();
        expect(getByTestId('submitButton')).toBeDefined();
    })
    it("should call submit function on submit", () => {
        const mockSubmit = jest.fn();
        const { getByTestId } = render(<LoginPage handleSubmit={mockSubmit} />);
        fireEvent.submit(getByTestId("submitButton"));
        expect(mockSubmit).toHaveBeenCalled();
        expect(mockSubmit).toHaveBeenCalledTimes(1);
    })
    it("should display error on blank submit", () => {
        const { getByTestId } = render(<LoginPage errors={{ emailError: "Email can't be empty", passwordError: "Password can't be empty" }} />);
        fireEvent.submit(getByTestId("submitButton"));
        expect(getByTestId("password-error-text")).toHaveTextContent("Password can't be empty");
        expect(getByTestId("email-error-text")).toHaveTextContent("Email can't be empty");
    })
    // it("should call change function on change", () => {
    //     const mockemail = jest.fn();
    //     const mockPassword = jest.fn();

    //     const { getByTestId ,get} = render(<LoginPage handleemail={mockemail} handlePassword={mockPassword} />);
    //     fireEvent.change(getByTestId("email"));
    //     expect(mockemail).toHaveBeenCalled();
    //     expect(mockemail).toHaveBeenCalledTimes(1);
    //     fireEvent.change(getByTestId("password"));
    //     expect(mockPassword).toHaveBeenCalled();
    //     expect(mockPassword).toHaveBeenCalledTimes(1);
    // })
})


