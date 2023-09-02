
import './App.css';
import ComingSoon from './pages/Coming-soon';
import { BrowserRouter as  Router, Routes,Route } from'react-router-dom';
import Home from './pages/Home';

function App() {
  return (

    <Router>
      <div>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/coming-soon" element={<ComingSoon/>}/>
         
        </Routes>
      </div>
    </Router>  



  );
}

export default App;
