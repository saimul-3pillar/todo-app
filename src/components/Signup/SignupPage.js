import React from 'react';
import { Link, HashRouter as Router } from 'react-router-dom';
import { TextField, Button, Container, FormHelperText, CardHeader } from '@material-ui/core';

const SignupPage = ({ handleFirstname, handleLastname, handlePassword, handleUsername, handleSubmit, errors }) => {

    return (
        <Container maxWidth="sm">
            <CardHeader title="Signup Form" subheader="fill detail in below form to Signup"></CardHeader>
            <form noValidate onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstname"
                    label="First Name"
                    name="firstname"
                    autoComplete="firstname"
                    autoFocus
                    onChange={handleFirstname}
                />
                <FormHelperText id="my-helper-text" style={{ color: 'red' }}>{errors ? errors.firstnameerror : ""}</FormHelperText>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    autoComplete="lastname"

                    onChange={handleLastname}
                />
                <FormHelperText id="my-helper-text" style={{ color: 'red' }}>{errors ? errors.lastnameerror : ""}</FormHelperText>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    name="username"
                    autoComplete="username"

                    onChange={handleUsername}
                />
                <FormHelperText id="my-helper-text" style={{ color: 'red' }}>{errors ? errors.usernameerror : ""}</FormHelperText>
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

                />
                <FormHelperText id="my-helper-text" style={{ color: 'red' }}>{errors ? errors.passworderror : ""}</FormHelperText>
                <FormHelperText id="my-helper-text" style={{ color: 'red' }}>{errors ? errors.error : ""}</FormHelperText>

                Existing User? <Router><Link to="/"> Click here to login.</Link></Router>
                <Button
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
