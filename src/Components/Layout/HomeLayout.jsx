import React from 'react';
import Home from '../../Pages/Home';
import AllEventPage from '../AllEventPage/AllEventPage';
import Committee from '../Committee/Committee';
import Gallery from '../Gallery/Gallery';
import Main from '../../Main';
import FooterPage from '../FooterPage/FooterPage';

export default function  HomeLayout() {
    return (
        <div>
            <Main/>
            <Home/>
            <AllEventPage/>
            <Gallery/>
            <Committee/>
            <FooterPage/>
        </div>
    );
};
