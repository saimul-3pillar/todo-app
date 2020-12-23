import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginPage from './LoginPage';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setError] = useState({ emailError: "", passwordError: "", error: "" });
    let isValid = true;
    const history = useHistory();

    const handleEmail = (evt) => {
        if (!evt.target.value) {
            isValid = false;
            setError({ ...errors, emailError: "email can't be empty" });
        } else {
            isValid = true;
            setError({ ...errors, emailError: "" });
        }
        setEmail(evt.target.value);
    }
    const handlePassword = (evt) => {
        if (!evt.target.value) {
            isValid = false;
            setError({ ...errors, passwordError: "Password can't be empty" });
        } else {
            isValid = true;
            setError({ ...errors, passwordError: "" });
        }
        setPassword(evt.target.value);
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        let er = {};
        if (!email) {
            isValid = false;
            er = { ...er, emailError: "Email can't be empty " }
        }
        if (!password) {
            isValid = false;
            er = { ...er, passwordError: "Password can't be empty" }
        }
        if (!isValid) {
            setError({ ...errors, ...er })
        }
        else {
            fetch('http://localhost:4000/api/Users/login', {
                method: "POST", headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ email: email, password: password })
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then(data => {
                    console.log(data)
                    if (!data.error) {
                        if (data.message) {
                            setError({ ...errors, error: data.message });

                        } else {
                            history.push('/dashboard');
                        }

                    } else {
                        setError({ ...errors, error: data.error.message });
                    }

                })
                .catch(error => console.log());

        }
    }

    return (
        <LoginPage handlePassword={handlePassword} handleEmail={handleEmail} handleSubmit={handleSubmit} errors={errors} />
    );

}
export default Login;