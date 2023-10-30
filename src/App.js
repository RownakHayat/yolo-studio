import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AllEvaent from './Pages/AllEvaent';
import Committee from './Pages/Committee';
import Gallery from './Pages/Gallery';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        {/* <Outlet/> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/all-event' element={<AllEvaent/>} />
          <Route path='/committee' element={<Committee/>} />
          <Route path='/gallery' element={<Gallery/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
