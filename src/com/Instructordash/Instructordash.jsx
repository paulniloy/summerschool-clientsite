import React from 'react';
import Nav from '../nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Headings from '../Headings/Headings';
import Instructordashhome from '../Instructordashhome/Instructordashhome';
import Addclasses from '../addclasses/Addclasses';
import Instructorscart from '../Instructorcart/Instructorscart';
import title from '../../Hooks/title';

const Instructordash = () => {
    title('Instructor Dashboard')
    return (
        <div>
            <Nav></Nav>
            <Headings heading={"Instructors Panel"} subheading={'hello'}></Headings>
            <div className='flex justify-evenly bg-base-200'>
                <Instructorscart></Instructorscart>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Instructordash;