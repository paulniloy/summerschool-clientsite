import React, { useContext, useEffect, useState } from 'react';
import Nav from '../nav/Nav';
import Footer from '../Footer/Footer';
import { useForm } from "react-hook-form";
import { Authcontext } from '../Authprovider/Auth';
import axios from 'axios';
import { useLoaderData, useParams } from 'react-router-dom';



const Update = () => {
    const [previous, setprevious] = useState([])

    const {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3000/getitem/${id}`)
        .then(res=>setprevious(res.data));
    },[])
    console.log(previous);

    const { username, useremail } = useContext(Authcontext);
    const { register, handleSubmit, reset, watch, isSubmitSuccessful, formState: { errors } } = useForm();


    
    const onSubmit = data => {
        // console.log(data.name, data.insname, data.price, data.insemail, data.classname, data.classimg, data.seat, data.activityone, data.activitytwo, data.activitythree);
        const classdata = {
            music_name: data.classname, image: data.classimg, available_seats: data.seat, price: data.price
        }
        console.log(classdata);
        console.log(id);

        fetch(`http://localhost:3000/update/${id}`,{
            method : "PATCH",
            headers : {
                'content-type' : 'applicaion/json'
            },
            body : JSON.stringify(classdata)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
}



    return (
        <div>
            <Nav></Nav>
            <div>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <input required  type="text" placeholder="class name" {...register("classname")} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input required  type="url" placeholder="class image" {...register("classimg")} className="input input-bordered" />
                                </div>
                                {/* <div className="form-control">
                                <input required type="number" placeholder="students number" {...register("students")}  className="input input-bordered" />
                            </div> */}
                                <div className="form-control">
                                    <input required  type="number" placeholder="Available Seat" {...register("seat")} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input required  type="number" placeholder="Price" {...register("price")} className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Update;