import React, { useContext } from 'react';
import Nav from '../nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Headings from '../Headings/Headings';
import Instructordashhome from '../Instructordashhome/Instructordashhome';
import Addclasses from '../addclasses/Addclasses';
import Instructorscart from '../Instructorcart/Instructorscart';
import title from '../../Hooks/title';
import { Authcontext } from '../Authprovider/Auth';

const Instructordash = () => {

    const {color} = useContext(Authcontext)
    title('Instructor Dashboard')
    return (
        <div className={color ? 'bg-white text-black' : 'bg-gray-800 text-white'}>
            <Nav></Nav>
            <Headings heading={"Instructors Panel"} subheading={'hello'}></Headings>
            <div className='flex flex-col md:flex-row justify-evenly bg-gray-400'>
                <Instructorscart></Instructorscart>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Instructordash;