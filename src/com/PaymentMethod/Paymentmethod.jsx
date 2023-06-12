import { Elements } from '@stripe/react-stripe-js';
import React, { useContext } from 'react';
import Payment from '../Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { Authcontext } from '../Authprovider/Auth';

const stripePromise = loadStripe(import.meta.env.VITE_payment);
const Paymentmethod = () => {

    const {loggeduser} = useContext(Authcontext);

    const { data: data = [], refetch } = useQuery({
        queryKey: ['pay', loggeduser?.email],
        queryFn: async () => {
            const res = await fetch(`https://summerschool.vercel.app/payment?email=${loggeduser?.email}`)
            return res.json()
        }
    })
    const total = data.reduce((sum,item)=>sum + parseInt(item.price),0)
    const price = parseFloat(total.toFixed(2))
    // console.log(typeof(price))

    return (
        <div className='m-5'>
            <Elements stripe={stripePromise}>
                <Payment price={price} data={data} reload={refetch}></Payment>
            </Elements>
                <div className='bg-base-200 w-1/2 rounded-xl p-5'>
                    <h2 className='font-bold text-blue-600'>Total Fee : <span className='font-medium italic text-red-600'>${total}</span></h2>
                </div>
        </div>
    );
};

export default Paymentmethod;