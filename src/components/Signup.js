import React from 'react';
import { useState } from 'react';

const SignUp = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const collectData =() =>{
        console.log(name, email, password);
    }

    return(
    <div className='register'>
        <h1>Register</h1>
        <input type="text" className="inputBox" placeholder='Enter your Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input type="email" className="inputBox" placeholder='Enter your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" className="inputBox" placeholder='Enter your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <button type="button" className="signupbtn" onClick={collectData}>Sign up</button>
    </div>
    )
}

export default SignUp;