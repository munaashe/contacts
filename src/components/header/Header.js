import React, {useState} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


  return (
    <>
       <nav className='navbar'>
           <div className='navbar-container'>
               <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                   CONTACTS
               </Link>
               <div className='menu-icon' onClick={handleClick}>
                   <i className={click? 'fas fa-times'  : 'fas fa-bars'} />
               </div>
               <ul className={click? 'nav-menu active' : 'nav-menu'} >
                   <li className='nav-item' onClick={closeMobileMenu}>
                       <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                           Contacts List
                       </Link>
                   </li>
                   <li className='nav-item' onClick={closeMobileMenu}>
                       <Link to='/add' className='nav-links' onClick={closeMobileMenu}>
                           Add Contact
                       </Link>
                   </li>
               </ul>
           </div>
       </nav>
    </>
  )
}

export default Header