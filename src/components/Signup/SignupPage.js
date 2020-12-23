import React from 'react';
import { Link, HashRouter } from 'react-router-dom';
import { TextField, Button, Container, FormHelperText, CardHeader } from '@material-ui/core';

const SignupPage = ({ handleFirstName, handleLastName, handlePassword, handleEmail, handleSubmit, errors }) => {

    return (
        <Container maxWidth="sm">
            <CardHeader title="Signup Form" subheader="fill detail in below form to Signup"></CardHeader>
            <form data-testid="form" noValidate onSubmit={handleSubmit}>
                <TextField
                    data-testid="firstName"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    autoComplete="firstName"
                    autoFocus
                    onChange={handleFirstName}
                />
                <FormHelperText data-testid="firstName-error-text" id="my-helper-text" style={{ color: 'red' }}>{errors ? errors.firstNameError : ""}</FormHelperText>
                <TextField
                    data-testid="lastName"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lastName"

                    onChange={handleLastName}
                />
                <FormHelperText data-testid="lastName-error-text" id="my-helper-text" style={{ color: 'red' }}>{errors ? errors.lastNameError : ""}</FormHelperText>
                <TextField
                    data-testid="email"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"

                    onChange={handleEmail}
                />
                <FormHelperText data-testid="email-error-text" id="my-helper-text" style={{ color: 'red' }}>{errors ? errors.emailError : ""}</FormHelperText>
                <TextField
                    data-testid="password"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handlePassword}

                />
                <FormHelperText data-testid="password-error-text" id="my-helper-text" style={{ color: 'red' }}>{errors ? errors.passwordError : ""}</FormHelperText>
                <FormHelperText data-testid="general-error-text" id="my-helper-text" style={{ color: 'red' }}>{errors ? errors.error : ""}</FormHelperText>

                Existing User? <HashRouter><Link to="/"> Click here to login.</Link></HashRouter>
                <Button
                    data-testid="submitButton"
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    margin="standard"
                >
                    Sign up
                </Button>
            </form>
        </Container>
    );
}

export default SignupPage;
