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
         
        style={{height:'350px', width:'350px'}}
        
        />

        <Amount>
            <p>The Perfect Gift</p>
            <TextBox>
             {/* <input type='text' name='amount'  placeholder='Quantity' /> */}
             <SubAmount>
             <form>
             
             <input type='text' />
               {/* <p>Enter your amount</p> */}
             {/* <input type='number' name='amount' placeholder='Enter Amount' /> */}
              <div>
             <label style={{color:'black'}}>Enter Amount</label>
             <input type='number' name='amount' />
             </div>
             </form>
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
  background-color:#F4F3F1 !important;
  //margin: 0 auto;
  
`;



const WebinarsContainer=styled.div`
 
   height:68vh;
   
 background-color:#FFFFFF;
  //margin-top:50px;
  padding-left:50px;;
  padding-top:50px;
 // margin-left:40px;
  display:flex;
  color:white;
//   flex:0.7;
//  flex-grow:1;
   overflow-y:scroll ;
    align-items:center;
    justify-content:center;
     width:75vw;
     overflow-y: hidden;
     align-items:center;
    
     margin: 0 auto;
  
  @media(max-width: 768px){
    grid-template-columns:repeat(2,minmax(0,1fr))
  }
 
`

const Dummy =styled.div`
     flex:0.3;
     height:100vh;
`;

const TextBox =styled.div`
   display:flex;
  > input:first-of-type{
      padding:10px;
    //width:100%;
    font-size:10px;
     width:50px;
     
   }

  //  input:nth-of-type(2){
  //   border:none;
  //   outline:none;
   
  //  }
`;

const SubAmount =styled.div`
  // padding:5px;
   //border:1px solid gray;  //no
  // border-radius:5px;
   //background-color:white;  //no
  // margin-left:10px;
 //  align-items:center;
  // width:150px;
   
  //  >p{         
  //   font-size:58px;
  //   margin-top:-8px;     //no
  //  }
     
   >input{
    // border:none;          // 1 2 no
    // outline:none;
    //padding:0 10px;
    // width:150px;
     //height:32px;
     //border-radius:5px;
   //background-color:black;  //no
   //font-size:15px;




  
 
   }

  // input::placeholder {
  //   color: red;
  //   font-size: 1.2em;
  //   font-style: italic;
  // }
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
padding:20px;
width:450px;
height:300px;
border:1px solid #CCCCCC;
margin-left:10px;

>p{
  margin-bottom:10px;
  color:#495B83;
  font-size:25px;

}
`;






