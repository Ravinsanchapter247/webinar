import React from 'react'
import styled from 'styled-components'
function Subscripe() {
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