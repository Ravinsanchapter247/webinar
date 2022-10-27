import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { addPage } from './features/pageSlice';
import SidebarOptions from './SidebarOptions';
import GridViewIcon from '@mui/icons-material/GridView';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MonitorIcon from '@mui/icons-material/Monitor';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VideocamIcon from '@mui/icons-material/Videocam';
import Switch from '@mui/material/Switch';
//import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

function UserDashboard({ page}) {

    const dispatch = useDispatch();
  //const [name,setName] =useState('')
  useEffect(() => {



    dispatch(

      addPage({
        name: page
      })
    )
  })
  return (
    <UserDashboardContainer>
        <SiderbarDashboard>
            <SidebarHeader>
               <p>My Account</p>
            </SidebarHeader>
            <SidebarBody>
              <SidebarOptions Icon={GridViewIcon} title='Dashboard' />
              <SidebarOptions Icon={ShoppingBagIcon} title='My Orders' />
              <SidebarOptions Icon={MonitorIcon} title='My Webinars' />
              <SidebarOptions Icon={CardGiftcardIcon} title='My GiftCards' />
              <SidebarOptions Icon={PersonIcon} title='My Profile' />
              <SidebarOptions Icon={LockIcon} title='Change Password' />

              
            </SidebarBody>

        </SiderbarDashboard>
        <UserDashboardBody>

        {/* dashboard */}

          {/* <DashboardContainer>
            <AccountImage>
              <ImageContainer>
              <AccountCircleIcon />
              </ImageContainer>
             
             <AccountInfo>

             <h4>Ravinsan</h4>
             <p>Member since:2005</p>
             </AccountInfo>
            
            </AccountImage>
            <RewardsPoints>
             <EmojiEventsIcon/>
             <AccountInfo>

             <h4>50 reward points</h4>
             <p>use reward pointson purchase</p>
             </AccountInfo>
            </RewardsPoints>
            <GiftcardDetails>
              <CardGiftcardIcon/>
              <AccountInfo>

             <h4>$0.00 gift card balance</h4>
             <p>1 local giftcard</p>
             </AccountInfo>
            </GiftcardDetails>
          </DashboardContainer>
           <WebinarActivity>
            <h4>Current Webinar Activity </h4>
            <p>View All My Webinars</p>
           </WebinarActivity> */}


           {/* dashboard */}

           {/* orders */}

       
       {/* <OrdersContainer>
        <OrdersHeader>
          <ShoppingBagIcon/>
          <p>My Orders</p>
        </OrdersHeader>

        <OrdersBody>
          <OrdersBodyHeader>
          <ShoppingBagIcon/>
          <p>Purchased Products</p>
          </OrdersBodyHeader>
          <p>Purchased Products</p>
          </OrdersBody>
       
       </OrdersContainer> */}

        {/* orders */}


        {/* webinars */}
        {/* <WebinarsContainer>
        <OrdersHeader>
          <MonitorIcon/>
          <p>My Webinars</p>
        </OrdersHeader>

          <WebinarBody>
            <CurrentWebinars>
            <VideocamIcon />
            <p>Current webinars</p>
            </CurrentWebinars>

            <PreviousWebinars>
            <VideocamIcon />
            <p>Previous webinars</p>
            </PreviousWebinars>
           
          </WebinarBody>
        </WebinarsContainer> */}

        {/* webinars */}


        {/* profile */}

        {/* <ProfileContainer>

        <ProfileHeader>
          <PersonIcon/>
          <p>My Profile</p>
        </ProfileHeader>
          <ProfileBody>
        <Content>
          <div style={{
                  position: ' relative',
                  border: '0.05px solid rgba(217, 217, 217,0.3)',
                  margin: '10px',
                  borderRadius: '5px',
                  marginTop: '10px',
                  width: '470px',
                  
                }}>
                  <label for="amount" style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '10px',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    background: '#fff',
                    color: 'white',
                    fontSize: '14px',
                    backgroundColor:'black'
                  }}>First Name*</label>
                  <input type="text" name="first name" placeholder='john'

                    style={{
                      border: 'none',
                      padding: '10px',
                      width: '230px',
                      backgroundColor:'black'
                    }}
                  />

                </div>

                <div style={{
                  position: ' relative',
                  border: '0.05px solid rgba(217, 217, 217,0.3)',
                  margin: '10px',
                  borderRadius: '5px',
                  marginTop: '10px',
                  width: '470px',
                  
                }}>
                  <label for="amount" style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '10px',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    background: '#fff',
                    color: 'white',
                    fontSize: '14px',
                    backgroundColor:'black'
                  }}>Last Name*</label>
                  <input type="text" name="last name" placeholder='doe'

                    style={{
                      border: 'none',
                      padding: '10px',
                      width: '230px',
                      backgroundColor:'black'
                    }}
                  />

                </div>

                </Content>

                <Content>
          <div style={{
                  position: ' relative',
                  border: '0.05px solid rgba(217, 217, 217,0.3)',
                  margin: '10px',
                  borderRadius: '5px',
                  marginTop: '10px',
                  width: '470px',
                  
                }}>
                  <label for="amount" style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '10px',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    background: '#fff',
                    color: 'white',
                    fontSize: '14px',
                    backgroundColor:'black'
                  }}>Mobile Number*</label>
                  <input type="text" name="mobile number" placeholder='+9494224565'

                    style={{
                      border: 'none',
                      padding: '10px',
                      width: '230px',
                      backgroundColor:'black'
                    }}
                  />

                </div>

                <div style={{
                  position: ' relative',
                  border: '0.05px solid rgba(217, 217, 217,0.3)',
                  margin: '10px',
                  borderRadius: '5px',
                  marginTop: '10px',
                  width: '470px',
                  
                }}>
                  <label for="amount" style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '10px',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    background: '#fff',
                    color: 'white',
                    fontSize: '14px',
                    backgroundColor:'black'
                  }}>Email*</label>
                  <input type="text" name="email" placeholder='john@example.com'

                    style={{
                      border: 'none',
                      padding: '10px',
                      width: '230px',
                      backgroundColor:'black'
                    }}
                  />

                </div>

                </Content>

                <Content>
          <div style={{
                  position: ' relative',
                  border: '0.05px solid rgba(217, 217, 217,0.3)',
                  margin: '10px',
                  borderRadius: '5px',
                  marginTop: '10px',
                  width: '470px',
                  
                }}>
                  <label for="amount" style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '10px',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    background: '#fff',
                    color: 'white',
                    fontSize: '14px',
                    backgroundColor:'black'
                  }}>Address*</label>
                  <input type="text" name="address" placeholder='maharasta'

                    style={{
                      border: 'none',
                      padding: '10px',
                      width: '230px',
                      backgroundColor:'black'
                    }}
                  />

                </div>

                <div style={{
                  position: ' relative',
                  border: '0.05px solid rgba(217, 217, 217,0.3)',
                  margin: '10px',
                  borderRadius: '5px',
                  marginTop: '10px',
                  width: '470px',
                  
                }}>
                  <label for="amount" style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '10px',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    background: '#fff',
                    color: 'white',
                    fontSize: '14px',
                    backgroundColor:'black'
                  }}>Address2*</label>
                  <input type="text" name="address" placeholder='indoor'

                    style={{
                      border: 'none',
                      padding: '10px',
                      width: '230px',
                      backgroundColor:'black'
                    }}
                  />

                </div>

                </Content>
                <Content>
          <div style={{
                  position: ' relative',
                  border: '0.05px solid rgba(217, 217, 217,0.3)',
                  margin: '10px',
                  borderRadius: '5px',
                  marginTop: '10px',
                  width: '470px',
                  
                }}>
                  <label for="amount" style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '10px',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    background: '#fff',
                    color: 'white',
                    fontSize: '14px',
                    backgroundColor:'black'
                  }}>City*</label>
                  <input type="text" name="city" placeholder='Delhi'

                    style={{
                      border: 'none',
                      padding: '10px',
                      width: '230px',
                      backgroundColor:'black'
                    }}
                  />

                </div>

                <div style={{
                  position: ' relative',
                  border: '0.05px solid rgba(217, 217, 217,0.3)',
                  margin: '10px',
                  borderRadius: '5px',
                  marginTop: '10px',
                  width: '470px',
                  
                }}>
                  <label for="amount" style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '10px',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    background: '#fff',
                    color: 'white',
                    fontSize: '14px',
                    backgroundColor:'black'
                  }}>States*</label>
                  <input type="text" name="state" placeholder='Delhi'

                    style={{
                      border: 'none',
                      padding: '10px',
                      width: '230px',
                      backgroundColor:'black'
                    }}
                  />

                </div>

                </Content>
                <Content>
          <div style={{
                  position: ' relative',
                  border: '0.05px solid rgba(217, 217, 217,0.3)',
                  margin: '10px',
                  borderRadius: '5px',
                  marginTop: '10px',
                  width: '470px',
                  
                }}>
                  <label for="amount" style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '10px',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    background: '#fff',
                    color: 'white',
                    fontSize: '14px',
                    backgroundColor:'black'
                  }}>Country*</label>
                  <input type="text" name="country" placeholder='india'

                    style={{
                      border: 'none',
                      padding: '10px',
                      width: '230px',
                      backgroundColor:'black'
                    }}
                  />

                </div>

                <div style={{
                  position: ' relative',
                  border: '0.05px solid rgba(217, 217, 217,0.3)',
                  margin: '10px',
                  borderRadius: '5px',
                  marginTop: '10px',
                  width: '470px',
                  
                }}>
                  <label for="amount" style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '10px',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    background: '#fff',
                    color: 'white',
                    fontSize: '14px',
                    backgroundColor:'black'
                  }}>Postalcode*</label>
                  <input type="text" name="postalcode" placeholder='600000'

                    style={{
                      border: 'none',
                      padding: '10px',
                      width: '230px',
                      backgroundColor:'black'
                    }}
                  />

                </div>

                </Content>
                <PreferredMethod>
                  <p>Preferred Method of Contact</p>
                  <p>Email</p>
                  <Switch defaultChecked />
                  <p>Mobile Number</p>
                </PreferredMethod>

          </ProfileBody>
          <p>*Editing mobile number or preferred method of contact may require re-verificationon next login</p>
          <button>TEST WEBINAR NOTIFICATION</button>

          <button>
            Update Profile
           </button>
        </ProfileContainer> */}

        {/* profile */}
          

          {/* change password */}

          {/* <PasswordContainer>
            <ProfileHeader>
              <LockIcon/>
              <p>Change Password</p>
            </ProfileHeader>
            <PasswordBody>
            <div style={{
                  position: ' relative',
                  border: '0.05px solid rgba(217, 217, 217,0.3)',
                  margin: '10px',
                  borderRadius: '5px',
                  marginTop: '10px',
                  width: '470px',
                  
                }}>
                  <label for="amount" style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '10px',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    background: '#fff',
                    color: 'white',
                    fontSize: '14px',
                    backgroundColor:'black'
                  }}>Old Password</label>
                  <input type="text" name="postalcode" placeholder='*****'

                    style={{
                      border: 'none',
                      padding: '10px',
                      width: '230px',
                      backgroundColor:'black'
                    }}
                  />

                </div>

                <div style={{
                  position: ' relative',
                  border: '0.05px solid rgba(217, 217, 217,0.3)',
                  margin: '10px',
                  borderRadius: '5px',
                  marginTop: '10px',
                  width: '470px',
                  
                }}>
                  <label for="amount" style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '10px',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    background: '#fff',
                    color: 'white',
                    fontSize: '14px',
                    backgroundColor:'black'
                  }}>New Password</label>
                  <input type="text" name="postalcode" placeholder='*****'

                    style={{
                      border: 'none',
                      padding: '10px',
                      width: '230px',
                      backgroundColor:'black'
                    }}
                  />

                </div>

                <div style={{
                  position: ' relative',
                  border: '0.05px solid rgba(217, 217, 217,0.3)',
                  margin: '10px',
                  borderRadius: '5px',
                  marginTop: '10px',
                  width: '470px',
                  
                }}>
                  <label for="amount" style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '10px',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    background: '#fff',
                    color: 'white',
                    fontSize: '14px',
                    backgroundColor:'black'
                  }}>Confirm New Password</label>
                  <input type="text" name="postalcode" placeholder='******'

                    style={{
                      border: 'none',
                      padding: '10px',
                      width: '230px',
                      backgroundColor:'black'
                    }}
                  />

                </div>

                <button>Update Password</button>
                </PasswordBody>
          </PasswordContainer> */}


            {/* change password */}


            {/* my giftcard  */}

            <GiftcardContainer>
            <ProfileHeader>
              <CardGiftcardIcon />
              <p>My Gift Cards</p>
            </ProfileHeader>
            </GiftcardContainer>

          

        </UserDashboardBody>
    </UserDashboardContainer>
  )
}

