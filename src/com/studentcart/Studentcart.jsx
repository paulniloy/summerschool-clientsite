import React from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingCartFill, RiPriceTag3Fill, RiMoneyDollarCircleFill } from "react-icons/ri";


const Studentcart = () => {
    return (
        <div  className='bg-indigo-200 font-bold italic p-10 gap-10 h-full flex flex-col'>
            <Link className='btn' to={"/studentdash/myclasses"}><RiShoppingCartFill/>My Class Cart</Link>
            <Link className='btn' to={"/studentdash/myenrolled"}><RiPriceTag3Fill />Payment History</Link>
            <Link className='btn' to={"/studentdash/payment"}><RiMoneyDollarCircleFill/>Proceed to Payment</Link>
        </div>
    );
};

export default Studentcart;