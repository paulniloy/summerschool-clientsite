import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const Manageclass = () => {
    // const [pending, setpending] = useState([]);

    // useEffect(()=>{
    //     axios.get("http://localhost:3000/getpending")
    //     .then(res=>{
    //         setpending(res.data);
    //     })
    // },[])

    const { data: pending = [], refetch } = useQuery({
        queryKey: ['classs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/getpending')
            return res.json();
        }
    })
    console.log(pending);

    const handledelete = (data) => {
        fetch(`http://localhost:3000/deletepending/${data._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                refetch();
            })
    }

    const handledata = (data) => {
        const classdata = {
            instructor_name: data.instructor_name, instructor_email: data.instructor_email,
            music_name: data.music_name, image: data.image, available_seats: data.available_seats, activities: data.activities, price: data.price, students: data.students, status: "approved"
        }
        fetch(`http://localhost:3000/addtoclasses`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(classdata)
        })
            .then((res) => res.json())
            .then(data => {
                refetch();
            })

        fetch(`http://localhost:3000/pendingdelete/${data._id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
            })
    }


    return (
        <div className='flex flex-col md:flex-row gap-10'>
            {
                pending.map(data => <div className={`text-center card w-96 ${data.available_seats == 0 ? 'bg-red-600' : 'bg-base-200'} shadow-xl`}>
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
                            data.activities.map(activity =>
                                <li>{activity}</li>
                            )
                        }
                        <div className='flex md:justify-evenly md:flex-row flex-col'>
                            <div onClick={() => handledata(data)} className="card-actions justify-end">
                                <button className="btn btn-primary">Add Data</button>
                            </div>
                            <div onClick={() => handledelete(data)} className="card-actions justify-end">
                                <button className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Manageclass;