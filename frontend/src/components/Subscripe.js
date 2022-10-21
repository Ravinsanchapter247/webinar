import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { addPage } from './features/pageSlice'


import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { addSubscripe } from './features/subscripeSlice';



//const [name,setName] =useState('')

function Subscripe({ page }) {

  const dispatch = useDispatch();

  useEffect(() => {



    dispatch(

      addPage({
        name: page
      })
    )
  }



  )

  const handleClick = () => {

    dispatch(
      addSubscripe({
        popup: false
      })
    )

  }
  return (


    <SubscripeContainer>

      <SubscripeMenu>
        <SubscripeHeader>
          <img src='images/logo.jpg' alt='logo' />
          <CloseImg onClick={handleClick}>
            <img src='images/close.png' alt='close' style={{ height: '30px', width: '30px' }} />
          </CloseImg>
        </SubscripeHeader>
        <SubscripeBody>
          <h6>Subscripe</h6>
          <p>Be the first to know about our promotions, sales and discounts</p>
        </SubscripeBody>
        <SubscripeBottom>
          <input type='text' name='amount' placeholder='Enter your email...' />
          <IconButton

            sx={{
              width: '50px',
              height: '40px',
              borderRadius: 0,
              border: "1px solid",
              borderColor: "primary.main",
              marginLeft: "10px",
            }}

          >
            <AddIcon sx={{ fontSize: "30px", color: 'white' }} />
          </IconButton>

        </SubscripeBottom>
      </SubscripeMenu>
    </SubscripeContainer>




  )
}

export default Subscripe

const SubscripeContainer = styled.div`
    
  // height:50vh;
   // width:50vw;
  //  background-color:black;
  //  position: relative;
  @media(max-width: 768px){
    grid-template-columns:repeat(2,minmax(0,1fr))
  }
 
`

const SubscripeMenu = styled.div`
height:250px;
width:500px;
background-color:white;
 top:150px;
left:0;
right:0;
margin:auto;
position:absolute;
border:1px solid lightgray;
z-index:999;

//display:grid;
//place-items:center;
`;

const SubscripeHeader = styled.div`
   padding:5px 150px;
   display:grid;
place-items:center;
border-bottom:1px solid lightgray;
`;

const CloseImg = styled.div`
  position:absolute;
  top:0;
  right:0;
`;

const SubscripeBody = styled.div`

    font-size:40px;
    margin-top:20px;
    font-weight:100;
    display:grid;
     place-items:center;

     >p{
      margin-top:10px;
      font-size:17px;
      color:#A8A2A4;
     }



    
`

const SubscripeBottom = styled.div`

display:flex;
align-items:center;
margin-left:70px;
margin-top:40px;
// display:grid;
//      place-items:center;

 >input{
  padding:10px 60px;
  text-align:start;
  font-size:15px;
  color:#A8A2A4;
 }



 >.MuiIconButton-root{
  padding:7px;
  
 background-color:black;
 &:hover{
  background-color:gray;
 }
 }
`

