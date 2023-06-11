import React from 'react';
import { useQuery } from 'react-query'

const Popclass = () => {

    const {data: classes=[]} = useQuery({
        queryKey : ["classes"], 
        queryFn : async ()=>{
            const res = await fetch('https://summerschool.vercel.app/popclasses')
            return res.json()
        }
    })
    console.log(classes);

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center align-center'>
            {
                classes.slice(0,6).map(dt=>
                    <div className="card w-96 bg-yellow-400 p-5 text-black shadow-xl m-10">
                    <figure><img className='w-40 rounded-xl' src={dt.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {dt.music_name}
                        <div className="badge badge-secondary">Popular</div>
                      </h2>
                        <h3 className='italic font-medium'>Total students : {dt.students}</h3>
                      <p>{dt.activities.map(list=><li>{list}</li>)}</p>
                    </div>
                  </div>
                    )
            }
        </div>
    );
};

export default Popclass;