export default UserDashboard

const UserDashboardContainer = styled.div`
  margin-top:80px;
  margin-left:20px;
  display:flex;
  
`

const SiderbarDashboard = styled.div`
  flex:0.3;
  padding:10px;
  background-color:black;
  width:13vw;
  font-size:14px;
`;

const UserDashboardBody = styled.div`
  flex:0.7;
`;

const SidebarHeader = styled.div`
    color:white;
  >p{

    margin-left:10px;
    margin-bottom:10px;
    font-size:15px;
    font-weight:500;

  }  
`;

const SidebarBody = styled.div`

`;

const DashboardContainer = styled.div`
     padding:20px;
     background-color:black;
     margin-left:20px;
     width:77vw;
     height:10vh;
    
     display:flex;
     align-items:center;
     justify-content:space-around;
    
`;

const AccountImage = styled.div`


color:white;
display:flex;
align-items:center;
margin-left:-90px;

`;

const AccountInfo = styled.div`
color:white;
  >p{
    font-size:14px;
  }
`;

const ImageContainer = styled.div`
>.MuiSvgIcon-root{
  color:white;
  font-size:70px;
}
`;

const RewardsPoints = styled.div`
   >.MuiSvgIcon-root{
    color:yellow;
    font-size:40px;
   }
   display:flex;
   align-items:center;
`;

