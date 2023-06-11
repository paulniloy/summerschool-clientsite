import React from 'react';
import { useQuery } from 'react-query';

const Myclasses = () => {
    const { data: payment = [], refetch } = useQuery({
        queryKey: 'payment',
        queryFn: async () => {
            const res = await fetch('https://summerschool.vercel.app/payment')
            return res.json()
        }
    })

    const handledelete = (id)=>{
        fetch(`https://summerschool.vercel.app/backnormal/${id}`,{
            method : "PATCH"
        }).then(res=>res.json()).then(data=>{
            refetch();
            console.log(data)})
    }


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    payment.map(data =>
                        <div className="card w-96 bg-red-400 text-black-content">
                            <div className="card-body">
                                <img className='rounded-xl' src={data.image} alt="" />
                                <h2 className="font-bold text-2xl">{data.music_name}</h2>
                                <p className='font-medium'>Enrolled Status : {data.enrolled}</p>
                            <div>
                                <button onClick={()=>handledelete(data._id)} className='btn btn-warning'>Delete</button>
                            </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Myclasses;