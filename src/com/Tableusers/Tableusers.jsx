import React, { useState } from 'react';
import { Bounce } from 'react-awesome-reveal';
import { useQuery } from 'react-query';
import { RiUserSettingsFill, RiUserStarFill } from "react-icons/ri";

const Tableusers = () => {



    const { data: admindash = [], refetch } = useQuery({
        queryKey: ["isadmin"],
        queryFn: async () => {
            const res = await fetch('https://summerschool.vercel.app/instructors')
            return res.json()
        }
    })

    const handlemakeadmin = (id) => {
        fetch(`https://summerschool.vercel.app/instructors/makeadmin/${id}`, {
            method: "PATCH",
            // headers: {
            //     "content-type": "application/json"
            // },
            // body: JSON.stringify()
        })
        .then(res=>res.json())
        .then(data=>{
            refetch();
        })
    }
    const handlemakeinstructor = (id) => {
        fetch(`https://summerschool.vercel.app/instructors/makeinstructor/${id}`, {
            method: "PATCH",
            // headers: {
            //     "content-type": "application/json"
            // },
            // body: JSON.stringify()
        })
        .then(res=>res.json())
        .then(data=>{
                refetch();
        })
    }
    // const handledelete = id =>{
    //     fetch(`https://summerschool.vercel.app/users/delete/${id}`,{
    //         method : "DELETE"
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         refetch();
    //     })
    // }

    console.log(admindash);
    return (
        <div>
            <div className="overflow-x-auto">
                <Bounce>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            admindash.map((data) =>
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={data.picture} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {data.name}
                                    </td>
                                    <td>{data.email}</td>
                                    <th>
                                        <p>{data.role}</p>
                                    </th>
                                    {/* <th>
                                        <p>{data.roleB}</p>
                                    </th> */}
                                    <th className='gap-5'>
                                        {
                                            ((data.role !== 'student') && (data.role !== 'instructor')) ? <div className='flex justify-center'><RiUserStarFill className='w-5 h-5' /></div>  : <button onClick={() => handlemakeadmin(data._id)} className="btn btn-xl"><RiUserSettingsFill className='w-5 h-5' /> Make Admin</button>
                                        }
                                    </th>
                                    <th>
                                        {
                                            ((data.role !== 'student') && (data.role !== 'admin')) ? <div className='flex justify-center'><RiUserStarFill className='w-5 h-5' /></div> : <button onClick={() => handlemakeinstructor(data._id)} className="btn btn-xl"><RiUserStarFill className='w-5 h-5' /> Make Instructor</button>
                                        }
                                    </th>
                                    {/* <th>
                                        <button className='btn btn-xl' onClick={()=>handledelete(data._id)}>Delete</button>
                                    </th> */}
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                </Bounce>
            </div>
        </div>
    );
};

export default Tableusers;