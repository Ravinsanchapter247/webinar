import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { borderLeft } from '@mui/system';
function User() {
  return (
    <UserContainer>
        ravinsan
        <AccountCircleIcon />
        </UserContainer>
  )
}

export default User

const UserContainer=styled.div`
 display:flex;
 
 align-items:center;
 padding:0px 20px;
 border-right: 1px solid gray;
 &:hover{
    color:blue;
 }

 > .MuiSvgIcon-root{
    margin-left: 10px;
    font-size:22px;
    color:lightgray;
}

`