import React from "react";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import { SidebarData } from "./SidebarData";
// import SubMenu from "./SubMenu";
// import { IconContext } from "react-icons/lib";
// import { Image, Navbar } from "react-bootstrap";
// import produksiIn from "../img/produksi.in.png";

const Base = (props) => {
  const [role, setRole] = React.useState();
  console.log(localStorage);
  console.log(localStorage["name"]);
  const roleNumber = localStorage["name"];
  console.log(roleNumber);
  if (roleNumber) {
    return <div>{roleNumber}</div>;
  } else {
    return (
      <div className="mt-5">
        {/* <Sidebar /> */}
        <h1>{roleNumber}</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </div>
    );
  }
};

export default Base;
