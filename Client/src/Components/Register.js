import React, { useState } from 'react'
import Footer from './Footer';
import Header from './Header';
import axios from "axios";

function Register() {
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
        }

        let body = {
            email: Email,
            name: Name,
            password: Password
        }
        console.log(body)

        axios.post('/api/users/register', body).then(response => {
            if (response.data.success) {
                window.location.href = "/login";
            }
            console.log(response.data);
        })
    
    }

    return (
        <div className='LandingPage'>
            <Header />
            <div>
                <form style={{ display: 'flex', flexDirection: 'column' }}
                    onSubmit={onSubmitHandler}>
                    <label>Email</label>
                    <input type="email" value={Email} onChange={onEmailHandler} />
                    <label>Name</label>
                    <input type="text" value={Name} onChange={onNameHandler} />
                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler} />
                    <label>Confirm Password</label>
                    <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
            <Footer />
        </div> 
        
    )
}

export default Register