import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { addPage } from './features/pageSlice'
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { borderRadius } from '@mui/system';
import { selectActive } from './features/signInSlice';
import { useSelector } from 'react-redux';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import Footer from './Footer';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';



const props = {width: 400, height: 250, zoomWidth: 500, img: "images/description.avif"};
function Description({ page }) {

  const dispatch = useDispatch();
  //const [name,setName] =useState('')
  useEffect(() => {



    dispatch(

      addPage({
        name: page
      })
    )
  }



  )

  const [isZoomed, setIsZoomed] = useState(false)
  const active =useSelector(selectActive)


  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
  }, [])

  console.log('page:', page)
  return (
    <Container style={{opacity:(active?0.3:1)}} >
        <HeaderContainer>

  
        </HeaderContainer>
        <DescriptionContainer>
        <ImageContainer>
        <InnerImageZoom src="images/description.avif" zoomSrc="images/description.avif" width={400} height={400} zoomType={'hover'} zoomScale={0.5}/>
        
        </ImageContainer>
        <DescriptionText>
        <h1>Borka Blades SB1 Black PVD w/ Carbon Fiber Scales Webinar</h1>
        <h4>$25.75</h4>
        <button>Login To Book Seats</button>
        <p>3 remaining seats!</p>

        </DescriptionText>
    </DescriptionContainer>

    <SpecificationsContainer>
        <Title>
         <p>Specifications</p>
        </Title>

        <p>Product:<span>Borka Blades SB1 Black PVD w/ Carbon Fiber Scales</span></p>
        <Bottom>
         <p>Remaining Seats: <span>3</span></p>
         <p>Category: <span>Fixed Blade</span></p>
         <p>Manufactures: <span>Borka Blades</span></p>
        </Bottom>
    </SpecificationsContainer>

    <BodyDescription>
      <HeaderDescription>
       <p>Description</p>
      </HeaderDescription>
      <p>Take a look at the Ruger New Model Super Blackhawk .44Mag 7.5" SAO in this Exclusive webinar.</p>
      <p>Take a look at the Ruger New Model Super Blackhawk .44Mag 7.5" SAO in this Exclusive webinar.</p>
      <p>Limited to only 30 viewers per show. </p>
      <p>*one per person</p>
      <p>THIS PURCHASE IS TO VIEW A PRODUCT REVIEW WEBINAR, not the purchase of the product itself.</p>
      <p>***LICENSED FFL***</p>
      <p>As typical with all of our Webinars, we will give 1 individual the item we are reviewing at the end...FOR FREE!!</p>
    </BodyDescription>

    <RelatedContainer>
      <p>Related Webinars</p>
      <CardContainer>
      <ScrollMenu >
      <WebinarCard>
          <WebinarImage>
           <img src='images/sub1.avif' alt='' 
           
             style={{height:'140px', width:'110%'}}
           />
          </WebinarImage>
          <CardDescription>
   <p>This land is in switzland and has total value of 100acrs</p>
          </CardDescription>
          {/* <hr /> */}
          <ImageInfo>
          <p>$25.55</p>
          <h6><span>1</span> seats remaining</h6>
          <h6>Earn 25 reward points</h6>
          </ImageInfo>
        </WebinarCard>
        <WebinarCard>
          <WebinarImage>
           <img src='images/sub1.avif' alt='' 
           
             style={{height:'140px', width:'110%'}}
           />
          </WebinarImage>
          <CardDescription>
   <p>This land is in switzland and has total value of 100acrs</p>
          </CardDescription>
          {/* <hr /> */}
          <ImageInfo>
          <p>$25.55</p>
          <h6><span>1</span> seats remaining</h6>
          <h6>Earn 25 reward points</h6>
          </ImageInfo>
        </WebinarCard>
        <WebinarCard>
          <WebinarImage>
           <img src='images/sub1.avif' alt='' 
           
             style={{height:'140px', width:'110%'}}
           />
          </WebinarImage>
          <CardDescription>
   <p>This land is in switzland and has total value of 100acrs</p>
          </CardDescription>
          {/* <hr /> */}
          <ImageInfo>
          <p>$25.55</p>
          <h6><span>1</span> seats remaining</h6>
          <h6>Earn 25 reward points</h6>
          </ImageInfo>
        </WebinarCard>
        <WebinarCard>
          <WebinarImage>
           <img src='images/sub1.avif' alt='' 
           
             style={{height:'140px', width:'110%'}}
           />
          </WebinarImage>
          <CardDescription>
   <p>This land is in switzland and has total value of 100acrs</p>
          </CardDescription>
          {/* <hr /> */}
          <ImageInfo>
          <p>$25.55</p>
          <h6><span>1</span> seats remaining</h6>
          <h6>Earn 25 reward points</h6>
          </ImageInfo>
        </WebinarCard>
        <WebinarCard>
          <WebinarImage>
           <img src='images/sub1.avif' alt='' 
           
             style={{height:'140px', width:'110%'}}
           />
          </WebinarImage>
          <CardDescription>
   <p>This land is in switzland and has total value of 100acrs</p>
          </CardDescription>
          {/* <hr /> */}
          <ImageInfo>
          <p>$25.55</p>
          <h6><span>1</span> seats remaining</h6>
          <h6>Earn 25 reward points</h6>
          </ImageInfo>
        </WebinarCard>
        <WebinarCard>
          <WebinarImage>
           <img src='images/sub1.avif' alt='' 
           
             style={{height:'140px', width:'110%'}}
           />
          </WebinarImage>
          <CardDescription>
   <p>This land is in switzland and has total value of 100acrs</p>
          </CardDescription>
          {/* <hr /> */}
          <ImageInfo>
          <p>$25.55</p>
          <h6><span>1</span> seats remaining</h6>
          <h6>Earn 25 reward points</h6>
          </ImageInfo>
        </WebinarCard>
        <WebinarCard>
          <WebinarImage>
           <img src='images/sub1.avif' alt='' 
           
             style={{height:'140px', width:'110%'}}
           />
          </WebinarImage>
          <CardDescription>
   <p>This land is in switzland and has total value of 100acrs</p>
          </CardDescription>
          {/* <hr /> */}
          <ImageInfo>
          <p>$25.55</p>
          <h6><span>1</span> seats remaining</h6>
          <h6>Earn 25 reward points</h6>
          </ImageInfo>
        </WebinarCard>
        <WebinarCard>
          <WebinarImage>
           <img src='images/sub1.avif' alt='' 
           
             style={{height:'140px', width:'110%'}}
           />
          </WebinarImage>
          <CardDescription>
   <p>This land is in switzland and has total value of 100acrs</p>
          </CardDescription>
          {/* <hr /> */}
          <ImageInfo>
          <p>$25.55</p>
          <h6><span>1</span> seats remaining</h6>
          <h6>Earn 25 reward points</h6>
          </ImageInfo>
        </WebinarCard>
        </ScrollMenu>
      </CardContainer>
    </RelatedContainer>

    <CommentContainer>
      <p>Comments</p>
      <CommentBox>
      <input type="text" placeholder="Leave a comment" />
      </CommentBox>
      <button>Login To Comment</button>
    </CommentContainer>
      
      <Footer />
    </Container>
  )
}

