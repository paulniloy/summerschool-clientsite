import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../Authprovider/Auth';
import Swal from 'sweetalert2';

const Nav = () => {

    const { color,setcolor} = useContext(Authcontext);

    const [ischecked, setischecked] = useState(true)
    const istoggle = (event) => {
        const checked = event.target.checked;
            if(checked){
                setischecked(!ischecked)
                console.log('true');
                setcolor(false)
            }
            else{
                setischecked(!ischecked)
                console.log('false');
                setcolor(true)
            }
    }



    const {loggeduser, logout, username, photourl} = useContext(Authcontext);
    console.log(photourl, username, loggeduser);

    const handlelogout = () => {
        logout()
        .then(()=>{
            localStorage.removeItem('token')
            Swal.fire("Logged out successfully")
        })
    }

    const [isadmin,serisadmin] = useState(true);
    const navcenter =
        <>
            <Link className='btn' to={"/"}>Home</Link>
            <Link className='btn' to={"/instructors"}>Instructors</Link>
            <Link className='btn' to={"/classes"}>Classes</Link>
            {/* <Link className='btn' to={"/admindash"}>Dashboard</Link> */}
            {
                isadmin ? <Link className='btn' to={"/admindash"}>Admin Dashboard</Link>  : ""
            }
            
            <div>
                {
                    loggeduser ? 
                    <div className="tooltip tooltip-bottom" data-tip={username}>
                    <img className='rounded-full w-10' src={photourl} />
                    </div>
                     : <div className="tooltip tooltip-bottom tooltip-error" data-tip={"User not logged in"}>
                        <div>No User</div>
                     </div>
                }
            </div>
            {
                // <img src={photourl} alt="" srcset="" />
            }
            {
                loggeduser ? <Link  to={"/login"} onClick={handlelogout} className='btn'>Logout</Link> : <Link className='btn' to={"/login"}>Login</Link>
            }
            <input onClick={istoggle} type="checkbox" className="toggle" checked={ischecked} />
        </>


    return (
        <div className='p-5 bg-gray-400 w-full h-40 md:h-full z-10 home'>
            <div className="navbar md:justify-between gap-10">
                <div className="">
                    <img className='w-40' src="https://media-s3-us-east-1.ceros.com/granicus/images/2021/05/06/7638e39ee1731aaaa0206ccaa876014e/logo-summerschool-series1.png" alt="Logo" />
                    <div className="dropdown visible md:invisible">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="z-10 gap-5 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 flex">
                            {navcenter}
                        </ul>
                    </div>
                </div>
                <div className="md:flex gap-5 invisible md:visible">
                    {navcenter}
                </div>
            </div>
        </div>
    );
};

export default Nav;