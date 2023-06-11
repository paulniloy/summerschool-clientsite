import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import Payment from '../Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from 'react-query';

const stripePromise = loadStripe(import.meta.env.VITE_payment);
const Paymentmethod = () => {

    const { data: pay = [], refetch } = useQuery({
        queryKey: 'pay',
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/payment')
            return res.json()
        }
    })
    const total = pay.reduce((sum,item)=>sum + parseInt(item.price),0)
    const price = parseFloat(total.toFixed(2))
    // console.log(typeof(price))

    return (
        <div className='m-5'>
            <Elements stripe={stripePromise}>
                <Payment price={price} data={pay}></Payment>
            </Elements>
                <div className='bg-base-200 w-1/2 rounded-xl p-5'>
                    <h2 className='font-bold text-blue-600'>Total Fee : <span className='font-medium italic text-red-600'>${total}</span></h2>
                </div>
        </div>
    );
};

export default Paymentmethod;