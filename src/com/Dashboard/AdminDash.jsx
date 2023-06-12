import React, { useContext } from 'react';
import title from '../../Hooks/title';
import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';
// import Manageuser from '../instructoruser/Manageuser';
import Admincart from '../Admincart/Admincart';
import Tableusers from '../Tableusers/Tableusers';
import Nav from '../nav/Nav';
import Footer from '../Footer/Footer';
import Headings from '../Headings/Headings';
import { Authcontext } from '../Authprovider/Auth';

const AdminDash = () => {
    const {color} = useContext(Authcontext)

    title("Admin Dashboard")
    return (
        <div className={color ? 'bg-white text-black' : 'bg-gray-800 text-white'}>
            <Nav></Nav>
            <Headings heading={"Add a class"} subheading={"Music school class"}></Headings>
            <div className='flex flex-col md:flex-row justify-evenly gap-10 bg-gray-400'>
                <div className='justify-content-start'>
                    <Admincart></Admincart>
                </div>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AdminDash;