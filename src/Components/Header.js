import React from "react";
import "../Styles/Header.css";
import { Image } from "react-bootstrap";
import produksiIn from '../Assets/produksi.in.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavIcon = styled(Link)`
  margin-left: 2rem;
  margin: 6px 10px;
  font-size: 2rem;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Header = () => {
  return (
    <div>
      <NavIcon to='/manajemen'>
        <Image style={{height:'50px', width:'110px'}} src={produksiIn}/>
      </NavIcon>
    </div>
  );
};

export default Header;
