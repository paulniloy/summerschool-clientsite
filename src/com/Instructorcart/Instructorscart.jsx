import React from 'react';
import { Link } from 'react-router-dom';
import { RiPlayListAddFill, RiVipCrown2Fill, RiUserStarFill } from "react-icons/ri";
const Instructorscart = () => {




    return (
        <div  className='bg-indigo-200 font-bold italic p-10 gap-10 h-full flex flex-col'>
            <Link className='btn' to={"/instructordash/addclasses"}><RiPlayListAddFill />Add a Class</Link>
            <Link className='btn' to={"/instructordash/showclasses"}><RiVipCrown2Fill/>My classes</Link>
        </div>
    );
};

export default Instructorscart;