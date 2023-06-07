import React from 'react';
import title from '../../Hooks/title';
import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';
// import Manageuser from '../instructoruser/Manageuser';
import Admincart from '../Admincart/Admincart';
import Tableusers from '../Tableusers/Tableusers';
import Nav from '../nav/Nav';
import Footer from '../Footer/Footer';

const AdminDash = () => {

    title("Admin Dashboard")
    return (
        <div>
            <Nav></Nav>
            <div className='flex justify-evenly gap-10 bg-gray-200'>
            <Admincart></Admincart>
            <Outlet></Outlet>
            
        </div>
        <Footer></Footer>
        </div>
    );
};

export default AdminDash;