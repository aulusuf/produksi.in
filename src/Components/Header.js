import React from "react";
import { Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import produksiIn from '../Assets/produksi.in.png';
import "../Styles/Header.css";

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
      <NavIcon to="/manajemen">
        <Image style={{ height: "50px", width: "110px" }} src={produksiIn} />
      </NavIcon>
    </div>
  );
};

export default Header;
