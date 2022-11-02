import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { addPage } from './features/pageSlice'
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { borderRadius } from '@mui/system';
import { addSignIn, selectActive } from './features/signInSlice';
import { useSelector } from 'react-redux';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import Footer from './Footer';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import PersonIcon from '@mui/icons-material/Person';
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';
import { register } from './features/userSlice';



const props = { width: 400, height: 250, zoomWidth: 500, img: "images/description.avif" };
function Registration({ page }) {

    const dispatch = useDispatch();

    const [userData,setUserData] =useState({
        firstName:'',
        lastName:'',
        password:'',
        mobileNumber:'',
        email:'',
        passwordConfirmation:'',
    })

    const {firstName,lastName,email,password,mobileNumber,passwordConfirmation} =userData;
    const {user,isLoading,isError,isSuccess,message} =useSelector(state => state.auth);
    const onChange = (e) =>{ setUserData((prevState) =>({
        ...prevState,
        [e.target.name]:e.target.value
    }))

}

    //const [name,setName] =useState('')
    useEffect(() => {



        dispatch(

            addPage({
                name: page
            })
        )
    }


,
    )

    const [isZoomed, setIsZoomed] = useState(false)
    const active = useSelector(selectActive)
    const navigate = useNavigate()

    const handleZoomChange = useCallback(shouldZoom => {
        setIsZoomed(shouldZoom)
    }, [])

    console.log('page:', page)

    const handleClick = () => {
        dispatch(
            addSignIn({
                popup: true,
                active: true
            })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
         console.log('form submitted')
        
            const userData ={
                firstName,
                lastName,
                email,
                mobileNumber,
                password,
                passwordConfirmation,
            }

            dispatch(register(userData))

            console.log('user data:',userData)
            console.log(passwordConfirmation,'password confirmation')
            navigate('/main')
        

    }
    return (
        <Container style={{ opacity: (active ? 0.3 : 1) }} >
            <HeaderContainer>


            </HeaderContainer>


            <SpecificationsContainer>
                <PersonIcon />
                <p>CREATE AN ACCOUNT</p>
            </SpecificationsContainer>

            <BodyDescription>

                <Name>
                    <FirstName>
                        <label>FIRST NAME<span>*</span></label>
                        <input type="text" name="firstName" placeholder='john'value={firstName} onChange={onChange}/>
                    </FirstName>
                    <LastName>
                        <label>LAST NAME<span>*</span></label>
                        <input type="text" name="lastName" placeholder='Doe' onChange={onChange} />
                    </LastName>
                </Name>
                <Email>
                    <label>EMAIL<span>*</span></label>
                    <input type="text" name="email" placeholder='john@doe.com'  onChange={onChange}/>
                </Email>

                <Email>
                    <label>MOBILE NUMBER<span>*</span></label>
                    <input type="number" name="mobileNumber" placeholder='(xxxx xxxx-xxxx)' onChange={onChange} />
                </Email>

                <Methode>
                    <p>PREFERRED METHOD OF CONTACT</p>
                    <Toggle>

                        <p>Email</p>
                        <Switch defaultChecked />
                        <p>Mobile Number</p>

                    </Toggle>
                </Methode>

                <Password>
                    <p>*Password must be at least 10 characters long and must include a lowercase letter, an uppercase letter, a number, and a special character.</p>
                    <Email style={{ marginTop: '10px' }}>
                        <label>PASSWORD<span>*</span></label>
                        <input type="password" name="password" placeholder='****' onChange={onChange}/>
                    </Email>

                    <Email>

                        <label>CONFIRM PASSWORD<span>*</span></label>
                        <input type="password" name="passwordConfirmation" placeholder='****' onChange={onChange}/>
                    </Email>
                </Password>

                <Bottom>
                    <button onClick={handleSubmit}>Create Account</button>
                    <p >Do you have an account?<span onClick={handleClick}>Log In</span></p>

                </Bottom>

            </BodyDescription>



            <Footer />
        </Container>
    )
}

export default Registration

const Container = styled.div`
  width: 100%;
  

  margin-top:50px;
  //height: 100vh;
  background-color:#F4F3F1;
  //margin: 0 auto;

  //overflow-y:scroll ;
 
  
`;

const HeaderContainer = styled.div`

margin-top:20px;
padding:20px;
background-color:white;
width:70vw;
margin-left:190px;
`;






const SpecificationsContainer = styled.div`

    padding:10px;
    background-color:white;
    width:71.5vw;
    margin-left:190px;
    margin-top:20px;
    display:flex;
    
    align-items:center;
     >.MuiSvgIcon-root{
        color:#2E5B83;
        font-size:50px;
     }

     >p{

        font-size:25px;
        color:#2E5B83;
        margin-left:20px;
        letter-spacing:4px;
     }
    `;




const BodyDescription = styled.div`
    padding:60px;
    padding-left:80px;
    background-color:white;
     width:62.8vw;
     margin-left:190px;
      margin-top:20px;
      color:white;
      margin-bottom:20px;

     
    `;

const Name = styled.div`
      display:flex;
     // justify-content:space-between;
      color:#4B5563;
    `;

const FirstName = styled.div`
      display:flex;
      flex-direction: column;
     // margin-left:30px;
      font-family:Roboto;
      >label>span{
        color:red;
      }
      >input{
        
        height:30px;
        width:400px;
        margin-top:10px;
        border-radius:2px;
        border:1px solid #DEE2E6;
         
        ::placeholder{
            padding-left:20px;
        }

        // &:hover {
        //     border:2px solid #9DC0FA;
        //     outline:2px solid #9DC0FA;
        // }
      }

      input:focus {
        border:2px solid #9DC0FA;
        outline:2px solid #9DC0FA;
      }
    `;

const LastName = styled.div`
    display:flex;
      flex-direction: column;
      margin-left:30px;
      font-family:Roboto;
      >label>span{
        color:red;
      }

      >input{
        height:30px;
        width:400px;
        margin-top:10px;
        border-radius:2px;
        border:1px solid #DEE2E6;
         
        ::placeholder{
            padding-left:20px;
        }

       
      }

      input:focus {
        border:2px solid #9DC0FA;
        outline:2px solid #9DC0FA;
      }
    `;


const Email = styled.div`
      display:flex;
      flex-direction: column;
      color:#4B5563;
      margin-top:25px;
     font-family:Roboto;

      >label>span{
        color:red;
      }
      >input{
        height:30px;
        width:840px;
        margin-top:10px;
        border-radius:2px;
        border:1px solid #DEE2E6;

        ::placeholder{
            padding-left:20px;
        }
       
    }

    input:focus {
        border:2px solid #9DC0FA;
        outline:2px solid #9DC0FA;
      }
    `

const Methode = styled.div`
    color:#4B5563;
    margin-top:30px;
    font-family:Roboto;
    `;


const Toggle = styled.div`
      display:flex;
      align-items:center;
      margin-top:5px;
    `;


const Password = styled.div`
       color:#9B9994;
       margin-top:25px;

       >p{
        font-size:16px;
        font-weight:10;
        font-style:italic;
        
       }
    `;

const Bottom = styled.div`
    >button{
        height:38px;
        width:845px;
        margin-top:30px;
        border-radius:2px;
        background-color:rgb(191, 187, 187);
        color:white;
        font-weight:bold;

        font-size:15px;
        
        border:1px solid #DEE2E6;
        
    }

   
align-items:center;


>p{
    color:#4B5563;
    margin-top:10px;
    font-size:15px;
    margin-left:300px;
}
>p>span{
    font-weight:bold;

    &:hover {
        color:#6586A2;
        text-decoration:underline;
    }
}
`;






















