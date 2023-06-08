import React from 'react';
import Nav from '../nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Instructordash = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Instructordash;