import React from 'react';
import { Link } from 'react-router-dom';

const Admincart = () => {
    return (
        <div className='bg-base-100 font-bold italic p-10 gap-10 h-full flex flex-col'>
            <Link to={"/admindash/manage"}>Manage Users</Link>
            <Link to={"/admindash/bye"}>Manage Classes</Link>
        </div>
    );
};

export default Admincart;