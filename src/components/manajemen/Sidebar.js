
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
// import { SidebarData } from './SidebarData';
// import SubMenu from './SubMenu';
// import { IconContext } from 'react-icons/lib';
// import { Image, Navbar } from 'react-bootstrap';
// import produksiIn from '../img/produksi.in.png'


//     const NavIcon = styled(Link)`
//     margin-left: 2rem;
//     font-size: 2rem;
//     height: 50px;
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//   `;
  
//   const SidebarNav = styled.nav`
//     background: #0771B8;
//     width: 250px;
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     position: fixed;
//     top: 50;
//     left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
//     transition: 350ms;
//     z-index: 10;
//   `;
  
//   const SidebarWrap = styled.div`
//     width: 100%;
//   `;


// export function Sidebar () {
//     const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <>
    

//       <IconContext.Provider value={{ color: '#fff' }}>

//       <link
//             rel="stylesheet"
//             href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
//             integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
//             crossorigin="anonymous"
//             />
//             <div class="shadow-sm bg-black rounded">
//               <Navbar fixed="top" style={{backgroundColor:'rgb(250, 252, 255)', boxShadow:'black'}}>
//                   <NavIcon to='#'>
//                     <FaIcons.FaBars onClick={showSidebar} style={{color:'black'}}/>
//                   </NavIcon>
//                   <NavIcon to='/manajemen/' style={{textDecoration:'none', color:'white'}}>
//                     <Image style={{height:'50px', width:'110px'}} src={produksiIn}/>
//                   </NavIcon>
//               </Navbar>
//             </div>
            
//         <SidebarNav sidebar={sidebar}>
//           <SidebarWrap>
//             {SidebarData.map((item, index) => {
//               return <SubMenu item={item} key={index} />;
//             })}
//           </SidebarWrap>
//         </SidebarNav>
//       </IconContext.Provider>
//     </>
//   );
// }



import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';
import * as BiIcons from 'react-icons/bi';
import { Image, Navbar } from 'react-bootstrap';
import produksiIn from '../img/produksi.in.png'

import { AiOutlineMenu } from "react-icons/ai";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

  const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

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

export function Sidebar () {
  const [collapsed, setCollapsed] = useState(false);
  const styles = {
    sideBarHeight: {
      height: "100vh",
    },
    menuIcon: {
      float: "left",
      marginTop: "10px",
      marginLeft:'25px',
      fontSize:'30px',
      cursor: 'pointer'
    }
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <div class="shadow-sm bg-black rounded">
        <Navbar fixed="top" style={{backgroundColor:'rgb(250, 252, 255)', boxShadow:'black'}}>
          <NavIcon to='/manajemen/'>
            <Image style={{height:'50px', width:'110px'}} src={produksiIn}/>
          </NavIcon>
        </Navbar>
      </div>
      <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
        <div style={{marginTop:'65px'}}>
          <SidebarHeader>
            <div style={styles.menuIcon} onClick={onClickMenuIcon}>
              <AiOutlineMenu />
            </div>
          </SidebarHeader>
        </div>
        <Menu>
          <Menuitem icon={<AiIcons.AiOutlineDashboard />}> 
            Dashboard
            <Link to='/manajemen/' />
          </Menuitem>

          <Submenu title="Produksi" icon={<GiIcons.GiGearHammer />}>
            <Menuitem icon={<GiIcons.GiGearHammer />}>
              Buat Permintaan
              <Link to='/manajemen/produksi/permintaan' />
            </Menuitem>
            <Menuitem icon={<GiIcons.GiGearHammer />}>
              Selesai
              <Link to='/manajemen/produksi/selesai' />
            </Menuitem>
          </Submenu>

          <Submenu title="Produk" icon={<MdIcons.MdProductionQuantityLimits />}>
            <Menuitem icon={<MdIcons.MdProductionQuantityLimits />}>
              Tambah Produk
              <Link to='/manajemen/produk/tambah-produk' />
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
              <Link to='/manajemen/material/permintaan' />
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
      </ProSidebar>
    </>
  );
  
};