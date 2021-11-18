import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #aad6fa;
  justify-content: space-between;
  align-propss: center;
  padding: 2px 20px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    background: #277fd9;
    cursor: pointer;
    color: white;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #1e97c4;
  height: 50px;
  padding-left: 3rem;
  display: flex;
  align-propss: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 16px;

  &:hover {
    background: #277fd9;
    cursor: pointer;
    color: #f5f5f5;
  }
`;

const SubMenu = ({ props }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={props.path} onClick={props.subNav && showSubnav}>
        <div>
          {props.icon}
          <SidebarLabel>{props.title}</SidebarLabel>
        </div>
        <div>
          {props.subNav && subnav
            ? props.iconOpened
            : props.subNav
            ? props.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        props.subNav.map((props, index) => {
          return (
            <DropdownLink to={props.path} key={index}>
              {props.icon}
              <SidebarLabel>{props.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
