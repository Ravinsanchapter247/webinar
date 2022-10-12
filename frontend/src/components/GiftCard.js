import React, { useEffect } from 'react'
import  styled  from "styled-components";
import { useDispatch } from 'react-redux';
import {addPage} from './features/pageSlice'

function GiftCard({page}) {
    const dispatch =useDispatch();

  useEffect( () =>{



    dispatch(

      addPage({
        name:page
      })
    )
  }
  
 
  
  )
  return (
    <Container>
        <Content>
        <GiftCardContainer>
         <img src='images/giftcard.jpg' alt='Gift Card' style={{height:'200px',width:'200px'}}/>
        </GiftCardContainer>
        <GiftCardForm>
        <p>The Perfect Gift</p>
        <Amount>

        </Amount>
        </GiftCardForm>
        </Content>
    </Container>
  )
}

export default GiftCard

const Container = styled.div`
//position: relative;
height:100vh;
   //padding:20px 50px;
 
 //margin:auto;
  width:100%;
  display:flex;
  color:white;
   flex:0.7;
  flex-grow:1;
 
  background-color:#1C1D1C;
   overflow-y:scroll ;
 
`;
 
const Content =styled.div`
 background-color:black;
 display:flex;
 height:150px;
`
const GiftCardContainer =styled.div`

 //position:absolute;
`;

const Amount =styled.div`

`;
const GiftCardForm = styled.div`
    margin-top:100px;
    padding:10px;
   
`