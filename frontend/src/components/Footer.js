import React from 'react'
import styled from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {

  const supportItems = (topic) => {
    return (

      <p style={{ marginBottom: '10px', marginLeft: '10px' }}>{topic}</p>
    )
  }
  return (
    <FooterContainer>Footer
      <FooterBody>
        <FooterSupport>
          <h4>Support</h4>
          {supportItems('FAQ')}
          {supportItems('Terms and Conditions')}
          {supportItems('Privacy Policy')}
          {supportItems('Sweepstakes Rules')}
          {supportItems('DLD Rewards Program')}
          {supportItems('Track Gift Card')}
          {supportItems('DO NOT SELL MY DATA')}
        </FooterSupport>
        <FooterContacts>
          <h4>Contacts</h4>
          <Email>
            <EmailIcon />
            {supportItems('admin@chapter247.com')}
          </Email>
          <TechnicalSupport>
            <EmailIcon />
            {supportItems('Technical Support:technical@chapter247.com')}
          </TechnicalSupport>
          <PhoneContact>
            <PhoneIcon />
            {supportItems('+91687334584')}
          </PhoneContact>
          <Location>
            <LocationOnIcon />

            {supportItems('908, 9th Floor Apollo Premier Plot No.1 Scheme PU-4, Vijay Nagar, Indore, Madhya Pradesh 452010, India')}
          </Location>
        </FooterContacts>
      </FooterBody>

      <FooterBottom>
        <BottomLeft>
          <p>2022 © chapter247 All  Rights Reserved.</p>
        </BottomLeft>
        <BottomRight>
          <FacebookGroup>
            <p>Join our Facebook Group!</p>
            <FacebookIcon />
          </FacebookGroup>
          <FacebookPage>
            <p>Follow our Facebook page!</p>
            <img src="images/facebook.png" alt="Facebook" style={{ height: '20px' }} />
          </FacebookPage>
          <FollowUs>
            <p>Follow us in</p>
            <img src="images/instagram.png" alt="Instagram" style={{ height: '20px' }} />
            <img src="images/twitter.png" alt="Twitter" style={{ height: '25px' }} />
            <img src="images/youtube.png" alt="YouTube" style={{ height: '25px' }} />
            <img src="images/reddit_user.png" alt="Reddit" style={{ height: '25px' }} />
            <img src="images/reddit_sub.png" alt="Reddit" style={{ height: '25px' }} />
          </FollowUs>
        </BottomRight>
      </FooterBottom>

    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
 display:flex;
 flex-direction:column;
 background-color:black;
  //margin-bottom:200px;           //need to remove

`;

const FooterBody = styled.div`
    display:flex;

    font-color:white;

    background-color:#222222;

    padding:50px;
    justify-content:space-between;
    border-bottom:0.05px solid rgba(217, 217, 217,0.2);
`;

const FooterSupport = styled.div`
  >h4{
    color:white;
    margin-bottom:20px;
    font-size:18px;
    font-weight:600;
  }
  color:#B5B7BB;
  
  
`;

const TechnicalSupport = styled.div`
   display:flex;
   margin-bottom:10px;
`;

const FooterContacts = styled.div`
>h4{
    color:white;
    margin-bottom:20px;
    font-size:18px;
    font-weight:600;
  }
    flex:0.5;

    
        color:#B5B7BB;
    
`;

const Email = styled.div`
  display:flex;
  margin-bottom:10px;
`;

const PhoneContact = styled.div`
  display:flex;
  margin-bottom:10px;
`;

const Location = styled.div`
   display:flex;
   margin-bottom:10px;
   width:400px;
`;

const FooterBottom = styled.div`
background-color:#222222;
 padding:50px;
 display:flex;
 
`;

const BottomLeft = styled.div`
 
 color:#B5B7BB;
 align-items:center;
 font-size:14px;
 flex:1;
`;

const BottomRight = styled.div`
color:#B5B7BB;
 align-items:center;
 display:flex;
 font-size:14px;
 
 
`;

const FacebookGroup = styled.div`
 display:flex;
 margin-right:30px;
 
 >p{
    margin-right:10px;
 }
`;

const FacebookPage = styled.div`
 display:flex;
 align-items:center;
 margin-right:30px;
 >p{
    margin-right:10px;
 }
`;

const FollowUs = styled.div`
display:flex;
//margin-right:30px;

flex:1;

>p{
    margin-right:10px;
 }

 >img{
    margin-right:15px;
 }

 >img{
    font-color:white;
 }

 img:nth-of-type(5) {
  margin-right:-40px;
`;