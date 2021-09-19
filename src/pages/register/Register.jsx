import './register.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function Register() {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState(false)
    
    

    const handleSubmit = async (e) =>{
       e.preventDefault();
       setError(false);
       try {
            const res = await axios.post("/auth/register",{
         username,email,password,
     });
     res.data && window.location.replace("/login");
       } catch (error) {
        setError(true)
       }
    
     
    
    }
    return (
        <div className="register">
            <span className="register-title">
                Register
            </span>
        <form  className="register-form" onSubmit={handleSubmit}>
            <label >Username</label>
            <input type="text" 
            className="register-input" 
            placeholder="Enter your username.." 
            onChange={e=>setUsername(e.target.value)}
            />
            <label >Email</label>
            <input type="text" 
            className="register-input" 
            placeholder="Enter your email.." 
            onChange={e=>setEmail(e.target.value)}
            />
            <label >Password</label>
            <input 
            type="password" 
            className="register-input" 
            placeholder="Enter your password.." 
            onChange={e=>setPassword(e.target.value)}
            />
            <button className="register-button">Register</button>
        </form>

        <button className="register-login-button">
            <Link className="link" to="/login">Login</Link>
        </button>
       {error && <span style={{color:"red",marginTop:"10px"}}>Something is wrong </span>} 
            
        </div>
    )
}


