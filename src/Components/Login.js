// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        console.log(email, password);
        const result = await fetch('http://localhost:6062/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await result.json();
        console.warn(data);

        if (data.name) {
            localStorage.setItem('user', JSON.stringify(data));
            navigate('/');
        } else {
            alert('Incorrect email or password');
        }
    };

    // Function to clear user data from localStorage
    const clearUserData = () => {
        localStorage.removeItem('user');
    };

    // Clear user data when component mounts
    // This ensures that old user data is cleared when a new user logs in
    clearUserData();

    return (
        <div>
            <form className='signup'>
                <h1>Login</h1>
                <input type='text' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}></input>
                <br />
                <input type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}></input>
                <br />
                <button onClick={handleLogin} className='addbutton' type='button'>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
