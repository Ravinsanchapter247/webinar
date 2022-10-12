import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import {addPage} from './features/pageSlice'


 
  //const [name,setName] =useState('')
 
function Subscripe({page}) {

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
    <SubscripeContainer>Subscripe</SubscripeContainer>
  )
}

export default Subscripe

const SubscripeContainer=styled.div`
 
 border-right: 1px solid gray;
 padding:0px 20px;
 &:hover{
    color:blue;
 }
 
`