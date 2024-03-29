import React from 'react';
import { useQuery } from 'react-query';
import { RiUserStarFill } from "react-icons/ri";

const Popinstructors = () => {
    const {data: instructors=[]} = useQuery({
        queryKey : ["instructors"], 
        queryFn : async ()=>{
            const res = await fetch('https://summerschool.vercel.app/popinstructors')
            return res.json()
        }
    })
    console.log(instructors);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center align-center m-10'>
            {
                instructors.map(ins=>
                    <div className="card w-96 bg-pink-400 p-5 text-black shadow-xl">
                    <figure><img className='w-40 h-40 rounded-xl' src={ins.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {ins.name}
                        <div className="badge badge-primary">Popular</div>
                        <RiUserStarFill/>
                      </h2>
                        <h3 className='italic font-medium'>Email : {ins.email}</h3>
                        <h3 className='italic font-medium'>Price : ${ins.price}</h3>
                        <h3 className='italic font-medium'>Category : {ins.music_name}</h3>
                        <h3 className='italic font-medium'>Vacancy : {ins.available_seats}</h3>
                        <h3 className='italic font-medium'>Students : {ins.students}</h3>
                        <h3 className='italic font-medium'>Total students : {ins.students}</h3>
                    </div>
                  </div>
                )
            }
        </div>
    );
};

export default Popinstructors;