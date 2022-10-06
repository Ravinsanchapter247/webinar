import React from 'react'
import styled from 'styled-components'
function SidebarBody() {

    const recentItem =(topic) =>{
        return <SidebarBodyCategoryItems>
            
             <p>{topic}</p>
         </SidebarBodyCategoryItems>
     }
  return (
    <SidebarBodyContainer>
        
       

        <SidebarBodyCategoryOptions>
            <p>Categories</p>
            {recentItem('Accessories')}
            {recentItem('Ammunation')}
            {recentItem('Firearms')}
            {recentItem('Flamesthrowers')}
            {recentItem('Knives')}
            {recentItem('Optics')}
            {recentItem('Packages')}
            {recentItem('Vip')}
          </SidebarBodyCategoryOptions>
        
        </SidebarBodyContainer>
  )
}

export default SidebarBody


const SidebarBodyContainer =styled.div`
  margin-top:10px;
  padding:10px;
 
`

const SidebarBodyCategoryOptions =styled.div`
     
padding:5px;
>p{

    margin-bottom:10px;
    color:gray;
    font-size:15px;
    font-weight:200;
  }
`;


const SidebarBodyCategoryItems = styled.div`
     font-size:15px;
     margin-bottom:5px;
     font-weight:200;
`;