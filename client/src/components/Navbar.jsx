import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../img/logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=mother">
            <h6>MOTHER</h6>
            </Link>
            <Link className="link" to="/?cat=child">
            <h6>CHILD</h6>
            </Link>
            <Link className="link" to="/?cat=nutrition">
            <h6>NUTRITION</h6>
            </Link>
            <span>John</span>
            <span>Logout</span>
            <span className="write">
              <Link className="link" to="/write">Write</Link>
            </span>
            
        </div>
      </div>
      </div>
  )
}

export default Navbar