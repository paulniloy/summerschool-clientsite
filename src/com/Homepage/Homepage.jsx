import React from 'react';
import Nav from '../nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Homepage = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='z-0'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;