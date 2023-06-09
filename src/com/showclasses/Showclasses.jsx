import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Authcontext } from '../Authprovider/Auth';
import axios from 'axios';

const Showclasses = () => {
    const { useremail } = useContext(Authcontext);
    const [classes, setclasses] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3000/userclasses?email=${useremail}`)
        .then(data=>setclasses(data.data))
    },[])

    // const { data: classes = [], refetch } = useQuery({
    //     queryKey: ['classesdata', useremail],
    //     queryFn: async () => await fetch(`http://localhost:3000/userclasses?email=${useremail}`)
    //         .then(res => res.json())
    // })


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {
                classes.map(data =>
                    <div className={`card w-96 ${data.available_seats == 0 ? "bg-red-400" : "bg-base-100"} shadow-xl`}>
                        <figure className="px-10 pt-10">
                            <img src={data.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{data.music_name}</h2>
                            <p className='font-bold'>Status : Approved</p>
                            <p className='font-bold'>Price : ${data.price}</p>
                            <p className='font-bold'>Students : {data.students}</p>
                            <p className='font-bold'>Available Seats : {data.available_seats}</p>
                            {/* <p>{data.activities.map(activity=>
                                <li>{activity}</li>
                                )}</p>
                            */}
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Showclasses;