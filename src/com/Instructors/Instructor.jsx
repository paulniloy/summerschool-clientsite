import React from 'react';
import title from '../../Hooks/title';
import { useQuery } from 'react-query';
import Headings from '../Headings/Headings';
import { RiUserStarFill } from "react-icons/ri";


const Instructor = () => {
    title("Instructors Page")

    const { data: instructors = [] } = useQuery({
        queryKey: "instructorpage",
        queryFn: async () => {
            const res = await fetch("http://localhost:3000/instructorpage")
            return res.json();
        }
    })


    return (
        <div>
            <Headings heading={"Instructors Details"} subheading={"Instructors"}></Headings>
            <div className='flex flex-col md:flex-row justify-center p-10 bg-base-200 gap-10'>
            {
                instructors.map(instructor =>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={instructor.picture} alt="Shoes" className="rounded-xl w-20 h-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <RiUserStarFill className='w-10 h-5'/>
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