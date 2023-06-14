import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Authcontext } from '../Authprovider/Auth';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { RiShoppingCartFill, RiPriceTag3Fill, RiMoneyDollarCircleFill, RiReplyFill } from "react-icons/ri";

const Myclasses = () => {

    const {loggeduser} = useContext(Authcontext)

    const { data: payment = [], refetch } = useQuery({
        queryKey: ['payment', loggeduser?.email],
        queryFn: async () => {
            const res = await fetch(`https://summerschool.vercel.app/pendingdata?email=${loggeduser?.email}`)
            return res.json()
        }
    })

    const handledelete = (id)=>{
        fetch(`https://summerschool.vercel.app/backnormal/${id}`,{
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
            <div className='grid grid-cols-1 md:grid-cols-1 mx-auto gap-5'>
                <Link className='' to={'/studentdash/payment'}><button className='btn bg-green-400 rounded-xl m-2'>Proceed to Payment</button></Link>
                {
                    payment.map(data =>
                        <div className="card w-96 bg-red-400 text-black-content">
                            <div className="card-body w-96">
                                <img className='rounded-xl' src={data.image} alt="" />
                                <h2 className="font-bold text-2xl">{data.music_name}</h2>
                                <p className='font-medium'>Enrolled Status : {data.enrolled}</p>
                            <div>
                                <button onClick={()=>handledelete(data._id)} className='btn btn-warning'>Delete Class</button>
                            </div>
                            </div>
                        </div>)
                }
            </div>
    );
};

export default Myclasses;