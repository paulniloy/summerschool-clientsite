import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';

const Manageclass = () => {
    // const [pending, setpending] = useState([]);

    // useEffect(()=>{
    //     axios.get("http://localhost:3000/getpending")
    //     .then(res=>{
    //         setpending(res.data);
    //     })
    // },[])

    const [denieddata, setdenieddata] = useState("")

    const { data: pending = [], refetch } = useQuery({
        queryKey: ['classs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/getpending')
            return res.json();
        }
    })

    const handledelete = (data) => {
        const feedback = {
            denieddata, status : "denied"
        }

        fetch(`http://localhost:3000/feedbacksend/${data}`, {
            method: "PATCH",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(feedback)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire(
                    'Added Class Successfully!',
                    'Go to myclasses to see the added class',
                    'success'
                  )
                refetch();
            })
    }

    const handledata = (data) => {
        console.log(data._id);
        // const classdata = {
        //     instructor_name: data.instructor_name, instructor_email: data.instructor_email,
        //     music_name: data.music_name, image: data.image, available_seats: data.available_seats, activities: data.activities, price: data.price, students: data.students, status: "approved"
        // }
        fetch(`http://localhost:3000/addtoclasses/${data._id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire(
                    'Added Class Successfully',
                    'Go to Classes to see the class',
                    'success'
                )
                refetch();
            }
            )

    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {
                pending.map(data => <div className={`text-center card w-96 ${data.available_seats == 0 ? 'bg-red-600' : 'bg-base-200'} shadow-xl`}>
                    <figure><img className='w-40' src={data.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{data.instructor_name}</h2>
                        <h2 className="italic text-start text-xl">Email : {data.instructor_email}</h2>
                        <h2 className="text-center m-5 font-bold text-xl">Class Details</h2>
                        <h2 className="text-start font-bold">Class Name :{data.music_name}</h2>
                        <h2 className="text-start font-bold">Students : {data.students == "" ? "0" : data.students}</h2>
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
                            {/* <div onClick={() => handledelete(data)} className="card-actions justify-end">
                                <button className="btn btn-primary">Delete</button>
                            </div> */}
                            <div>
                                <button className="btn" onClick={() => window.my_modal_2.showModal()}>Denied</button>
                                <dialog id="my_modal_2" className="modal">
                                    <form method="dialog" className="modal-box bg-gray-200 ">
                                        <h3 className="font-bold text-lg">Feedback!</h3>
                                        <input onChange={(e)=>setdenieddata(e.target.value)} name='data' type="text" placeholder='Denied Quote' className='p-5 bg-white rounded-xl w-full'/>
                                        <button onClick={()=>handledelete(data._id)} type='submit' className='btn mt-5'>Send</button>
                                    </form>
                                    <form method="dialog" className="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Manageclass;