import React from 'react';
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
  z-index: 1000; // z-index 추가
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

const Navbar = () => (
  <Nav>
    <NavLink to="/">UMC Movie</NavLink>
    <NavMenu>
      <NavLink to="/signup">회원가입</NavLink> {/* 회원가입 버튼 추가 */}
      <NavLink to="/popular">Popular</NavLink>
      <NavLink to="/nowplaying">Now Playing</NavLink>
      <NavLink to="/toprated">Top Rated</NavLink>
      <NavLink to="/upcoming">Upcoming</NavLink>
    </NavMenu>
  </Nav>
);

export default Navbar;
