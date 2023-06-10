import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Auth, { Authcontext } from '../Authprovider/Auth';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Showclasses = () => {
    const { useremail, loader } = useContext(Authcontext);
    // const [classes, setclasses] = useState([]);
    const token = localStorage.getItem('token');
    console.log(token);



    const { data: classes = [], refetch } = useQuery({
        queryKey: ['class', useremail],
        enabled: !loader,
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/userclasses?email=${useremail}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        }
    })


    // useEffect(()=>{
    //     axios.get(`http://localhost:3000/userclasses?email=${useremail}`,{
    //         headers : {
    //             authorization : `bearer ${token}`
    //         }
    //     })
    //     .then(data=>{
    //         setclasses(data.data)})
    // },[])

    // const { data: classes = [], refetch } = useQuery({
    //     queryKey: ['classesdata', useremail],
    //     queryFn: async () => await fetch(`http://localhost:3000/userclasses?email=${useremail}`)
    //         .then(res => res.json())
    // })


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {
                classes.map(data =>
                    <div className={`card w-96 ${data.available_seats == 0 ? "bg-red-400" : "bg-base-100"} ${data.status == 'denied' ? "bg-red-600" : ""} shadow-xl`}>
                        <figure className="px-10 pt-10">
                            <img src={data.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{data.music_name}</h2>
                            <p className='font-bold'>Status : {data.status}</p>
                            <p className='font-bold'>Price : ${data.price}</p>
                            <p className='font-bold'>Students : {data.enrolled}</p>
                            <p className='font-bold'>Feedback : {data.feedback}</p>
                            <p className='font-bold'>Available Seats : {data.available_seats}</p>
                            {/* <p>{data.activities.map(activity=>
                                <li>{activity}</li>
                                )}</p>
                            */}

                            {
                                data.status == "denied" ? "" : <Link className={`btn bg-primary text-white`} to={`/class/updateclass/${data._id}`}>Update</Link>
                            }
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Showclasses;