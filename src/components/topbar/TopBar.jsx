import './topbar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { Logout } from '../../context/Actions';
import logo from '../../images/logo.png'


export default function TopBar() {
    const {user,dispatch} = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
dispatch({type:"LOGOUT"});
    };
    return (
        <div className="top">
           <div className="top-left">
               <img className="dovar-logo"  src={logo} alt="" />
          
               </div> 
           <div className="top-center">
               <li className="top-list-item">
                   <Link className="link" to="/">HOME</Link>
               </li>
               <li className="top-list-item">
               <Link className="link" to="/" >ABOUT</Link>
               </li>
               <li className="top-list-item">
                   <Link className="link" to="/" >CONTACT</Link>
               </li>
               <li className="top-list-item">
               <Link className="link" to="/write" >WRITE</Link>
               </li>
               <li className="top-list-item" onClick={handleLogout}>
                   {user && "LOGOUT"}
               </li>
           </div>
           <div className="top-right">
               {
                   user ? (
                       <Link to="/settings">
                    <img className="top-img" src={PF+user.profilePic} alt="" />
                    </Link>
                   ):(
                       <ul className="top-list">
                           <li className="top-list-item"><Link className="link" to="/login" >LOGIN</Link></li>
                    <li className="top-list-item">  <Link className="link" to="/register" >REGISTER</Link></li>
                  
                   </ul>
                   )}
               
               <i class="top-search-icon fas fa-search"></i>
           </div>
        </div>
    );
}


