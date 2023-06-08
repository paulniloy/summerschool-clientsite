import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import title from '../../Hooks/title';
import { Authcontext } from '../Authprovider/Auth';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    title("Registartion")
    const [letconfirm, setletconfirm] = useState(false)
    const [confirmdisabled, setconfirmdisabled] = useState(true)
    const [pass, setpass] = useState(null)
    const [confirm, setconfirm] = useState(false);
    const [success, setsuccess] = useState('');
    const [error, seterror] = useState('');

    const { registered, profileupdate } = useContext(Authcontext);
    const navigate = useNavigate()


    const onSubmit = data => {
        console.log(data);
        if (!/(?=.*[A-Z])(?=.*[!@#$&*]).{6}/.test(data.password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "add atleast a capital character and a special character",
            })
            return;
        }
        else {
            registered(data.email, data.password)
                .then((userCredential) => {
                    const instructors = {
                        name : data.name, picture : data.photo, email : data.email, role : "student", roleB : "student"
                    }
                    const user = userCredential.user;
                    profileupdate(data.name, data.photo)
                    fetch("http://localhost:3000/instructors", {
                        method : "POST",
                        headers : {
                            'content-type' : 'application/json'
                        },
                        body : JSON.stringify(instructors)
                    })
                    setsuccess('Successfully registered');
                    seterror('')
                    Swal.fire('Successfully Registered and Logged in');
                    navigate("/");
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
                });
        }
        
    }


    const handlepassword = e => {
        e.preventDefault()
        const passed = e.target.value;
        setpass(passed)
        setletconfirm(true)
        if (passed) {
            setconfirmdisabled(false)
        }
        else {
            setconfirmdisabled(true)
        }
    }

    const handleconfirm = e => {
        e.preventDefault()
        // sethandlechange()
        if (e.target.value == pass) {
            setconfirm(false)
        }
        else (
            setconfirm(true)
        )
    }

    const handleregister = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const picture = form.photo.value;
        const name = form.name.value;
        const password = form.password.value;
        console.log(name, picture);
        console.log(email, password);
        const instructordata = {
            name, email, picture
        }
        if (!/(?=.*[A-Z])(?=.*[!@#$&*]).{6}/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "add atleast a capital character and a special character",
            })
            return;
        }
        else {
            registered(email, password)
                .then((userCredential) => {
                    const instructors = {
                        name, picture, email, role : "student", roleB : "student"
                    }
                    const user = userCredential.user;
                    profileupdate(name, picture)
                    fetch("http://localhost:3000/instructors", {
                        method : "POST",
                        headers : {
                            'content-type' : 'application/json'
                        },
                        body : JSON.stringify(instructors)
                    })
                    setsuccess('Successfully registered');
                    seterror('')
                    Swal.fire('Successfully Registered and Logged in');
                    navigate("/");
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
                });
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input required type="text" {...register("email")} placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" {...register("name")} name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Picture</span>
                                    </label>
                                    <input type="url" placeholder="url" {...register("photo")} name='photo' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input required onChange={handlepassword} {...register("password")} type="password" placeholder="password" name='password' className="input input-bordered" />
                                </div>
                                {/* <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input disabled={confirmdisabled} onKeyUp={handleconfirm} type="password" placeholder="password" name='confirm' className="input input-bordered" />
                                </div> */}
                                <p>Already Have an account? <Link className="link link-info" to={"/login"}>Login</Link></p>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" disabled={confirm} type='submit'>Register</button>
                                </div>
                                <div>
                                    {success}
                                </div>
                                <div>
                                    {error}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;