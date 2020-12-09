import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginPage from './LoginPage';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setError] = useState({ usernameerror: "", passworderror: "", error: "" });
    let isValid = false;
    const history = useHistory();

    const handleUsername = (evt) => {
        if (!evt.target.value) {
            isValid = false;
            setError({ ...errors, usernameerror: "Username can't be empty" });
        } else {
            isValid = true;
            setError({ ...errors, usernameerror: "" });
        }
        setUsername(evt.target.value);
    }
    const handlePassword = (evt) => {
        if (!evt.target.value) {
            isValid = false;
            setError({ ...errors, passworderror: "Password can't be empty" });
        } else {
            isValid = true;
            setError({ ...errors, passworderror: "" });
        }
        setPassword(evt.target.value);
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        let er = {};
        if (!username) {
            isValid = false;
            er = { ...er, usernameerror: "Username can't be empty " }
        }
        if (!password) {
            isValid = false;
            er = { ...er, passworderror: "Password can't be empty" }
        }
        if (!isValid) {
            setError({ ...errors, ...er })
        }
        else {
            fetch('http://localhost:4000/users/authenticate', {
                method: "POST", headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username, password: password })
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then(data => {
                    if (data) {
                        if (data.message) {
                            setError({ ...errors, error: data.message });

                        } else {
                            history.push('/dashboard');
                        }

                    }
                })
                .catch(error => alert("Internal server error"));

        }
    }

    return (
        <LoginPage handlePassword={handlePassword} handleUsername={handleUsername} handleSubmit={handleSubmit} errors={errors} />
    );

}
export default Login;