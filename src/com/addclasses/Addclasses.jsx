import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Authcontext } from '../Authprovider/Auth';
import Swal from 'sweetalert2';
import { RiFileAddFill } from "react-icons/ri";
const Addclasses = () => {

    const {username, useremail} = useContext(Authcontext);

    const { register, handleSubmit, reset, watch, isSubmitSuccessful, formState: { errors } } = useForm();     

    const onSubmit = data =>{
        // console.log(data.name, data.insname, data.price, data.insemail, data.classname, data.classimg, data.seat, data.activityone, data.activitytwo, data.activitythree);
        const classdata = {
            instructor_name : username, instructor_email : useremail,
            music_name : data.classname, image : data.classimg, available_seats : data.seat, activities : [data.activityone, data.activitytwo, data.activitythree], price : data.price, status : "pending", enrolled : "0", feedback: "", students : ""
        }

        fetch('https://summerschool.vercel.app/pending',{
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(classdata)
        })
        .then((res)=>res.json())
        .then(data=>{
            Swal.fire(
                'Added Class Successfully!',
                'Go to myclasses to see the added class',
                'success'
              )
            console.log(data);
            reset();
        })
    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-lg text-black bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <input required defaultValue={username} disabled type="text" placeholder="instructor's name" {...register("insname")}  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input required defaultValue={useremail} disabled type="text" placeholder="instructor's email" {...register("insemail")}  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input required type="text" placeholder="class name" {...register("classname")}  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input required type="url" placeholder="class image" {...register("classimg")}  className="input input-bordered" />
                            </div>
                            {/* <div className="form-control">
                                <input required type="number" placeholder="students number" {...register("students")}  className="input input-bordered" />
                            </div> */}
                            <div className="form-control">
                                <input required type="number" placeholder="Available Seat" {...register("seat")}  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input required type="number" placeholder="Price" {...register("price")}  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input required type="text" placeholder="activityone" {...register("activityone")}  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input required type="text" placeholder="activitytwo" {...register("activitytwo")}  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input required type="text" placeholder="activitythree" {...register("activitythree")}  className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary"><RiFileAddFill />Add Class</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addclasses;