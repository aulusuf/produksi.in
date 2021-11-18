import React, { useState, useEffect } from "react";
import {
  ProSidebar,
  Menu,
  // MenuItem,
  // SubMenu,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { useHistory } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
// import * as AiIcons from "react-icons/ai";
// import * as GiIcons from "react-icons/gi";
// import * as MdIcons from "react-icons/md";
// import * as BiIcons from "react-icons/bi";
// import styled from "styled-components";

import { SidebarDataManajemen } from "../Pages/manajemen/SidebarDataManajemen";
import SidebarMenu from "./SidebarMenu";

const Sidebar = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [role, setRole] = useState(false);
  const history = useHistory();
  const styles = {
    sideBarHeight: {
      height: "100vh",
    },
    menuIcon: {
      marginTop: "5px",
      marginBottom: "10px",
      float: "left",
      marginLeft: "25px",
      fontSize: "30px",
      cursor: "pointer",
    },
  };

  useEffect(() => {
    setRole(JSON.parse(localStorage["role"]));
  }, [history]);
  // const Menuitem = styled(MenuItem)`
  //   :hover {
  //     margin-left: 3px;
  //     margin-right: 5px;
  //     background-color: #006ebd;
  //     border-radius: 8px;
  //   }
  // `;
  // const Submenu = styled(SubMenu)`
  //   :hover {
  //     margin-left: 3px;
  //     margin-right: 5px;
  //     background-color: #006ebd;
  //     border-radius: 8px;
  //     color: white;
  //     text-decoration: none;
  //   }
  // `;
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  const sidebarContentByRole = () => {
    return (
      <SidebarContent>
        <Menu>
          {role === 1
            ? SidebarDataManajemen.map((item, index) => {
                return <SidebarMenu props={item} key={index} />;
              })
            : role === 2
            ? SidebarDataManajemen.map((item, index) => {
                return <SidebarMenu props={item} key={index} />;
              })
            : SidebarDataManajemen.map((item, index) => {
                return <SidebarMenu props={item} key={index} />;
              })}
          {/* {sidebarMenu()} */}
        </Menu>
      </SidebarContent>
    );
  };

  return (
    <>
      <ProSidebar collapsed={collapsed}>
        <SidebarHeader className="text-end">
          <div style={styles.menuIcon} onClick={onClickMenuIcon}>
            <AiOutlineMenu />
          </div>
          <div
            clasName="d-flex"
            style={{
              marginTop: "10px",
              marginRight: "10px",
              marginBottom: "10px",
            }}
          >
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </SidebarHeader>
        {sidebarContentByRole()}

        {/* <SidebarContent>
          <Menu>
            {SidebarDataManajemen.map((item, index) => {
              return <SidebarMenu props={item} key={index} />;
            })}
            
          </Menu>
        </SidebarContent> */}
      </ProSidebar>
    </>
  );
};

export default Sidebar;
