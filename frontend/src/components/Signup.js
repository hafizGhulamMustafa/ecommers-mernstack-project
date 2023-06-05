import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import validator from 'validator';


const SignUp = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const [response, setResponse] = useState("");

    const validateForm = () => {
        let validationErrors = {};
    
        // Validate email
        if (validator.isEmpty(email)) {
          validationErrors.email = 'Email is required';
        } else if (!validator.isEmail(email)) {
          validationErrors.email = 'Invalid email format';
        }
    
        // Validate password
        if (validator.isEmpty(password)) {
          validationErrors.password = 'Password is required';
        } else if (!validator.isLength(password, { min: 6 })) {
          validationErrors.password = 'Password must be at least 6 characters long';
        }
    
    
        setErrors(validationErrors);
    
        return Object.keys(validationErrors).length === 0;
      };
      const collectData =(setState, e) =>{
        setState( e.target.value);
    }
  
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) { 
            const getDataHandler = async()=>{
                const api_url = "http://127.0.0.1:3337/admin/login";
                const body ={           
                    email:email,
                    password:password,   
                }
                const api_response = await axios.post(api_url, body).then((response)=>{
                    setResponse(response.data)
                })
            
        }
      };
   

    }
    return(
    <div className='register'>
        <h1>Register</h1>
        <input type="text" className="inputBox" placeholder='Enter your Name' value={name} onChange={(e)=>{collectData(setName,e)}}/>
        <input type="email" className="inputBox" placeholder='Enter your Email' value={email} onChange={(e)=>{collectData(setEmail, e)}} />
        <input type="password" className="inputBox" placeholder='Enter your Password' value={password} onChange={(e)=>{collectData(setPassword, e)}} />
        <button type="button" className="signupbtn" onClick={getDataHandler}>Sign up</button>
    </div>
    )
}

export default SignUp; 