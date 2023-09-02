import './App.scss';
import ComingSoon from './pages/Coming-soon';
import { BrowserRouter as  Router, Routes,Route } from'react-router-dom';
import Home from './pages/Home';
import Header from './Components/Header';
import NewReleases from './Components/New-releases';


function App() {
  return (

    <Router>
    <div className="container">
    <Header/>
      <div>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/coming-soon" element={<ComingSoon/>}/>
          <Route path="/new-release" element={<NewReleases/>}/>
         
        </Routes>
      </div>
      </div>
    </Router>  



  );
}

export default App;
