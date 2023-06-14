import React, { useContext } from 'react';
import title from '../../Hooks/title';
import { useQuery } from 'react-query';
import Headings from '../Headings/Headings';
import { RiUserStarFill } from "react-icons/ri";
import { Authcontext } from '../Authprovider/Auth';


const Instructor = () => {
    const {color} = useContext(Authcontext)
    title("Instructors Page")

    const { data: instructors = [] } = useQuery({
        queryKey: "instructorpage",
        queryFn: async () => {
            const res = await fetch("https://summerschool.vercel.app/instructorpage")
            return res.json();
        }
    })


    return (
        <div className={`-m-100px ${color ? 'bg-base-200 text-black' : 'bg-gray-800 text-white'}`}>
            <Headings heading={"Instructors Details"} subheading={"Instructors"}></Headings>
                <div className={`flex flex-col md:flex-row justify-center p-10  gap-10 ${color ? 'bg-base-200 text-black' : 'bg-gray-800 text-white'}`}>
                {
                    instructors.map(instructor =>
                        <div className="card w-96 bg-indigo-200 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={instructor.picture} alt="Shoes" className="rounded-xl w-20 h-20" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <RiUserStarFill className='w-10 h-5' />
                                <h2 className="card-title">Instructor's Name : {instructor.name}</h2>
                                <p>Email : {instructor.email}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Instructor;