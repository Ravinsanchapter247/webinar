import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import {addPage} from './features/pageSlice'


import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { addSubscripe } from './features/subscripeSlice';
import { addSignIn } from './features/signInSlice';


 
  //const [name,setName] =useState('')
 
function SignIn({page}) {

  const dispatch =useDispatch();

  useEffect( () =>{



    dispatch(

      addPage({
        name:page
      })
    )
  }
  
 
  
  )

  const handleClick = () =>{

    dispatch(
      addSignIn({
        popup:false
      })
    )

  }
  return (
  
    
       <SubscripeContainer>

<SubscripeMenu>
<SubscripeHeader>
   <img src='images/logo.jpg' alt='logo' />
   <CloseImg onClick={handleClick}>
   <img src='images/close.png' alt='close'style={{height:'30px',width:'30px'}} />
   </CloseImg>
</SubscripeHeader>
<SubscripeBody>
    <Email>
 <p>Email*</p> 
 <input type="email" name="email" placeholder="john@Example.com" />
 </Email>

 <Email>
    <TextBox>
 <p style={{flex:1}}>password*</p> 
 <p>Forget Password?</p>
 </TextBox>
 <input type="password" name="email" placeholder="****" />
 </Email>
 <button>Login</button>
</SubscripeBody>
<SubscripeBottom>
<p>Don't have an account?<span>Sign Up</span></p>
 
</SubscripeBottom>
</SubscripeMenu>
</SubscripeContainer>

  


  )
}

export default SignIn

const SubscripeContainer=styled.div`
    
  // height:50vh;
   // width:50vw;
  //  background-color:black;
  //  position: relative;
  @media(max-width: 768px){
    grid-template-columns:repeat(2,minmax(0,1fr))
  }
 
`

const SubscripeMenu =styled.div`
height:400px;
width:500px;
background-color:white;
 top:80px;
left:0;
right:0;
margin:auto;
position:absolute;
border:1px solid lightgray;
z-index:999;

//display:grid;
//place-items:center;
`;

const SubscripeHeader =styled.div`
   padding:5px 150px;
   display:grid;
place-items:center;
border-bottom:1px solid lightgray;
`;

const CloseImg =styled.div`
  position:absolute;
  top:0;
  right:0;
`;

const SubscripeBody =styled.div`

    font-size:15px;
   // margin-top:10px;
    font-weight:400;
    padding:40px;
    // display:grid;
    //  place-items:center;

     >p{
      margin-top:10px;
      font-size:17px;
      color:#A8A2A4;
     }


>button{
    width:435px;
    height:40px;
    margin-top:20px;
    font-size:15px;
    disabled:true;
    border:none;
    color:white;
    background-color:rgb(191, 187, 187);
    font-weight:bold;
   
}
    
`

const Email =styled.div`
  >input{
    width:400px;
    height:5px;
    padding:15px;
    border:1px solid #DEE2E6;
   
    ::placeholder{
        font-size:15px;
    }

    &:hover {
        border:2px solid #9DC0FA;
        outline:2px solid #9DC0FA;
    }
  }
    >p{
        font-family:Roboto;
    }
  margin-top:15px;
`;

const TextBox =styled.div`
    display:flex;
    >p{
        font-family:Roboto;
    }
`;

const SubscripeBottom =styled.div`

display:flex;
align-items:center;
margin-left:110px;
margin-top:-30px;
>p{
    color:#4B5563;
    
}
>p>span{
    font-weight:bold;

    &:hover {
        color:#6586A2;
        text-decoration:underline;
    }
}

`

