import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Toolbar, AppBar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = ({ sendData = [] }) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(na => !na);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#bbdefb' }}>
        <Toolbar disableGutters>
          <div id='navdiv' className='d-flex justify-content-between w-100 mx-3'>
            {/* Logo */}
            <div>
              <h1 id='logo'>
                <Link component={RouterLink} to="/" color="inherit">Logo</Link>
              </h1>
            </div>

            {/* Hamburger for small screens */}
            <div className='d-lg-none'>
              <Link onClick={toggleNav}>
                <FontAwesomeIcon icon={faBarsStaggered} color='#0000ff' />
              </Link>
            </div>

            {/* Nav for large screens */}
            <div className='d-none d-lg-inline-block bar'>
              <div id='linkdiv'>
                <ul id='navlinks'>
                  <li className='links'><Link component={RouterLink} to="/" color="inherit" className='othernavanchor'>Home</Link></li>
                  {sendData.map((link, index) => (
                    <li key={index} className='links'>
                      <Link component={RouterLink} to={link.path} className='navanchor'>{link.label}</Link>
                    </li>
                  ))}
                  <li className='links'><Link component={RouterLink} to="/user" color="inherit" className='othernavanchor'>User</Link></li>
                  <li className='links'><Link component={RouterLink} to="/admin" color="inherit" className='othernavanchor'>Admin</Link></li>
                  <li className='links'><Link component={RouterLink} to="/manager" color="inherit" className='othernavanchor'>Manager</Link></li>
                </ul>
              </div>
            </div>

            <div className='d-none d-lg-inline-block bar'>
              <Link component={RouterLink} to="/logout" color="inherit" className='othernavanchor m-0 text-danger'>Logout</Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      {showNav && (
        <div className='d-lg-none bg-light px-4 pt-2 pb-3 mt-5'>
          <ul className='list-unstyled pt-4 mb-0'>
            <li><Link component={RouterLink} to="/" className='d-block py-1 navanchor'>Home</Link></li>
            {sendData.map((link, index) => (
              <li key={index}>
                <Link component={RouterLink} to={link.path} className='d-block py-1 navanchor'>{link.label}</Link>
              </li>
            ))}
            <li><Link component={RouterLink} to="/user" className='d-block py-1 navanchor'>User</Link></li>
            <li><Link component={RouterLink} to="/admin" className='d-block py-1 navanchor'>Admin</Link></li>
            <li><Link component={RouterLink} to="/manager" className='d-block py-1 navanchor'>Manager</Link></li>
            <li><Link component={RouterLink} to="/logout" className='d-block py-1 text-danger'>Logout</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
