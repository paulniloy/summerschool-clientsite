import React from 'react';
import { useQuery } from 'react-query';

const Myenrolled = () => {

    const { data: pending = [], refetch } = useQuery({
        queryKey: 'myenroll',
        queryFn: async () => {
            const res = await fetch('https://summerschool.vercel.app/getenrolled')
            return res.json()
        }
    })


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {
                pending.map(data =>
                    <div className="card w-96 bg-red-400 text-black-content">
                        <div className="card-body">
                            <img className='rounded-xl' src={data.image} alt="" />
                            <h2 className="font-bold text-2xl">{data.music_name}</h2>
                            <p className='font-medium'>Enrolled Status : {data.enrolled}</p>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Myenrolled;