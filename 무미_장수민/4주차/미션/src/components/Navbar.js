import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 1000;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 15px;

  &:hover {
    text-decoration: underline;
    font-size: 1.1em;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Nav>
      <NavLink to="/">UMC Movie</NavLink>
      <NavMenu>
        <button onClick={handleLoginLogout} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', marginLeft: '30px' }}>
          {isLoggedIn ? '로그아웃' : '로그인'}
        </button>
        <NavLink to="/popular">Popular</NavLink>
        <NavLink to="/nowplaying">Now Playing</NavLink>
        <NavLink to="/toprated">Top Rated</NavLink>
        <NavLink to="/upcoming">Upcoming</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
