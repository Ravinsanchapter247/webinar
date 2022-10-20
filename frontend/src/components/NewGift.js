import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { addPage } from './features/pageSlice'
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { borderRadius } from '@mui/system';
import { selectActive } from './features/signInSlice';
import { selectActiveSubscripe } from './features/subscripeSlice';
import { useSelector } from 'react-redux';

function NewGift({ page }) {

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

  const active =useSelector(selectActive)
  const activeSub =useSelector(selectActiveSubscripe)

  

  console.log('page:', page)
  return (
    <Container style={{opacity:(active || activeSub?0.3:1)}} >
      <Dummy></Dummy>

      <WebinarsContainer>

        <img
          src='images/giftcard.jpg'
          alt='Gift Cards'

          style={{ height: '350px', width: '350px' }}

        />

        <Amount>
          <div style={{padding:'10px'}}>
          <p>The Perfect Gift</p>
          <form>
          <div style={{display:'flex',alignItems:'center'}}>
            <div style={{
              display: 'flex',
              //width:50px;
              height:'30px',
              padding: '3px',
              //border:1px solid black;
              // width:50px;
              border: '1px solid #ADB5BD',
              alignItems: 'center',
              borderRadius: '5px'
            }}
            >
              <HorizontalRuleIcon />

              <input type="text" name="amount" value={4}
                style={{
                   width: '25px',
                  height: '20px',
                  border: 'none',
                  outline: 'none',
                  textAlign: 'center',
                  fontSize: '20px'
                }}
              />
              <AddIcon />

            </div>
     


            <div style={{
              position: ' relative',
              border: '2px solid lightgray',
              margin: '10px',
              borderRadius: '5px',
              marginTop: '10px'
            }}>
              <label for="amount" style={{position:'absolute',
     top:'-15px',
     left: '10px',
     padding:'5px 10px',
     borderRadius: '15px',
     background: '#fff',
    color:'black',
    fontSize:'14px'}}>Enter Amount*</label>
              <input type="number" name="amount" value="1"

                style={{
                  border: 'none',
                  padding: '10px',
                  width: '150px'
                }}
              />

            </div>
            
            </div>
        <div style={{marginTop:'10px',marginLeft:'-10px'}}>

            <div style={{
              position: ' relative',
              border: '2px solid lightgray',
              margin: '10px',
              borderRadius: '5px',
              marginTop: '10px',
              width:'250px'
            }}>
              <label for="amount" style={{position: 'absolute',
     top:'-15px',
     left: '10px',
     padding:'4px 10px',
     borderRadius: '15px',
     background: '#fff',
    color:'black',
    fontSize:'14px'}}>Recipient Email*</label>
              <input type="text" name="email" placeholder='john@example.com'

                style={{
                  border: 'none',
                  padding: '10px',
                  width: '230px'
                }}
              />

            </div>
            <button style={{color:'white',borderRadius:'5px',backgroundColor:'black',height:'35px',width:'120px',marginLeft:'10px',marginTop:'5px'}}>Add To Card</button>
            </div>
            <div style={{marginTop:'20px'}}>
            <p>Minimum Amount:1</p>
            <p>Maximum Amount:5000</p>
            </div>
          </form>
          </div>
        </Amount>


      </WebinarsContainer>

    </Container>
  )
}

export default NewGift

const Container = styled.div`
  width: 100%;
  display:flex;

  margin-top:50px;
  height: 100vh;
  background-color:#F4F3F1 !important;
  //margin: 0 auto;
  
`;



const WebinarsContainer = styled.div`
 
   height:68vh;
   
 background-color:#FFFFFF;
  //margin-top:50px;
  padding-left:50px;;
  padding-top:50px;
 // margin-left:40px;
  display:flex;
  color:white;
//   flex:0.7;
//  flex-grow:1;
   overflow-y:scroll ;
    align-items:center;
    justify-content:center;
     width:75vw;
     overflow-y: hidden;
     align-items:center;
    
     margin: 0 auto;
  
  @media(max-width: 768px){
    grid-template-columns:repeat(2,minmax(0,1fr))
  }
 
`

const Dummy = styled.div`
     flex:0.3;
     height:100vh;
`;





const Amount = styled.div`
padding:20px;
width:450px;
height:300px;
border:1px solid #CCCCCC;
margin-left:10px;

>div>p{
  margin-bottom:10px;
  color:#495B83;
  font-size:25px;

}

form >div>p{
  color:#A1A1A1;
  font-size:15px;
  font-weight:300;
  
}

>form>div{
 
}
>div>form>div>div>.MuiSvgIcon-root{
  color:black;
  font-size:15px;
}


>form{
    display:column;
    align-items:center;
   
}
>form>div{
  
}
>form>div>label{
    //  position: absolute;
    //  top:-15px;
    //  left: 10px;
    //  padding: 5px 10px;
    //  border-radius: 15px;
    //  background: #fff;
    // color:black;
    // font-size:14px;

}

>form>div>input{
  

}

>form>div>input{
  
}

// .form > div> button{
//   color:white;
//   background-color:black;
//   height:40px;
//   width:200px;
// }
`;






