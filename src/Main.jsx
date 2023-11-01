
import { Outlet } from 'react-router-dom';
import Navbar from './Shared/Navbar/Navbar';
import HomeLayout from './Components/Layout/HomeLayout';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            
        </div>
    );
};

export default Main;