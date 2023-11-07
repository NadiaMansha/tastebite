import React,{useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useSearchParams ,useNavigate} from 'react-router-dom';

const Navbar = () => {
  const [showLinks, setShowLinks] =useState(false);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate=useNavigate()
  return (
    <div className="tastebite_navbar">
      <div className="tastebite_navbar_left">
        <img
          className="tastebite_navbar_logo"
          src={logo}
          alt="Tastebite Logo"
        />
      </div>
     
      <div className="tastebite_navbar_center">
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/recipes">Recipes</Link></li>
    <li> <Link to="/categories">Categories</Link></li>
    </ul>
      </div>
      <div className="tastebite_navbar_right">
        <input
          className="tastebite_navbar_search"
          type="text"
          placeholder="Search for restaurants, cuisines..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button  
        onClick={() =>{setSearchParams({ search })
        setSearch('')
        navigate('/search?search='+search)

      }
      }
        className="tastebite_navbar_button">Search</button>

      </div>
      <div className="tastebite_navbar_mobile">{
        showLinks ? (
          <div className='tastebite_navbar_mobile_links'>

          <AiFillCloseCircle 
          className='navbar__hamburger__icon_close'
           onClick={()=> setShowLinks(!showLinks)}/>
          <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/recipes">Recipes</Link></li>
    <li> <Link to="/categories">Categories</Link></li>
    </ul>
          </div>
        ) : (
          <GiHamburgerMenu 
          className='menu-icon'
          onClick={()=> setShowLinks(!showLinks)}/>
        )
}
      </div>
    </div>
  )
}

export default Navbar