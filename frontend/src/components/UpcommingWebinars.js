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
      
 
    <WebinarsContainer>
      <HeaderContainer>
    {/* <HomeIcon /> */}
    </HeaderContainer>
      <WebinarCardContainer>
       
        <WebinarCard>
          <WebinarImage>
           <img src='images/land1.png' alt='' 
           
             style={{height:'130px', width:'100%'}}
           />
          </WebinarImage>
          <Description>
   <p>This land is in switzland and has total value of 100acrs</p>
          </Description>
          <hr />
          <ImageInfo>
          <p>$25.55</p>
          <h6>Comming Soon!</h6>
          <h6>Earn 25 reward points</h6>
          </ImageInfo>
        </WebinarCard>
       
        {/* </WebinarCardContainer>
        <WebinarCardContainer> */}
        <WebinarCard>
          <WebinarImage>
           <img src='images/land1.png' alt='' 
           
             style={{height:'130px', width:'100%'}}
           />
          </WebinarImage>
          <Description>
   <p>This land is in switzland and has total value of 100acrs</p>
          </Description>
          <hr />
          <ImageInfo>
          <p>$25.55</p>
          <h6>Comming Soon!</h6>
          <h6>Earn 25 reward points</h6>
          </ImageInfo>
        </WebinarCard>
       
        {/* </WebinarCardContainer>
        <WebinarCardContainer> */}
        <WebinarCard>
          <WebinarImage>
           <img src='images/land1.png' alt='' 
           
             style={{height:'130px', width:'100%'}}
           />
          </WebinarImage>
          <Description>
   <p>This land is in switzland and has total value of 100acrs</p>
          </Description>
          <hr />
          <ImageInfo>
          <p>$25.55</p>
          <h6>Comming Soon!</h6>
          <h6>Earn 25 reward points</h6>
          </ImageInfo>
        </WebinarCard>
       
        {/* </WebinarCardContainer>
        <WebinarCardContainer> */}
        <WebinarCard>
          <WebinarImage>
           <img src='images/land1.png' alt='' 
           
             style={{height:'130px', width:'100%'}}
           />
          </WebinarImage>
          <Description>
   <p>This land is in switzland and has total value of 100acrs</p>
          </Description>
          <hr />
          <ImageInfo>
          <p>$25.55</p>
          <h6>Comming Soon!</h6>
          <h6>Earn 25 reward points</h6>
          </ImageInfo>
        </WebinarCard>
       
        {/* </WebinarCardContainer>

        <WebinarCardContainer> */}
        <WebinarCard>
          <WebinarImage>
           <img src='images/land1.png' alt='' 
           
             style={{height:'130px', width:'100%'}}
           />
          </WebinarImage>
          <Description>
   <p>This land is in switzland and has total value of 100acrs</p>
          </Description>
          <hr />
          <ImageInfo>
          <p>$25.55</p>
          <h6>Comming Soon!</h6>
          <h6>Earn 25 reward points</h6>
          </ImageInfo>
        </WebinarCard>
       
        {/* </WebinarCardContainer>
       
       
    </WebinarsContainer> */}
    

    {/* <WebinarsContainer>

      <WebinarCardContainer> */}
        <WebinarCard>
          <WebinarImage>
           <img src='images/land1.png' alt='' 
           
             style={{height:'130px', width:'100%'}}
           />
          </WebinarImage>
          <Description>
   <p>This land is in switzland and has total value of 100acrs</p>
          </Description>
          <hr />
          <ImageInfo>
          <p>$25.55</p>
          <h6>Comming Soon!</h6>
          <h6>Earn 25 reward points</h6>
          </ImageInfo>
        </WebinarCard>
       
        {/* </WebinarCardContainer>
        <WebinarCardContainer> */}
        <WebinarCard>
          <WebinarImage>
           <img src='images/land1.png' alt='' 
           
             style={{height:'130px', width:'100%'}}
           />
          </WebinarImage>
          <Description>
   <p>This land is in switzland and has total value of 100acrs</p>
          </Description>
          <hr />
          <ImageInfo>
          <p>$25.55</p>
          <h6>Comming Soon!</h6>
          <h6>Earn 25 reward points</h6>
          </ImageInfo>
        </WebinarCard>
       
        {/* </WebinarCardContainer>
        <WebinarCardContainer> */}
        <WebinarCard>
          <WebinarImage>
           <img src='images/land1.png' alt='' 
           
             style={{height:'130px', width:'100%'}}
           />
          </WebinarImage>
          <Description>
   <p>This land is in switzland and has total value of 100acrs</p>
          </Description>
          <hr />
          <ImageInfo>
          <p>$25.55</p>
          <h6>Comming Soon!</h6>
          <h6>Earn 25 reward points</h6>
          </ImageInfo>
        </WebinarCard>
       
        {/* </WebinarCardContainer>
        <WebinarCardContainer> */}
        <WebinarCard>
          <WebinarImage>
           <img src='images/land1.png' alt='' 
           
             style={{height:'130px', width:'100%'}}
           />
          </WebinarImage>
          <Description>
   <p>This land is in switzland and has total value of 100acrs</p>
          </Description>
          <hr />
          <ImageInfo>
          <p>$25.55</p>
          <h6>Comming Soon!</h6>
          <h6>Earn 25 reward points</h6>
          </ImageInfo>
        </WebinarCard>
       
        {/* </WebinarCardContainer>

        <WebinarCardContainer> */}
        <WebinarCard>
          <WebinarImage>
           <img src='images/land1.png' alt='' 
           
             style={{height:'130px', width:'100%'}}
           />
          </WebinarImage>
          <Description>
   <p>This land is in switzland and has total value of 100acrs</p>
          </Description>
          <hr />
          <ImageInfo>
          <p>$25.55</p>
          <h6>Comming Soon!</h6>
          <h6>Earn 25 reward points</h6>
          </ImageInfo>
        </WebinarCard>
       
        </WebinarCardContainer>
       
       
    </WebinarsContainer>
    
    </Container>
  )
}

