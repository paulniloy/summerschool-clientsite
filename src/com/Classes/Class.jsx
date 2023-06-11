import React, { useContext, useState } from 'react';
import title from '../../Hooks/title';
import { useQuery } from 'react-query';
import { Authcontext } from '../Authprovider/Auth';
import Isstudent from '../varifystudent/Isstudent';

const Class = () => {

    const [isStudent] = Isstudent();

    const {useremail} = useContext(Authcontext);
    // const [isdisable, setisdisable] = useState(false)

    title("Classes")

    const { data: show = [], refetch } = useQuery({
        queryKey: 'showclass',
        queryFn: async () => {
            const res = await fetch('https://summerschool.vercel.app/allclasses')
            return res.json()
        }
    })

    const handlepost = (id) =>{

        const bodydata = {
            enrolled : "pending"
        }
        fetch(`https://summerschool.vercel.app/setpending/${id}`,{
            method : "PATCH",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(bodydata)
        }).then(res=>res.json()).then(data=>{
           refetch();
            console.log(data)
        })


        // fetch( `https://summerschool.vercel.app/postpending/${id}`,{
        //     method : "DELETE"
        // }).then(res=>res.json()).then(data=>{
        //     console.log(data)
        //     setisdisable(true);
        // });
        
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center m-10'>
            {
                show.map(data =>
                    <div className="card w-96 bg-red-400 text-black">
                        <div className="card-body">
                            <img className='h-56' src={data.image} alt="" />
                            <h2 className="card-title">{data.music_name}</h2>
                            <p>
                                Students : {data.students == "" ? "0" : data.students}
                            </p>
                            <p>
                                Price : ${data.price}
                            </p>
                            <p>
                                AvailableSeats : {data.available_seats}
                            </p>

                            <div className="card-actions justify-end">
                                {
                                    isStudent ? <button disabled={data.enrolled == "pending" ? true : false} onClick={()=>handlepost(data._id)} className="btn">Add to cart</button> : ""
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Class;