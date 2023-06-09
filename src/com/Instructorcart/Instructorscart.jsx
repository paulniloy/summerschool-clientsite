import React from 'react';
import { Link } from 'react-router-dom';

const Instructorscart = () => {
    return (
        <div  className='bg-indigo-200 font-bold italic p-10 gap-10 h-full flex flex-col'>
            <Link className='btn' to={"/instructordash/addclasses"}>Add a Class</Link>
            <Link className='btn' to={"instructordash/showclasses"}>Show classes</Link>
        </div>
    );
};

export default Instructorscart;