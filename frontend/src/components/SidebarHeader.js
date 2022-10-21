import React from 'react'
import styled from 'styled-components'
function SidebarHeader() {
  return (
    <SidebarHeaderContainer>

      <h5>webinars</h5>
      <h6>100 results</h6>

    </SidebarHeaderContainer>
  )
}

export default SidebarHeader

const SidebarHeaderContainer = styled.div`
   display:flex;
   align-items:center;
   justify-content:space-between;
   padding:15px;
   border-bottom:1px solid gray;
 `;

