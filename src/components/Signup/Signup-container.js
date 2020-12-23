import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SignupPage from './SignupPage';

const Signup = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setError] = useState({ firstNameError: "", lastNameError: "", emailError: "", passwordError: "", error: "" });
    const history = useHistory();
    let isValid = true;

    const handleFirstName = (evt) => {
        if (!evt.target.value) {
            isValid = false;
            setError({ ...errors, firstNameError: "First name can't be empty" });
        } else {
            isValid = true;

            setError({ ...errors, firstNameError: "" });

        }
        setFirstName(evt.target.value);
    }
    const handleLastName = (evt) => {
        if (!evt.target.value) {
            isValid = false;
            setError({ ...errors, lastNameError: "Last name can't be empty" });
        } else {
            isValid = true;

            setError({ ...errors, lastNameError: "" });

        }
        setLastName(evt.target.value);
    }
    const handleEmail = (evt) => {
        if (!evt.target.value) {
            isValid = false;
            setError({ ...errors, emailError: "Email can't be empty" });
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
        if (!firstName) {
            isValid = false;
            er = { ...er, firstNameError: "First name can't be empty" };
        } if (!lastName) {
            isValid = false;
            er = { ...er, lastNameError: "Last name can't be empty" };
        }
        if (!email) {
            isValid = false;
            er = { ...er, emailError: "Email can't be empty" };
        }
        if (!password) {
            isValid = false;
            er = { ...er, passwordError: "Password can't be empty" };
        }
        console.log(isValid)
        if (!isValid) {
            setError({ ...errors, ...er });
        } else {
            fetch('http://localhost:4000/api/Users', {
                method: "POST", headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, password: password })
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    if (!data.error) {
                        console.log(data);
                        if (data.message) {
                            setError({ ...errors, error: data.message });

                        } else {
                            setError({ ...errors, error: "" });

                            history.push('/dashboard');
                        }

                    } else {
                        setError({ ...errors, error: data.error.message});
                    }
                })
                .catch(error => alert("Internal server error"));

        }
    }
    return (
        <SignupPage handleFirstName={handleFirstName} handleLastName={handleLastName} handlePassword={handlePassword} handleEmail={handleEmail} handleSubmit={handleSubmit} errors={errors} />
    )
}
export default Signup;