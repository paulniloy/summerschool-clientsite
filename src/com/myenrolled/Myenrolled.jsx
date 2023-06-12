import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Authcontext } from '../Authprovider/Auth';

const Myenrolled = () => {

    const { loggeduser } = useContext(Authcontext);

    const { data: pending = [], refetch } = useQuery({
        queryKey: ['myenroll', loggeduser?.email],
        queryFn: async () => {
            const res = await fetch(`https://summerschool.vercel.app/getpaidclasses?email=${loggeduser?.email}`)
            return res.json()
        }
    })
    console.log(pending);


    return (
        <div className='grid grid-cols-1 md:grid-cols-1 gap-10'>
            {
                pending.map(data =>
                    <div className="card w-96 bg-green-400 text-black-content">
                        <div className="card-body">
                            <h2 className="font-bold text-2xl">Purchaser Name : {data.name}</h2>
                            <p className='font-bold italic'>Email : {data.email}</p>
                            <p className='font-bold italic'>Transaction ID : {data.transaction_id}</p>
                            <p className='font-bold italic'>Fee : ${data.price}</p>
                            <p className='font-bold'>Purchased Items :
                            </p>
                            <div>
                                {data.items_name.map(name => <li>{name}</li>)}
                            </div>
                        <p className='font-bold italic'>Enrolled : {data.enrolled}</p>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Myenrolled;