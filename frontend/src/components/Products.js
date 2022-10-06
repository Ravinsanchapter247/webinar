import React from 'react'
import styled from 'styled-components'

function Products() {
  return (
    <ProductContainer>Products</ProductContainer>
  )
}

export default Products

const ProductContainer=styled.div`
 
 border-right: 1px solid gray;
 padding:0px 20px;
 &:hover{
    color:blue;
 }
 
`