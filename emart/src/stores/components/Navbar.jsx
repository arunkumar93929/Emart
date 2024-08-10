import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='navsection'>
        <div className='title'>
            <h2>E -mart</h2>
        </div>
        <div className="serch">
            <input type="text" placeholder='search' />
        </div>
        <div className="user">
            <div className="user-details">
            Sign/sinup
            </div> 
            <div className="cart">
                cart
            </div>
        </div>
    </div>
    <div className="submenu">
        <ul>
        <Link to='/mobiles'>
        <li>Mobiles</li>
        </Link>
        <Link to='/computers'>
        <li>computers</li>
        </Link>
        <Link to={'/watch'}>
        <li>watches</li>
        </Link>    
        <Link to='/men'>
        <li>men</li>
        </Link>
        <Link to='/woman'>
        <li>woman</li>
        </Link>
        <Link to='/Furniture'>
        <li>furniture </li>
        </Link>
        <Link to='/ac'>
        <li>ac</li>
        </Link>
        <Link to={'/Kitchen'}>
        <li>kitchen</li>
        </Link>
        </ul>
    </div>
    </>
  )
}

export default Navbar