import './topbar.css'
import { Link } from 'react-router-dom'

function TopBar() {
    const user =false
    return (
        <div className="top">
           <div className="top-left">
           <i class="top-icon fab fa-facebook-square"></i>
           <i class="top-icon fab fa-instagram"></i>
           <i class="top-icon fab fa-twitter"></i>
           <i class="top-icon fab fa-telegram"></i>
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
               <li className="top-list-item">
                   {user && "LOGOUT"}
               </li>
           </div>
           <div className="top-right">
               {
                   user ? (
                    <img className="top-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgziImhddrjDfzSKLHkUKY0lI1FzuKrHvvnA&usqp=CAU" alt="Dovar" />
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

export default TopBar
