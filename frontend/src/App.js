
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Routes,Route} from'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
      <Sidebar />
      <Routes>
      
        <Route>

        </Route>
     //header
     //sidebar
     //body
     </Routes>
     </Router>
    </div>
  );
}

export default App;