const GiftcardDetails= styled.div`
 >.MuiSvgIcon-root{
  color:white;
  font-size:40px;
 }

 display:flex;
`;

const WebinarActivity= styled.div`
padding:20px;
background-color:black;
margin-left:20px;
margin-top:20px;
width:77vw;
height:10vh;
color:white;
display:flex;
font-size:14px;
>h4{
  color:white;
  flex:1;
}
`;

const OrdersContainer = styled.div`
margin-left:20px;
`;

const OrdersHeader = styled.div`
display:flex;
padding:10px;
background-color:black;
color:white;
width:77vw;
>p{
  margin-left:15px;
}
`;

const OrdersBody= styled.div`
    padding:20px;
    background-color:black;
    margin-top:20px;
    color:white;
    >p{
      margin-left:40px;
      margin-top:20px;
    }
`;

const OrdersBodyHeader = styled.div`
  display:flex;
  color:white;
  padding:10px;
  background-color:lightgray;
  >p{
    margin-left:15px;
  }
`;


const WebinarsContainer =styled.div`
margin-left:20px;
`;

const WebinarHeader =styled.div`

`;


const WebinarBody =styled.div`

`;

const CurrentWebinars =styled.div`
   display:flex;
   padding:10px;
   background-color:lightgray;
   margin-top:20px;
   color:white;
   >p{
    margin-left:10px;
   }
`;

