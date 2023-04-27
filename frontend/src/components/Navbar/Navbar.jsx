import panda from '../../images/panda-logo.png'
import "./navbar.css"

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='image'>
            <img src={panda} alt="logo" />
        </div>
        <div className='tags'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#input">Inputs</a></li>
                <li><a href="#result">Result</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar