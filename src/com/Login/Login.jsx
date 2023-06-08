import title from '../../Hooks/title';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { Authcontext } from "../Authprovider/Auth";
import Swal from 'sweetalert2';
import { FaGoogle } from "react-icons/fa";
// import axios from '../json/axios';
// import API from '../json/axios';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { google, signin, username, useremail, photourl } = useContext(Authcontext);

    const [checked, setchecked] = useState(false);

    const handlecheck = event => {
        if (event.target.checked) {
            setchecked(true)
        }
        else (
            setchecked(false)
        )
    }

    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || "/";

    const [success, setsuccess] = useState('');
    const [error, seterror] = useState('');




    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        signin(data.email, data.password)
            .then((userCredential) => {
                navigate(from)
                const user = userCredential.user;
                setsuccess('Successfully signed in');
                Swal.fire('Sucessfully Logged in')
                seterror('')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                })
                seterror(errorMessage);
                setsuccess('');
            })
    };

    const handlegooglelogin = () => {
        google()
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const instructorsdata = {
                    name : username, email : useremail, picture : photourl, role: "student" 
                }
                console.log(instructorsdata);
                fetch("http://localhost:3000/instructors", {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(instructorsdata)
                });
                navigate(from)
                setsuccess('Successfully signed in');
                Swal.fire('Logged in with Google')
                seterror('')
                
            }).catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: { errorMessage },
                })
                const errorCode = error.code;
                const credential = GoogleAuthProvider.credentialFromError(error);
                seterror(errorMessage);
                setsuccess('');
            });
    }

    const handlelogin = (event) => {
        event.preventDefault()
        // console.log(event.target.check.checked);
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        signin(email, password)
            .then((userCredential) => {
                navigate(from)
                const user = userCredential.user;
                setsuccess('Successfully signed in');
                Swal.fire('Sucessfully Logged in')
                seterror('')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                })
                seterror(errorMessage);
                setsuccess('');
            })
    }

    title("Login")
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span required className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" {...register("email")} name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input required type={checked ? "text" : "password"} placeholder="password" {...register("password")} name='password' className="input input-bordered" />
                                    <p className='mt-2'><input onClick={handlecheck} type="checkbox" name="check" id="" /> Show password</p>
                                    <label className="label">
                                        <div>Not have account? <Link className="link link-info" to={"/register"}>Register Now</Link></div>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" type='submit'>Login</button>
                                </div>
                            </form>
                            <div className='flex justify-center'>
                                <button onClick={handlegooglelogin}><FaGoogle className='w-10 mt-10 h-10' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>{success}</div>
            <div>{error}</div> */}
        </div>
    );
};

export default Login;