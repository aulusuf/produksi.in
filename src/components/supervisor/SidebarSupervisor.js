import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { Navbar } from 'react-bootstrap';


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


export function SidebarSupervisor () {
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
              <Navbar fixed="top" style={{backgroundColor:'blue', boxShadow:'black'}}>
                  <NavIcon to='#'>
                      <FaIcons.FaBars onClick={showSidebar} style={{color:'white'}}/>
                  </NavIcon>
                  <NavIcon to='/manajemen/dashboard' style={{textDecoration:'none', color:'white'}}>
                          Produksi.in
                  </NavIcon>
              </Navbar>
            </div>
            
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {/* <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon> */}
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
}
