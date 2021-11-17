import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';
import * as BiIcons from 'react-icons/bi';
import styled from 'styled-components';

const Sidebar = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const styles = {
    sideBarHeight: {
      height: "100vh",
    },
    menuIcon: {
      marginTop:'5px',
      marginBottom:'10px',
      float: "left",
      marginLeft:'25px',
      fontSize:'30px',
      cursor: 'pointer'
    }
  };
  const Menuitem = styled(MenuItem)`
  :hover {
    margin-left:3px;
    margin-right:5px;
    background-color:  #006EBD;
    border-radius: 8px;
  }
`;
const Submenu = styled(SubMenu)`
  :hover {
    margin-left:5px;
    margin-right:5px;
    background-color:  #006EBD;
    border-radius: 8px;
    color: white;
    text-decoration: none;
  }
`;
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  

  return (
    <>
      <ProSidebar
        collapsed={collapsed}
      >
        <SidebarHeader>
          <div style={styles.menuIcon} onClick={onClickMenuIcon}>
            <AiOutlineMenu />
          </div>
        </SidebarHeader>
        <SidebarContent>
        <Menu>
          <Menuitem icon={<AiIcons.AiOutlineDashboard />}> 
            Dashboard
            <Link to='/manajemen' />
          </Menuitem>

          <Submenu title="Produksi" icon={<GiIcons.GiGearHammer />}>
            <Menuitem icon={<GiIcons.GiGearHammer />}>
              Buat Permintaan
              <Link to='/manajemen/produksi' />
            </Menuitem>
            <Menuitem icon={<GiIcons.GiGearHammer />}>
              Selesai
              <Link to='/manajemen/produksi/selesai' />
            </Menuitem>
          </Submenu>

          <Submenu title="Produk" icon={<MdIcons.MdProductionQuantityLimits />}>
            <Menuitem icon={<MdIcons.MdProductionQuantityLimits />}>
              Tambah Produk
              <Link to='/manajemen/produk' />
            </Menuitem>
            <Menuitem icon={<MdIcons.MdProductionQuantityLimits />}>
              Data Produk
              <Link to='/manajemen/produk/data-produk' />
            </Menuitem>
            <Menuitem icon={<MdIcons.MdProductionQuantityLimits />}>
              Kategori
              <Link to='/manajemen/produk/kategori' />
            </Menuitem>
          </Submenu>

          <Submenu title="Material" icon={<GiIcons.GiMaterialsScience />}>
            <Menuitem icon={<GiIcons.GiMaterialsScience />}>
              Permintaan
              <Link to='/manajemen/material' />
            </Menuitem>
            <Menuitem icon={<GiIcons.GiMaterialsScience />}>
              Data Material
              <Link to='/manajemen/material/data-material' />
            </Menuitem>
            <Menuitem icon={<GiIcons.GiMaterialsScience />}>
              Tipe
              <Link to='/manajemen/material/tipe' />
            </Menuitem>
            <Menuitem icon={<GiIcons.GiMaterialsScience />}>
              Stok
              <Link to='/manajemen/material/stok' />
            </Menuitem>
          </Submenu>

          <Menuitem icon={<BiIcons.BiGroup />}>
            Pegawai
            <Link to='/manajemen/pegawai' />
          </Menuitem>
        </Menu>
        </SidebarContent>
      </ProSidebar>
    </>
  );
};

export default Sidebar;
