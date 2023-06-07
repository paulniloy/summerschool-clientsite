import React from 'react';
import { Link } from 'react-router-dom';

const Admincart = () => {
    return (
        <div className='bg-yellow-200 font-bold italic p-10 gap-10 flex flex-col'>
            <Link to={"/admindash/manage"}>Manage Users</Link>
            <Link to={"/admindash/bye"}>Manage Users</Link>
        </div>
    );
};

export default Admincart;