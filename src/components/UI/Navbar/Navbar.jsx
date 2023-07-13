import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import cl from './Navbar.module.css'
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }

  return (
  <nav className={cl.navbar}>
    <MyButton onClick={logout}>
      Log out
    </MyButton>
    <div className={cl.navbar__links}>
        <Link  className={cl.navbar__link} to="/about">Abous US</Link>
        <Link  className={cl.navbar__link} to="/posts">Posts</Link>
    </div>
  </nav>
  );
}

export default Navbar;
