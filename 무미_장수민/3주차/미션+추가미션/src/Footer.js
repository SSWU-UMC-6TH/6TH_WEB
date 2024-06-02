// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => (
  <FooterBar>
    © 2024 UMC Movie Info. All rights reserved.
  </FooterBar>
);

export default Footer;
