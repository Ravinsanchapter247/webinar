import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import {addPage} from './features/pageSlice'
function UpcommingWebinars({page}) {

  const dispatch =useDispatch();
  //const [name,setName] =useState('')
  useEffect( () =>{



    dispatch(

      addPage({
        name:page
      })
    )
  }
  
 
  
  )

  console.log('page:',page)
  return (
    <Container>
      <Dummy></Dummy>
 
    <WebinarsContainer>
     
      <img
       src='images/giftcard.jpg'
        alt='Gift Cards' 
         
        style={{height:'200px', width:'200px'}}
        
        />

        <Amount>
            <p>The Perfect Gift</p>
        </Amount>
       
       
    </WebinarsContainer>
    
    </Container>
  )
}

export default UpcommingWebinars

const Container =styled.div`
  width: 100%;
  display:flex;

  margin-top:50px;
  height: 100vh;
  background-color:#1C1D1C !important;
  
`;



const WebinarsContainer=styled.div`
 
   height:38vh;
   
 background-color:black;
  //margin-top:50px;
  padding-left:50px;;
  padding-top:50px;
 // margin-left:40px;
  display:flex;
  color:white;
//   flex:0.7;
//  flex-grow:1;
   overflow-y:scroll ;
 
     width:45vw;
     overflow-y: hidden;
     align-items:center;
    
     
  
  @media(max-width: 768px){
    grid-template-columns:repeat(2,minmax(0,1fr))
  }
 
`

const Dummy =styled.div`
     flex:0.3;
`;

const Amount =styled.div`
padding:40px;
width:250px;
height:120px;
border:1px solid rgba(255,255,255,0.5);
margin-left:10px;
`;






