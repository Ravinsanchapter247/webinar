import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { addPage } from './features/pageSlice';
import SidebarOptions from './SidebarOptions';

function UserDashboard({ page}) {

    const dispatch = useDispatch();
  //const [name,setName] =useState('')
  useEffect(() => {



    dispatch(

      addPage({
        name: page
      })
    )
  })
  return (
    <UserDashboardContainer>
        <SiderbarDashboard>
            <SidebarHeader>
               <p>My Account</p>
            </SidebarHeader>
            <SidebarBody>
              <SidebarOptions  />

              
            </SidebarBody>

        </SiderbarDashboard>
        <UserDashboardBody>

        </UserDashboardBody>
    </UserDashboardContainer>
  )
}

export default UserDashboard

const UserDashboardContainer = styled.div`
  margin-top:80px;
  margin-left:20px;
  
`

const SiderbarDashboard = styled.div`
  flex:0.3;
  padding:10px;
  background-color:black;
  width:180px;
  font-size:14px;
`;

const UserDashboardBody = styled.div`
  flex:0.7;
`;

const SidebarHeader = styled.div`
    color:white;
`;

const SidebarBody = styled.div`

`;

