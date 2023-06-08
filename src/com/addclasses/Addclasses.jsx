import React from 'react';
import { useForm } from "react-hook-form";

const Addclasses = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data =>{
        // console.log(data.name, data.insname, data.price, data.insemail, data.classname, data.classimg, data.seat, data.activityone, data.activitytwo, data.activitythree);
        const classdata = {
            instructor_name : data.insname, instructor_email : data.insemail,
            music_name : data.classname, image : data.classimg, available_seats : data.seat, activities : [data.activityone, data.activitytwo, data.activitythree], price : data.price, students : data.students, status : "pending"
        }

        fetch('http://localhost:3000/pending',{
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(classdata)
        })
        .then((res)=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="instructor's name" {...register("insname")}  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="instructor's email" {...register("insemail")}  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="class name" {...register("classname")}  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="url" placeholder="class image" {...register("classimg")}  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="number" placeholder="students number" {...register("students")}  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="number" placeholder="Available Seat" {...register("seat")}  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="number" placeholder="Price" {...register("price")}  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="activityone" {...register("activityone")}  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="activitytwo" {...register("activitytwo")}  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="activitythree" {...register("activitythree")}  className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Class</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addclasses;