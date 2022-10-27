import React from 'react'
import styled from 'styled-components';

function SidebarOptions({Icon,title}) {
  return (
    <SidebarOptionContainer>
        {Icon && <Icon fontSize='small' style={{padding:10}}/>}
    
      { <h3>{title}</h3>}
   
   </SidebarOptionContainer>
  )
}

 

export default SidebarOptions


const SidebarOptionContainer = styled.div`
display:flex;
font-size:10px ;
align-items:center ;
color:white;

&:hover{
    opacity:0.9;
   
    background-color:#340e36 ;
    cursor:pointer;
    
  }

`;