export default UpcommingWebinars

const Container =styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  margin-top:50px;
  height: 100%;
  
  
`;

const Contain =styled.div`
 margin-top:50px;
`

const HeaderContainer =styled.div`
   margin-top:50px;
   //padding-left:70px
`;

const WebinarsContainer=styled.div`
 
   height:100vh;
   
 background-color:gray;
  
  display:column;
  color:white;
  flex:0.7;
 flex-grow:1;
   overflow-y:scroll ;
 
     
  
  justify-content:center;
  // display:grid;
  // grid-gap:5px;
  // gap:5px;
  // grid-template-columns:repeat(5,minmax(0,1fr));

  @media(max-width: 768px){
    grid-template-columns:repeat(2,minmax(0,1fr))
  }
 
`

const WebinarCardContainer =styled.div`
 
//border-radius: 15px;
//padding:25px;
display:flex;
width:90%;
margin-left:40px;
margin-top:20px;
display:grid;
  grid-gap:0px;
  gap:0px;
  grid-template-columns:repeat(5,minmax(0,1fr));

`;

const WebinarCard =styled.div`
border:0.5px solid lightgray;
border-radius:3px;
box-shadow:rgb(0 0 0 / 69%)0px 26px 30px -10px,
     rgb(0 0 0 / 73%) 0px 16px 10px -10px;
width:170px;
//align-items:center;
margin-bottom:20px;

>hr{
  border:0.5px solid gray;
}
`

const WebinarImage =styled.div`
 

 
`

const Description =styled.div`
padding:10px;
 background-color:black;
 font-size:11px;
 font-family:Roboto;
 font-weight:700;
`

const ImageInfo =styled.div` 
    background-color:black;
    padding:10px;
    border-radius:3px;
    // font-weight:500;
   
    h6:first-of-type {
      color:green;
      font-style: italic;

    }

    h6:nth-of-type(2) {
      font-weight: bold;
      font-size:9px;
    }
    
`;