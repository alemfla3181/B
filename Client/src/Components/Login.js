import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import axios from "axios";
//  여기 분기점 해봅시당

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
        console.log(body)

        axios.post('/api/users/login', body).then(response => {
            if (response.data.loginSuccess) {
                window.location.href = "/";
            }
            console.log(Response.data);
        })
    }

    return (
        <div>
            <Header />
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
            }}>
                <form style={{ display: 'flex', flexDirection: 'column' }}
                    onSubmit={onSubmitHandler}>
                    <label>Email</label>
                    <input type="email" value={Email} onChange={onEmailHandler} />
                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler} />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login