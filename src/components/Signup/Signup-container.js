import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SignupPage from './SignupPage';

const Signup = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setError] = useState({ firstnameerror: "", lastname: "", usernameerror: "", passworderror: "", error: "" });
    const history = useHistory();
    let isValid = false;

    const handleFirstname = (evt) => {
        if (!evt.target.value) {
            isValid = false;
            setError({ ...errors, firstnameerror: "First name can't be empty" });
        } else {
            isValid = true;
            setError({ ...errors, firstnameerror: "" });
        }
        setFirstname(evt.target.value);
    }
    const handleLastname = (evt) => {
        if (!evt.target.value) {
            isValid = false;
            setError({ ...errors, lastnameerror: "Last name can't be empty" });
        } else {
            isValid = true;
            setError({ ...errors, lastnameerror: "" });
        }
        setLastname(evt.target.value);
    }
    const handleUsername = (evt) => {
        if (!evt.target.value) {
            isValid = false;
            setError({ ...errors, usernameerror: "User name can't be empty" });
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
        if (!firstname) {
            isValid = false;
            er = { ...er, firstnameerror: "First name can't be empty" };
        } if (!lastname) {
            isValid = false;
            er = { ...er, lastnameerror: "Last name can't be empty" };
        }
        if (!username) {
            isValid = false;
            er = { ...er, usernameerror: "User name can't be empty" };
        }
        if (!password) {
            isValid = false;
            er = { ...er, passworderror: "Password can't be empty" };
        }

        if (!isValid) {
            setError({ ...errors, ...er });
        } else {
            fetch('http://localhost:4000/users/register', {
                method: "POST", headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName: firstname, lastName: lastname, username: username, password: password })
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    if (data) {
                        console.log(data);
                        if (data.message) {
                            setError({ ...errors, error: data.message });

                        } else {
                            setError({ ...errors, error: "" });

                            history.push('/dashboard');
                        }

                    }
                })
                .catch(error => alert("Internal server error"));

        }
    }
    return (
        <SignupPage handleFirstname={handleFirstname} handleLastname={handleLastname} handlePassword={handlePassword} handleUsername={handleUsername} handleSubmit={handleSubmit} errors={errors} />
    )
}
export default Signup;