import React from 'react'
import styled from 'styled-components'
function UpcommingWebinars() {
  return (
    <UpcommingWebinarsContainer>Upcomming Webinars</UpcommingWebinarsContainer>
  )
}

export default UpcommingWebinars

const UpcommingWebinarsContainer=styled.div`
 
 border-right: 1px solid gray;
 padding:0px 20px;
 &:hover{
    color:blue;
 }
 
`