import React from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const History = useHistory();

  return (
    <div className="navbar__container" >
      <img className="navbar__img--logo" src="/images/nav-logo-2x.png" alt=""/>
      <div className="navbar__option" >Home</div>
      <div className="navbar__option" >Locations</div>
      <div className="navbar__option active" >Products</div>
      <div className="navbar__option" >Team Members</div>

      <div onClick={() => History.push('/page')} className="navbar__section--user" >
        John Doe
        <img style={{marginLeft: '15px'}} src= "/images/user-2x.png" alt=""/>
      </div>

    </div>
  );
};

export default Navbar;