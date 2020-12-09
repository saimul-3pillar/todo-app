import { TextField, Button, Container, FormHelperText, CardHeader } from '@material-ui/core'
import { Link, HashRouter as Router } from 'react-router-dom';
import React from 'react';

const LoginPage = ({ handlePassword, handleSubmit, handleUsername, errors }) => {
    return (
        <Container maxWidth="sm">
            <CardHeader title="Login Form" subheader="fill detail in below form to login"></CardHeader>
            <form noValidate onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={handleUsername}
                />
                <FormHelperText id="my-helper-text" style={{ color: 'red' }}>{errors ? errors.usernameerror : ''}</FormHelperText>
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
                <FormHelperText id="my-helper-text" style={{ color: 'red' }}>{errors ? errors.passworderror : ''}</FormHelperText>
                <FormHelperText id="my-helper-text" style={{ color: 'red' }}>{errors ? errors.error : ''}</FormHelperText>


                New user?<Router><Link to="/signup">Click here to signup</Link></Router>
                <Button
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
