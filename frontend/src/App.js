
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

function App() {

  const name = useSelector(selectPageName)
  return (
    <div className="app">
      <Router>
      <Header/>
      <AppBody>
      {name!=='GiftCard' ?<Sidebar />:null}
      <Body />
      <Routes>
      
        <Route path='/' element={<Webinars page='Webinars'/>} />
        <Route path='/upcommingwebinars' element={<UpcommingWebinars page='upcommingwebinars' />} />
        <Route path='/products' element={<Products  page='products'/>}  />
        <Route path='/giftcards' element={<GiftCard  page='GiftCard'/>}  />
        <Route path='/subscripe' element={<Subscripe page='subscripe'/>} />
       
     //header
     //sidebar
     //body
     </Routes>
     </AppBody>
     </Router>
    </div>
  );
}

export default App;


const AppBody = styled.div`
display:flex;
flex:1;
`;
