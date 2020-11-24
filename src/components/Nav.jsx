import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className='navbar'/*className="navbar navbar-dark bg-dark"*/>
      <Link to='/'>
        <span className="brand">
          Weather App
        </span>
      </Link>
      <Link to='/about'>
      <span className="text">About</span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
      </nav>
  );
};

export default Nav;
