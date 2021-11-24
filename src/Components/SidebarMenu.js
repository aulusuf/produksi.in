import React from "react";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menuitem = styled(MenuItem)`
    :hover {
      margin-left: 3px;
      margin-right: 5px;
      background-color: #006ebd;
      border-radius: 8px;
    }
  `;
  const Submenu = styled(SubMenu)`
    :hover {
      margin-left: 3px;
      margin-right: 5px;
      background-color: #006ebd;
      border-radius: 8px;
      color: white;
      text-decoration: none;
    }
  `;
  
const SidebarMenu = ({ props }) => {
  if (!props.subNav) {
    return (
      <Menuitem icon={props.MenuitemIcon}>
        {props.label}
        <Link to={props.path} />
      </Menuitem>
    );
  } else if (props.subNav) {
    return (
      <Submenu title={props.title} icon={props.SubmenuIcon}>
        {props.subNav.map((props, index) => {
          return (
            <Menuitem icon={props.MenuitemIcon} key={index}>
              {props.label}
              <Link to={props.path} />
            </Menuitem>
          );
        })}
      </Submenu>
    );
  }
  return <div></div>;
};

export default SidebarMenu;
