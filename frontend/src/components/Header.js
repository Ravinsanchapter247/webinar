import React from 'react'
import  styled  from "styled-components";

import SearchIcon from '@mui/icons-material/Search';
import Webinars from './Webinars';
import UpcommingWebinars from './UpcommingWebinars';
import Products from './Products';
import Subscripe from './Subscripe';
import User from './User';

function Header() {
  return (
    <HeaderContainer>
        <HeaderLeft>
            <img src="/images/logo.png" alt="" 
              style={{height:40,width:60}}
            />
        </HeaderLeft>

        <HeaderSearch>
        <input type='text' placeholder='Search for webinars...'/>
            <SearchIcon/>
          
        </HeaderSearch>

        <HeaderRight>
            <Webinars />
            <UpcommingWebinars />
            <Products />
            <Subscripe />
            <User />

        </HeaderRight> 

    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
background-color:black;
    display:flex;
   position:fixed;
   width:100%;
   align-items:center;
    
   padding:10px 0;
   border-bottom: 0.1px solid gray;
   

`

const HeaderLeft=styled.div`
  border-right: 0.1px solid gray;
  
  >img{
    padding:5px;
  }
`

const HeaderSearch=styled.div`

opacity:1;
border:none;

text-align:center ;
display:flex ;
padding:10px 30px;
color:gray;
flex:1;

border-right: 0.1px solid gray;


>input{
    background-color:transparent ;
    border:none;
    text-align:start;
    min-width:30vw;
    outline:none;
    color:white;
  flex:1;
   }

   > .MuiSvgIcon-root{
      padding:0.5px;
      border-radius:50px;
      background-color:white;
      color:black;
      font-size:20px;
      
  }

`

const HeaderRight=styled.div`

  display:flex;
  color:white;
  font-size:13px;
  align-items:center;
   justify-content:center;
  
`