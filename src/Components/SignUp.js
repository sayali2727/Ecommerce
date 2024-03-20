// SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const collectData = async () => {   
        let result = await fetch("http://localhost:6062/register", {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        result = await result.json()
        if (result.name) {
   
            localStorage.setItem("user", JSON.stringify(result)); 
        
            navigate('/add');
        } else {
            alert("Please enter all details.");
        }
    };

    return (
        <div>
            <form className='signup'>
                <h1>Register</h1>
                <input type='text' placeholder='Enter Name' onChange={(e) => setName(e.target.value)}></input><br />
                <input type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}></input><br />
                <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} ></input><br />
                <button onClick={collectData} className='addbutton' type="button">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
