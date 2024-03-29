import React, { useContext, useState } from 'react';
import title from '../../Hooks/title';
import { useQuery } from 'react-query';
import { Authcontext } from '../Authprovider/Auth';
import Isstudent from '../varifystudent/Isstudent';
import Swal from 'sweetalert2';
import Headings from '../Headings/Headings';

const Class = () => {
    const { color } = useContext(Authcontext)

    const [isStudent] = Isstudent();

    const { loggeduser } = useContext(Authcontext);
    // const [isdisable, setisdisable] = useState(false)

    title("Classes")

    const { data: show = [], refetch } = useQuery({
        queryKey: 'showclass',
        queryFn: async () => {
            const res = await fetch('https://summerschool.vercel.app/allclasses')
            return res.json()
        }
    })

    const handlepost = (data) => {

        // const bodydata = {
        //     enrolled : "pending",
        //     username : useremail
        // }
        // fetch(`https://summerschool.vercel.app/setpending/${data._id}`,{
        //     method : "PATCH",
        //     headers : {
        //         'content-type' : 'application/json'
        //     },
        //     body : JSON.stringify(bodydata)
        // }).then(res=>res.json()).then(data=>{
        //    refetch();
        //     console.log(data)
        // })


        const pendingdata = {
            enrolled: "pending",
            enrolledby: loggeduser?.email,
            item: data.music_name,
            price: data.price,
            image: data.image
        }
        console.log(pendingdata);

        fetch(`https://summerschool.vercel.app/settedpending`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(pendingdata)
        }).then(res => res.json()).then(data => {
            refetch();

            Swal.fire(
                'Added to Cart!',
                'Added Successfully!',
                'success'
            )
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
        <div>
                <Headings heading={"Summer School"} subheading={"Classes"}></Headings>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center p-10 ${color ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
                {
                    show.map(data =>
                        <div className="card w-96 bg-gray-400 text-black">
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
                                        isStudent ? <button disabled={data.enrolled == "pending" ? true : false} onClick={() => handlepost(data)} className="btn">Add to Purchase List</button> : ""
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Class;