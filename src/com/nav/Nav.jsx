import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import pic from "../../../public/tree-736885_1280 (1).jpg"
import { Authcontext } from '../Authprovider/Auth';
import Swal from 'sweetalert2';

const Nav = () => {
    const {loggeduser, logout, username, photourl} = useContext(Authcontext);

    const handlelogout = () => {
        logout()
        .then(()=>{
            Swal.fire("Logged out successfully")
        })
    }

    const navcenter =
        <>
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Portfolio</Link>
            <Link to={"/about"}>About</Link>
            <div>
                {
                    loggeduser ? 
                    <div className="tooltip tooltip-bottom" data-tip={username}>
                    <img className='rounded-full w-10' src={photourl} />
                    </div>
                     : <div className="tooltip tooltip-bottom tooltip-error" data-tip={"User not logged in"}>
                        <div>User</div>
                     </div>
                }
            </div>
            {
                loggeduser ? <Link to={"/login"} onClick={handlelogout}>Logout</Link> : <Link to={"/login"}>Login</Link>
            }
        </>


    return (
        <div className='p-5 bg-gray-200'>
            <div className="navbar">
                <div className="navbar-start">
                    <img className='w-20' src={pic} alt="Logo" />
                    <div className="dropdown visible md:invisible">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="z-10 gap-5 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 flex">
                            {navcenter}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end gap-20 invisible md:visible">
                    {navcenter}
                </div>
            </div>
        </div>
    );
};

export default Nav;