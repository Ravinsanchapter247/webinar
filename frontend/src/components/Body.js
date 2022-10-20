import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useSelector,useDispatch } from 'react-redux';
import {selectPageName} from './features/pageSlice'


function Body() {
  
    const page =useSelector(selectPageName)
  return (
    <BodyContainer >
        <HomeIconContainer style={{marginLeft:(page=='description' || page=='registration' || page=='giftCard' ?'200px':page=='giftcards' ||page=='active'?'200px':'40px'),marginTop:(page=='description'|| page=='registration' ?'80px':'70px'),}} >
        <HomeIcon />
        <KeyboardDoubleArrowRightIcon />
        <p style={{color:(page==='giftCard' || page==='registration'?'black':'#f5f5f5')}}>{page}</p>
        </HomeIconContainer>
       
        </BodyContainer>
  )
}

export default Body

const BodyContainer =styled.div`
  flex:0.7;
  flex-grow:1;
  height:100vh;
  width:100vw;
  background-color:gray;
  position:relative;
 
`;

const HomeIconContainer =styled.div`
display:flex;
 margin-top:70px;
 margin-left:40px;
 align-items:center;

 position:absolute;
 > .MuiSvgIcon-root{
    font-size:17px;
    color:#2E5B83;
 }
 >p{
    font-size:12px;
    margin-left:2px;
    align-items:center;
    font-weight:500;
    color:#f5f5f5;
 }
`;