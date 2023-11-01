
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AllEvaent from './Pages/AllEvaent';
import Committee from './Pages/Committee';
import Gallery from './Pages/Gallery';
import Navbar from './Shared/Navbar/Navbar';
import Main from './Main';
import HomeLayout from './Components/Layout/HomeLayout';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout/>} >
          {/* <Route path='/' element={<Main/>} ></Route> */}
          <Route path='/home' element={<Home/>} />
          <Route path='/all-event' element={<AllEvaent/>} />
          <Route path='/committee' element={<Committee/>} />
          <Route path='/gallery' element={<Gallery/>} />
          
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
