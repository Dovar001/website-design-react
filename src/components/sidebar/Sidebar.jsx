import axios from 'axios';
import { useEffect, useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';
import myImg from '../../images/dovar.jpeg'



export default function Sidebar() {
    const [cats,setCats] = useState([]);

     useEffect(()=>{
         const getCats = async ()=>
         {
             const res = await axios.get("/categories")
             setCats(res.data)
         }
         getCats();
     },[])
    return (
        <div className="sidebar">
          <div className="sidebar-item">
              
              <span className="sidebar-title">About me</span>

              <img src={myImg} alt="" className="my-img" />
              
              <p className="about-me-p">Name: <strong>Dovar</strong> <br /> Age:<strong>20</strong> <br />University: <strong>Moscowe State University</strong>  <br /> Email:<strong>dovarabdulhanonov@gmail.com</strong> <br /> Skills:<strong>Go,Java-Script,C++ </strong> </p>
          </div>
          <div className="sidebar-item">
              <span className="sidebar-title">CATEGORIES</span>
              <ul className="sidebar-list">

                  {cats.map((c)=>(
                      <Link to={`/?cat=${c.name }`} className="link">
                          <li className="sidebar-list-item">{c.name}</li>
                          </Link>
                  ))}
              
              
              </ul>
          </div>
          <div className="sidebar-item">
              <span className="sidebar-title">FOLLOW ME</span>
              <div className="sidebar-social">
          <a href="https://www.facebook.com/dovar.abdulhanonov"><i class="sidebar-icon fab fa-facebook-square"></i></a> 
          <a href="https://www.instagram.com/Dovar_001"> <i class="sidebar-icon fab fa-instagram-square" ></i></a>
          <a href="https://www.linkedin.com/in/dovar-abdulhanonov-4b30b7210?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5v7XO2ATRTWfRnTZRKn%2B5w%3D%3D"><i class="sidebar-icon fab fa-linkedin"></i></a>
          <a href="https://t.me/Dovar_001"><i class="sidebar-icon fab fa-telegram"></i></a> 
          <a href="https://github.com/Dovar001"> <i class=" sidebar-icon fab fa-github-square" ></i></a>
           
           </div> 
          </div>
        </div>
    ) 
}


