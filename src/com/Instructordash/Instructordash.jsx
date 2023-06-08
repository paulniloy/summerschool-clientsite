import React from 'react';
import Nav from '../nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Headings from '../Headings/Headings';

const Instructordash = () => {
    return (
        <div>
            <Nav></Nav>
            <Headings subheading={"Add a class"} heading={"Music school class"}></Headings>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Instructordash;