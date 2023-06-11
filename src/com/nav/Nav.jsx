import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../Authprovider/Auth';
import Swal from 'sweetalert2';
import Isadmin from '../varifyadmin/Isadmin';
import Isinstructor from '../varifyinstructor/Isinstructor';
import Isstudent from '../varifystudent/Isstudent';

const Nav = () => {

    const { color, setcolor } = useContext(Authcontext);

    const [ischecked, setischecked] = useState(true)
    const istoggle = (event) => {
        const checked = event.target.checked;
        if (checked) {
            setischecked(!ischecked)
            console.log('true');
            setcolor(false)
        }
        else {
            setischecked(!ischecked)
            console.log('false');
            setcolor(true)
        }
    }



    const { loggeduser, logout, username, photourl } = useContext(Authcontext);

    const handlelogout = () => {
        logout()
            .then(() => {
                localStorage.removeItem('token')
                Swal.fire("Logged out successfully")
            })
    }

    const [isAdmin] = Isadmin();
    const [isInstructor] = Isinstructor();
    const [isStudent] = Isstudent();
    const navcenter =
        <>
            <Link className='btn' to={"/"}>Home</Link>
            <Link className='btn' to={"/instructors"}>Instructors</Link>
            <Link className='btn' to={"/classes"}>Classes</Link>
            {/* <Link className='btn' to={"/admindash"}>Dashboard</Link> */}
            {
                isAdmin ? <Link className='btn' to={"/admindash"}>Admin Dashboard</Link> : ""
            }
            {
                isInstructor ? <Link className='btn' to={"/instructordash"}>Instructor Dashboard</Link> : ""
            }
            {
                isStudent ? <Link className='btn' to={"/studentdash"}>Student Dashboard</Link> : ""

            }

        </>

    const navend =
        <>
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
                loggeduser ? <Link to={"/login"} onClick={handlelogout} className='btn'>Logout</Link> : <Link className='btn' to={"/login"}>Login</Link>
            }
            <input onClick={istoggle} type="checkbox" className="toggle" checked={ischecked} />
        </>


    return (
        <div>
            <div className="navbar bg-gray-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="gap-5 z-10 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <div className='gap-10'>
                                <div>
                                    {navcenter}
                                </div>
                                <div>
                                    {navend}
                                </div>
                            </div>
                            {/* <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li> */}
                        </ul>
                    </div>
                    <img className='w-40 h-20' src="https://media-s3-us-east-1.ceros.com/granicus/images/2021/05/06/7638e39ee1731aaaa0206ccaa876014e/logo-summerschool-series1.png" alt="" />
                </div>
                <div className="navbar-center gap-5 hidden lg:flex">
                    {navcenter}
                </div>
                <div className="gap-5 navbar-end invisible md:visible">
                    {navend}
                </div>
            </div>
            {/* <div className="navbar md:justify-between gap-10">
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
            </div> */}
        </div>
    );
};

export default Nav;