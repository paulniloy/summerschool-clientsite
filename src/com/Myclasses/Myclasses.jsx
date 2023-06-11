import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Authcontext } from '../Authprovider/Auth';
import Swal from 'sweetalert2';

const Myclasses = () => {

    const {loggeduser} = useContext(Authcontext)

    const { data: payment = [], refetch } = useQuery({
        queryKey: ['payment', loggeduser?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/pendingdata?email=${loggeduser?.email}`)
            return res.json()
        }
    })

    const handledelete = (id)=>{
        fetch(`http://localhost:3000/backnormal/${id}`,{
            method : "DELETE"
        }).then(res=>res.json()).then(data=>{
            Swal.fire(
                'Removed from Cart',
                'Removed Successfully!',
                'success'
            )
            refetch();
    })
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