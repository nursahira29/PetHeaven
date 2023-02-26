import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}> Pet-Heaven
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/adoption' className='nav-links' onClick={closeMobileMenu}
              >Adoption
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/release' className='nav-links' onClick={closeMobileMenu}
              >
                Rehoming
              </Link>
            </li>
            <li className='nav-item'>
                <Link to='/adoptiongallery' className='nav-links' onClick={closeMobileMenu}
              >
                Adoption Gallery
              </Link>
            </li>
        
          </ul>
          <li className='nav-links'>
          <Link to="/signup" className="btn--outline">Sign up</Link>
          </li>
        </div>
      </nav>
    </>
  );
}

export default Navbar;