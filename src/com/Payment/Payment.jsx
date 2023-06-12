import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../Authprovider/Auth';
import Swal from 'sweetalert2';
import { useQuery } from 'react-query';

const Payment = ({ price, data, reload }) => {
    const stripe = useStripe();
    const elements = useElements();
    const token = localStorage.getItem('token')
    const [error, seterror] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const { loggeduser } = useContext(Authcontext);

    const {refetch} = useQuery();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://summerschool.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.clientSecret);
                setClientSecret(data.clientSecret)
            });
    }, []);
    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     fetch("/create-payment-intent", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             authorization: `bearer ${token}`
    //         },
    //         body: JSON.stringify({ price }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setClientSecret(data)
    //         });
    // }, []);
    // console.log(clientSecret);
    console.log(data);



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            seterror(error.message)
        } else {
            seterror('')
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: confirmerror } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: loggeduser?.email || 'annonymous',
                        name: loggeduser?.displayName || 'annonymous'
                    },
                },
            },
            )
            if(paymentIntent.status == "succeeded"){
                Swal.fire(
                    'Payment Successful!',
                    'You have purchased selected items!',
                    'success'
                )
                const paymentinfo = {
                                name : loggeduser?.displayName,
                                email : loggeduser?.email,
                                transaction_id : paymentIntent.id,
                                price,
                                quantity : data.length,
                                items : data.map(item=> item._id),
                                items_name : data.map(item=>item.item)
                            }
                            await fetch(`https://summerschool.vercel.app/paidclasses`, {
                                method : "POST",
                                headers : {
                                    'content-type' : 'application/json'
                                },
                                body : JSON.stringify(paymentinfo)
                            }).then(res=>res.json()).then(data=>{
                                refetch();
                                console.log(data)})
            }
        };
        // if (paymentIntent) {
        //     return console.log(paymentIntent);
        // }
        // else{
        //     console.log(paymentIntent);
            
        //     
        //         await fetch(`https://summerschool.vercel.app/deletecartdata?email=${loggeduser?.email}`,{
        //             method : "DELETE",
        //         }).then(res=>res.json()).then(data=>{
        //             refetch();
        //             console.log(data);
        //         })
        // }

    return (
        <div>
            <form className='bg-base-200 p-10 rounded-xl' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-outline mt-5' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            <div className='text-red-600 m-5 font-bold italic'>
                {error}
            </div>
        </div>
    );
};

export default Payment;