export default Description

const Container = styled.div`
  width: 100%;
  

  margin-top:50px;
  height: 100vh;
  background-color:rgba(7, 8, 4,0.85);
  //margin: 0 auto;

  //overflow-y:scroll ;
 
  
`;

const HeaderContainer= styled.div`

margin-top:20px;
padding:20px;
background-color:black;
width:70vw;
margin-left:190px;
`;

const DescriptionContainer = styled.div`
padding:10px;
background-color:black;
width:71.5vw;
margin-left:190px;
margin-top:10px;
display:flex;
`;

const ImageContainer = styled.div`
//   >img{
//     &:hover{
//         transform: scale(1.25);
//     }
//   }

 img{
    &:hover{
        pointer:cursor;
    }
 }
`;

const DescriptionText = styled.div`
  margin-left:20px;

 >h1{
    color:#2E5B83;
    font-weight:500;
    font-size:25px;
    margin-bottom:20px;
 }
 >h4{
    color:white;
    margin-bottom:20px;
    font-size:20px;
 }

 >button{
    width:150px;
    height:30px;
    margin-bottom:20px;
 }
 >p{
    color:#2E5B83;
    margin-bottom:20px;
    font-weight:bold;
 }
`;

    const SpecificationsContainer = styled.div`
      padding:20px;
      background-color:black;
width:70.2vw;
margin-left:190px;
margin-top:10px;

>p{
    color:white;
    font-weight:450;
    font-size:13px;
    >span{
        color:rgb(46, 91, 131);
        margin-left:10px;
    }

    margin-bottom:20px;
}
    `;

    const Title = styled.div`
      color:white;
      font-size:20px;
      margin-bottom:20px;
      letter-spacing:1.5px;
    `;

    const Bottom = styled.div`
       display:flex;
       justify-content:space-between;
     >p{
        color:white;
        font-weight:500;
        font-size:13px;
     }
    `;

    const BodyDescription = styled.div`
    padding:20px;
    background-color:black;
     width:70.2vw;
     margin-left:190px;
      margin-top:10px;
      color:white;
      margin-bottom:20px;

      >p{
        margin-bottom:20px;
        font-size:15px;
        font-weight:400;

      }
    `;

    const HeaderDescription = styled.div`
    font-size:20px;
    margin-bottom:30px;
    >p{
      letter-spacing:1.5px;
    }
    `;

    const RelatedContainer = styled.div`
    padding:20px;
    background-color:black;
     width:70.2vw;
     margin-left:190px;
      margin-top:10px;
      color:white;
      
      
      >p{
        margin-bottom:15px;
        letter-spacing:1.5px;
      }
    `;

    const CardContainer = styled.div`
      display:flex;
      //width:100%;
      overflow-x:scroll;

    `;

    const WebinarCard = styled.div`
    border:1.5px solid rgba(211,211,211,0.5);
    //border-radius:3px;
    box-shadow:rgb(0 0 0 / 69%)0px 26px 30px -10px,
         rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    width:185px;
    //align-items:center;
    margin-bottom:20px;
    margin-right:20px;
    // >hr{
    //   border:0.5px solid gray;
    // }
    `;

   const WebinarImage = styled.div`
   height:140px;
   width:91%
   `;
   
   
   const CardDescription = styled.div`
   padding:14px;
   background-color:white;
   font-size:13px;
   font-family:Figtree;
   font-weight:bold;
   color:black;
   border-bottom:0.05px solid rgba(217, 217, 217,0.8);
   `;

   const ImageInfo = styled.div`
   background-color:white;
   padding:14px;
   //border-radius:3px;
   // font-weight:500;
   color:black;
   >p{
     font-size:13px;
     font-weight:500;
   }
   
   >h6>span{
     color:#3A658A;
     font-weight:bold;
   }
   
   h6:first-of-type {
    // color:green;
     //font-style: italic;
     font-size:12px;
     font-weight:400;
   
   }
   
   h6:nth-of-type(2) {
    // font-weight: bold;
     font-size:11px;
     font-weight:200;
   }
   `;


   const CommentContainer = styled.div`
   padding:10px;
   background-color:black;
   width:71.5vw;
   margin-left:190px;
   margin-top:20px;
   color:white;
   margin-bottom:30px;
   
     

   >p{
    margin-left:220px;
    margin-top:10px;
    letter-spacing:2px;
    
   }

   >button{
    margin-left:625px;
    margin-top:20px;
    height:30px;
    width:150px;
    border-radius:5px;
    margin-bottom:30px;
   }
   
   `;


   const CommentBox = styled.div`
    >input{
      width:40vw;
      height:10vh;
      margin-left:220px;
      margin-top:20px;
      border-radius:5px;
    }
   `;





