import React from 'react';
import { useQuery } from 'react-query'

const Popclass = () => {

    const {data: classes=[]} = useQuery({
        queryKey : ["classes"], 
        queryFn : async ()=>{
            const res = await fetch('http://localhost:3000/popclasses')
            return res.json()
        }
    })
    console.log(classes);

    return (
        <div className='grid grid-cols-3 gap-10 justify-items-center align-center'>
            {
                classes.map(dt=>
                    <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-40' src={dt.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {dt.music_name}
                        <div className="badge badge-secondary">Popular</div>
                      </h2>
                      <p>{dt.activities.map(list=><li>{list}</li>)}</p>
                    </div>
                  </div>
                    )
            }
        </div>
    );
};

export default Popclass;