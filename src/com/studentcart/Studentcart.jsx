import React from 'react';
import { Link } from 'react-router-dom';

const Studentcart = () => {
    return (
        <div  className='bg-indigo-200 font-bold italic p-10 gap-10 h-full flex flex-col'>
            <Link className='btn' to={"/studentdash/myclasses"}>My classes</Link>
            <Link className='btn' to={"/studentdash/myenrolled"}>My Enrolled</Link>
            <Link className='btn' to={"/studentdash/payment"}>Payment History</Link>
        </div>
    );
};

export default Studentcart;