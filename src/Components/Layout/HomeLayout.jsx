import React from 'react';
import Home from '../../Pages/Home';
import AllEventPage from '../AllEventPage/AllEventPage';
import Committee from '../Committee/Committee';
import Gallery from '../Gallery/Gallery';
import Main from '../../Main';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            <Main/>
            <Outlet/>
            <Home/>
            <AllEventPage/>
            <Gallery/>
            <Committee/>
        </div>
    );
};

export default HomeLayout;