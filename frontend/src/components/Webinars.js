import React from 'react'
import styled from 'styled-components'
function Webinars() {
  return (
    <WebinarsContainer>Webinars</WebinarsContainer>
  )
}

export default Webinars

const WebinarsContainer=styled.div`

 border-right: 1px solid gray;

 padding:0px 20px;
 &:hover{
    color:blue;
 }
 
`