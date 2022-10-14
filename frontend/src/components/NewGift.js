import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import {addPage} from './features/pageSlice'
function NewGift({page}) {

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
              <form>
                <input type="text" name="amount" />

                <div>
                    <label for="amount">Enter Amount</label>
                    <input type="number" name="amount" value="1" />
                </div>
              </form>
        </Amount>
       
       
    </WebinarsContainer>
    
    </Container>
  )
}

export default NewGift

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

>form{
    display:flex;
}
>form>div{
    border: 2px solid;
    margin: 10px;
    border-radius: 15px;
    margin-top: 20px;
}
>form>div>label{
    position: absolute;
    top: 6px;
    left: 20px;
    padding: 5px 10px;
    border-radius: 15px;
    background: #fff;
    color:black;
}

>form>div>input{
    border: none;
    background: transparent;

}
`;






