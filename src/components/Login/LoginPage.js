import { TextField, Button, Container, FormHelperText, CardHeader } from '@material-ui/core'
import { Link, HashRouter } from 'react-router-dom';
import React from 'react';

const LoginPage = ({ handlePassword, handleSubmit, handleEmail, errors }) => {
    return (
        <Container maxWidth="sm">
            <CardHeader title="Login Form" subheader="fill detail in below form to login"></CardHeader>
            <form data-testid="form" noValidate onSubmit={handleSubmit}>
                <TextField
                InputProps={{"data-testid":"email"}}
                    // data-testid="email"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={handleEmail}
                />
                <FormHelperText data-testid="email-error-text" id="my-helper-text" style={{ color: 'red' }}>{errors ? errors.emailError : ''}</FormHelperText>
                <TextField
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
                    data-testid="password"

                />
                <FormHelperText data-testid="password-error-text" id="my-helper-text" style={{ color: 'red' }}>{errors ? errors.passwordError : ''}</FormHelperText>
                <FormHelperText id="my-helper-text" style={{ color: 'red' }}>{errors ? errors.error : ''}</FormHelperText>


                New user?<HashRouter><Link to="/signup">Click here to signup</Link></HashRouter>
                <Button
                    data-testid="submitButton"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    margin="standard"
                >
                    Sign In
                </Button>
            </form>
        </Container>
    );
}

export default LoginPage;
