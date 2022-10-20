
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Routes,Route} from'react-router-dom';
import styled from 'styled-components'
import Sidebar from './components/Sidebar';
import Webinars from './components/Webinars';
import UpcommingWebinars from './components/UpcommingWebinars';
import Products from './components/Products';
import Subscripe from './components/Subscripe';
import Body from './components/Body';
import GiftCard from './components/GiftCard';
import { useSelector } from 'react-redux';
import {selectPageName} from './components/features/pageSlice'
import Footer from './components/Footer';
import NewGift from './components/NewGift';
import Main from './components/Main';
import Description from './components/Description';

import { selectPopup } from './components/features/subscripeSlice';
import SignIn from './components/SignIn';
import { selectPopupSingnIn } from './components/features/signInSlice';
//import Regisration from './components/Registration';
import Registration from './components/Registration';

function App() {

  const name = useSelector(selectPageName);
  const subscripe =useSelector(selectPopup);
  const signin = useSelector(selectPopupSingnIn)
  return (
    <div className="app">
      <Router>
      <Header/>
      
      <AppBody>
      {name!=='GiftCard' && name!=='subscripe' && name!=='description' && name!=='registration'?<Sidebar />:null}
     {name !=='subscripe' ?<Body />:null} 
      <Routes>
         
         <Route path='/hvhv'  element={<Main/>}/>
        <Route path='/' element={<Webinars page='Webinars'/>} />
        <Route path='/upcommingwebinars' element={<UpcommingWebinars page='upcommingwebinars' />} />
        <Route path='/products' element={<Products  page='products'/>}  />
        <Route path='/giftcards' element={<NewGift  page='GiftCard'/>}  />
        {/* <Route path='/subscripe' element={<Subscripe page='subscripe'/>} /> */}
        <Route path='/description' element={<Description page='description' />} />
        <Route path='/registration' element={<Registration page='registration' />} />
     //header
     //sidebar
     //body
     </Routes>
     
     </AppBody>
     
    {subscripe && <Subscripe page='active' /> }
    {signin && <SignIn page='active' /> } 

     {/* {name !=='subscripe' ? <Footer />:null}  */}
     </Router>
    </div>
  );
}

export default App;


const AppBody = styled.div`
display:flex;
flex:1;
`;
