import React, { useContext } from 'react';
import title from '../../Hooks/title';
import { useQuery } from 'react-query';
import { Authcontext } from '../Authprovider/Auth';

const Class = () => {

    const {useremail} = useContext(Authcontext)

    title("Classes")

    const { data: show = [], resfetch } = useQuery({
        queryKey: 'showclass',
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/allclasses')
            return res.json()
        }
    })

    // const handlepost = (id) =>{
        
    // }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center m-10'>
            {
                show.map(data =>
                    <div className="card w-96 bg-red-400 text-black">
                        <div className="card-body">
                            <img className='h-56' src={data.image} alt="" />
                            <h2 className="card-title">{data.music_name}</h2>
                            <p>
                                Students : {data.students}
                            </p>
                            <p>
                                Price : ${data.price}
                            </p>
                            <p>
                                AvailableSeats : {data.available_seats}
                            </p>

                            <div className="card-actions justify-end">
                                <button onClick={()=>handlepost(data._id)} className="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Class;