import React from 'react'
import styled from 'styled-components'
import SidebarBody from './SidebarBody'
import SidebarBottom from './SidebarBottom'
import SidebarHeader from './SidebarHeader'

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader />
      <SidebarBody />
      <SidebarBottom />
    </SidebarContainer>
  )
}

export default Sidebar


const SidebarContainer= styled.div`
background-color:black;
margin-top:60px;
color:white;

flex:0.3;
max-width:250px;
border-top:1px solid #49274b ;
overflowY: 'scroll',
 
`