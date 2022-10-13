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
            <TextBox>
             <input type='text' name='amount'  placeholder='Quantity' />
             <SubAmount>
               {/* <p>Enter your amount</p> */}
             <input type='text' name='amount' placeholder='Enter Amount' />
             </SubAmount>
            
            </TextBox>
            <RecepientEmail>
            <p>Recepient Email</p>
            <input type='text' placeholder='john@example.com' />

            </RecepientEmail>
            <Bottom>
              <p>Minimun Amount:1</p>
              <p>Maximum Amount:5000</p>
              <button>AddToCard</button>
            </Bottom>
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

const TextBox =styled.div`
   display:flex;
   input:first-of-type{

    width:50px;
    font-size:10px;

   }

  //  input:nth-of-type(2){
  //   border:none;
  //   outline:none;
   
  //  }
`;

const SubAmount =styled.div`
   padding:0 50px;
   border:1px solid gray;
   background-color:white;
   margin-left:10px;
   >p{
    font-size:8px;
    margin-top:-8px;
   }
     
   >input{
    border:none;
    outline:none;
     padding:0 20px;
    
    background-color:black;
   }
`;

const Bottom=styled.div`
 font-size:11px;
 margin-top:10px;

 >button{
  margin-top:10px;
  background-color:white;
  color:black;
  border:1px solid lightgray;
  padding:5px;
  font-weight:bold;
 }
`;
const RecepientEmail =styled.div`
 margin-top:10px;
 >p{
  font-size:13px;
 }
`;

const Amount =styled.div`
padding:10px;
width:300px;
height:180px;
border:1px solid rgba(255,255,255,0.5);
margin-left:10px;

>p{
  margin-bottom:10px;
  color:#2E5B83;

}
`;






