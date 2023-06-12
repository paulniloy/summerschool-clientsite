import React, { useContext } from 'react';
import Nav from '../nav/Nav';
import Footer from '../Footer/Footer';
import Studentcart from '../studentcart/Studentcart';
import { Outlet } from 'react-router-dom';
import Headings from '../Headings/Headings';
import { Authcontext } from '../Authprovider/Auth';

const Studentdash = () => {
    const {color} = useContext(Authcontext)
    return (
        <div className={color ? 'bg-white text-black' : 'bg-gray-800 text-white'}>
            <Nav></Nav>
            <Headings heading={"Student"} subheading={"Manage classes"}></Headings>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-400'>
                <Studentcart></Studentcart>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Studentdash;