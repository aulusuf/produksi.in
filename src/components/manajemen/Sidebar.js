import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { Image, Navbar } from 'react-bootstrap';
import produksiIn from '../img/produksi.in.png'


    const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;
  
  const SidebarNav = styled.nav`
    background: #0771B8;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 50;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
  `;
  
  const SidebarWrap = styled.div`
    width: 100%;
  `;


export function Sidebar () {
    const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    

      <IconContext.Provider value={{ color: '#fff' }}>

      <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
            />
            <div class="shadow-sm bg-black rounded">
              <Navbar fixed="top" style={{backgroundColor:'rgb(250, 252, 255)', boxShadow:'black'}}>
                  <NavIcon to='#'>
                    <FaIcons.FaBars onClick={showSidebar} style={{color:'black'}}/>
                  </NavIcon>
                  <NavIcon to='/manajemen/' style={{textDecoration:'none', color:'white'}}>
                    <Image style={{height:'50px', width:'110px'}} src={produksiIn}/>
                  </NavIcon>
              </Navbar>
            </div>
            
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
}



// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
// import { SidebarData } from './SidebarData';
// import { IconContext } from 'react-icons/lib';
// import { Image, Navbar } from 'react-bootstrap';
// import produksiIn from '../img/produksi.in.png'

// import { AiOutlineMenu } from "react-icons/ai";
// import { FaCog, FaUserTie, FaColumns, FaThList } from "react-icons/fa";
// import {
//   Menu,
//   MenuItem,
//   ProSidebar,
//   SidebarHeader,
//   SubMenu
// } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";

// const Menuitem = styled(MenuItem)`
//   :hover {
//     background-color:  #AAD6FA;
//     padding: 5px;
//     border-radius: 10px;
//   }
// `;

// export function Sidebar () {
//   const [collapsed, setCollapsed] = useState(false);
//   const styles = {
//     sideBarHeight: {
//       height: "100vh"
//     },
//     menuIcon: {
//       float: "left",
//       marginTop: "10px",
//       marginLeft:'25px',
//       fontSize:'30px',
//       cursor: 'pointer'
//     }
//   };
//   const onClickMenuIcon = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <>
    

//       <IconContext.Provider value={{ color: '#fff' }}>

//       <link
//         rel="stylesheet"
//         href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
//         integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
//         crossorigin="anonymous"
//       />
//         {/* <div class="shadow-sm bg-black rounded">
//           <Navbar fixed="top" style={{backgroundColor:'rgb(250, 252, 255)', boxShadow:'black'}}>
//               <NavIcon to='#'>
//                 <FaIcons.FaBars onClick={''} style={{color:'black'}}/>
//               </NavIcon>
//               <NavIcon to='/manajemen/dashboard' style={{textDecoration:'none', color:'white'}}>
//                 <Image style={{height:'50px', width:'110px'}} src={produksiIn}/>
//               </NavIcon>
//           </Navbar>
//         </div> */}
//         <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
//           <div style={{}}>
//             <SidebarHeader>
//               <div style={styles.menuIcon} onClick={onClickMenuIcon}>
//                 <AiOutlineMenu />
//               </div>
//             </SidebarHeader>
//           </div>
//           <Menu iconShape="square">
//             <Menuitem icon={<FaColumns />}> Dashboard</Menuitem>
//             <Menuitem icon={<FaUserTie />} href="/employees">
//               Employees
//             </Menuitem>
//             <SubMenu title="Stages" icon={<FaThList />}>
//               <Menuitem icon={<FaUserTie />}>Offer Letter</Menuitem>
//               <Menuitem icon={<FaUserTie />} href="/employees">
//                 Employees
//               </Menuitem>
//               <MenuItem icon={<FaUserTie />}>Know Your Company</MenuItem>
//               <Menuitem icon={<FaUserTie />}>Know Your Company</Menuitem>

//               <MenuItem>Joining Day Information</MenuItem>
//               <MenuItem>Feedback</MenuItem>
//               <MenuItem>Background Check</MenuItem>
//             </SubMenu>
//             <SubMenu title="Stages" icon={<FaThList />}>
//               <Menuitem>Offer Letter</Menuitem>
//               <MenuItem>Skill Matrix</MenuItem>
//               <MenuItem>Know Your Company</MenuItem>
//               <MenuItem>Joining Day Information</MenuItem>
//               <MenuItem>Feedback</MenuItem>
//               <MenuItem>Background Check</MenuItem>
//             </SubMenu>
//             <SubMenu title="Stages" icon={<FaThList />}>
//               <Menuitem>Offer Letter</Menuitem>
//               <MenuItem>Skill Matrix</MenuItem>
//               <MenuItem>Know Your Company</MenuItem>
//               <MenuItem>Joining Day Information</MenuItem>
//               <MenuItem>Feedback</MenuItem>
//               <MenuItem>Background Check</MenuItem>
//             </SubMenu>
//             <Menuitem icon={<FaCog />}>Settings</Menuitem>
//           </Menu>
//         </ProSidebar>
//       </IconContext.Provider>
//     </>
//   );
  
// };