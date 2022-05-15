import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import axios from "axios";


function Login(props) {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        }
        // console.log(body)

        axios.post('/api/users/login', body).then(response => {
            if (response.data.loginSuccess) {
                sessionStorage.setItem('user_Email', Email);
                window.location.href = "/";
            } else{
                alert(response.data.message);
            }
            console.log(Response.data);
        })
    }

    return (
        <div className='LandingPage'>
            <Header />
                <form onSubmit={onSubmitHandler}>
                    <label>Email</label>
                    <input type="email" value={Email} onChange={onEmailHandler} />
                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler} />
                    <br />
                    <button type="submit">Login</button>
                </form>

            <Footer />
        </div>
    )
}

export default Login