import './login.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';
import { useRef } from 'react';

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();  
    const {dispatch, isFetching} = useContext(Context)

    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch({type:"LOGIN_START"});
      try {
          const res = await axios.post("/auth/login",{
              username:userRef.current.value,
              password: passwordRef.current.value,
          });
          dispatch({type:"LOGIN_SUCCESS", payload:res.data});
      } catch (error) {
          dispatch({type:"LOGIN_FAILURE",})
      }
    };

    return (
        <div className="login">
            <span className="login-title">
                Login
            </span>
        <form  className="login-form" onSubmit={handleSubmit}>
            <label >Username</label>
            <input type="text" className="login-input" placeholder="Enter your username.."  ref={userRef}/>
            <label >Password</label>
            <input type="password" className="login-input" placeholder="Enter your password.." ref={passwordRef} />
            <button className="login-button" type="submit" disabled={isFetching}>Login</button>
        </form>

        <button className="login-register-button">
            <Link className="link" to="/register">REGISTER</Link>
        </button>
            
        </div>
    )
}


