import React from 'react';
import { Link } from 'react-router-dom';

const Admincart = () => {
    return (
        <div className='bg-indigo-200 font-bold italic p-10 gap-10 h-full flex flex-col'>
            <Link className='btn' to={"/admindash/manage"}>Manage Users</Link>
            <Link className='btn ' to={"/admindash/bye"}>Manage Classes</Link>
        </div>
    );
};

export default Admincart;