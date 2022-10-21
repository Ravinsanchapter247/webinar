import React from 'react'
import styled from 'styled-components'
import SidebarBodyPriceRange from './SidebarBodyPriceRange'
import SidebarBodySort from './SidebarBodySort'
import SidebarBodyStatus from './SidebarBodyStatus'

function SidebarBody() {

  const recentItem = (topic) => {
    return <SidebarBodyCategoryItems>

      <p>{topic}</p>
    </SidebarBodyCategoryItems>
  }
  return (
    <SidebarBodyContainer>

      <p>Categories</p>



      <SidebarBodyCategoryOptions>

        {recentItem('Accessories')}
        {recentItem('Ammunation')}
        {recentItem('Firearms')}
        {recentItem('Flamesthrowers')}
        {recentItem('Knives')}
        {recentItem('Optics')}
        {recentItem('Packages')}
        {recentItem('Vip')}
      </SidebarBodyCategoryOptions>

      {/* price rage slider */}
      <SidebarBodyPriceRange />

      {/* //status */}
      <SidebarBodyStatus />


      {/* //sortby */}

      <SidebarBodySort />


      {/* //Manufactures */}


    </SidebarBodyContainer>
  )
}

export default SidebarBody


const SidebarBodyContainer = styled.div`
  margin-top:10px;
  padding:10px;

  >p{

    margin-bottom:10px;
    color:gray;
    font-size:15px;
    font-weight:200;

    &:hover {

     & >div{
      display:inline-block;}
    }

   
  }
 
`

const SidebarBodyCategoryOptions = styled.div`
    
padding:5px;
 //display:none;

`;


const SidebarBodyCategoryItems = styled.div`
     font-size:15px;
     margin-bottom:5px;
     font-weight:200;
     &:hover{
      color:green;
    }
`;