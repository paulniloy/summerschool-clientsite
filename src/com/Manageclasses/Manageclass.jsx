import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Manageclass = () => {
    const [pending, setpending] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/getpending")
        .then(res=>{
            setpending(res.data);
        })
    },[])


    return (
        <div>
            {
                pending.map(data=><div className="text-center card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-40' src={data.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{data.instructor_name}</h2>
                  <h2 className="italic text-start text-xl">Email : {data.instructor_email}</h2>
                  <h2 className="text-center m-5 font-bold text-xl">Class Details</h2>
                  <h2 className="text-start font-bold">Class Name :{data.music_name}</h2>
                  <h2 className="text-start font-bold">Students : {data.students}</h2>
                  <h2 className="text-start font-bold">Price : ${data.price}</h2>
                  <h2 className="text-start font-bold">Available-Seats : {data.students}</h2>
                  <p className='font-bold'>Activities : </p>
                  {
                    data.activities.map(activity=>
                            <li>{activity}</li>
                        )
                  }
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default Manageclass;