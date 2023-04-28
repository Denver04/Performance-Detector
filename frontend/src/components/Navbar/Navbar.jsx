import panda from '../../images/panda-logo.png'
import "./navbar.css"
import {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='image'>
            <img src={panda} alt="logo" />
        </div>
        <div className='tags'>
                <NavLink className="navlink" to="/">Home</NavLink>
                <NavLink className="navlink" to="/rules">Instructions</NavLink>
        </div>
    </nav>
  )
}

export default Navbar