const PreviousWebinars =styled.div`
display:flex;
padding:10px;
background-color:lightgray;
margin-top:5px;
color:white;
>p{
  margin-left:10px;
 }
`;

const ProfileContainer =styled.div`
margin-left:20px;
background-color:black;
width:77vw;
color:white;
>p{
  margin-left:20px;
  font-size:12px;
}

>button{
  background-color:black;
  color:white;
  margin-left:20px;
  margin-top:20px;
  border-radius:5px;
  border:1px solid lightgray;
  height:30px;
  
}

button:nth-of-type(2) {
  margin-left:200px;
  margin-bottom:20px;
  background-color:white;
  color:black;
}

`;

const ProfileHeader =styled.div`
  display:flex;
  align-items:center;
  color:white;
  margin-left:15px;
  padding:10px;
  
  >p{
    margin-left:10px;
    
  }
  border-bottom:0.05px solid rgba(217, 217, 217,0.2);
  
`

const ProfileBody =styled.div`
   padding:20px;
`;

const Content =styled.div`
 display:flex;
`;

const PreferredMethod = styled.div`
 display:flex;
 color:white;
 align-items:center;
 >p{
  margin-right:30px;
 }

 >.MuiSwitch-root{
  margin-right:30px;
 }
`;


const PasswordContainer =styled.div`
color:white;
background-color:black;
margin-left:30px;
width:77vw;

`;

const PasswordBody = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top:30px;

  >button{
    height:30px;
    margin-top:30px;
    margin-bottom:30px;
  }
`;

const GiftcardContainer =styled.div`
color:white;
background-color:black;
margin-left:30px;
width:77vw;
`;

