import React from 'react'
import styled from "styled-components";

import SearchIcon from '@mui/icons-material/Search';
import Webinars from './Webinars';
import UpcommingWebinars from './UpcommingWebinars';
import Products from './Products';
import Subscripe from './Subscripe';
//import User from './User';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate, useNavigation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addSubscripe } from './features/subscripeSlice';
import { addSignIn } from './features/signInSlice';

function Header() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleClick = (e) => {

  //   e.preventDefault();


  // }

  //const navigation =useNavigation();
  const handleClick = (e) => {
    //e.preventDefault();
    dispatch(
      addSubscripe({
        popup: true,
        active: true

      })
    )


  }

  const handleSignInClick = (e) => {
    dispatch(
      addSignIn({
        popup: true,
        active: true
      })
    )
  }

  const handleIconClick = (e) => {
     e.preventDefault();
     navigate('/main')

  
  }
  return (
    <HeaderContainer>
      <HeaderLeft onClick={handleIconClick}>
        <img src="/images/logo3.jpg" alt=""
          style={{ height: 40, width: 80, padding: 10 }}
        />
      </HeaderLeft>

      <HeaderSearch>
        <input type='text' placeholder='Search for webinars...' />
        <SearchIcon />

      </HeaderSearch>

      <HeaderRight>
        {/* <Webinars />
            <UpcommingWebinars />
            <Products />
            <Subscripe />
            <User /> */}
        <Nav>
          <NavMenu>
            <a href='/'>
              <span>Webinars</span>
            </a>

            <a href='/upcommingwebinars'>
              <span>Upcomming Webinars</span>
            </a>
            {/* <a href='/products'>
           <span>Products</span>
           </a> */}

            <a href='/giftCards'>
              <span>Gift Cards</span>
            </a>

            <div onClick={handleClick}>
              <a href='#' >
                <span>Subscripe</span>
              </a>
            </div>

          </NavMenu>
          <User onClick={handleSignInClick}>
            <p>SignIn</p>
            <AccountCircleIcon />
          </User>
        </Nav>

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
    
   padding:0px 0;
   border-bottom: 0.1px solid gray;
   z-Index:999;
   

`

const HeaderLeft = styled.div`
  border-right: 0.1px solid gray;
  
  >img{
    padding:5px;
    
  }

  &:hover {
    cursor: pointer;
  }
`

const HeaderSearch = styled.div`

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
      padding:0.1px;
      border-radius:100px;
      background-color:white;
      color:black;
      font-size:20px;
      
      &:hover{
        background-color:gray;
        color:white;
      }
  }

`

const HeaderRight = styled.div`

  display:flex;
  color:white;
  font-size:13px;
  align-items:center;
   justify-content:center;
  
`

const Nav = styled.nav`
  display:flex;
  justify-content:space-between;
   align-items:center;
   padding:0 36px;
   
   z-index:3
`

const NavMenu = styled.div`
align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none !important;
    border-right: 1px solid gray;
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
     
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    

   
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
//  > a:active {
//     color: yellow;
//   }
  /* @media (max-width: 768px) {
    display: none;
  } */
`;

const User = styled.div`
 display:flex;
 align-items:center;
 margin-left:10px;
  >p{
    margin-right:10px;
  }
  &:hover{
    cursor:pointer;
  }
`;