import React, { useContext } from 'react';
import { Authcontext } from '../Authprovider/Auth';
import { useQuery } from 'react-query';

const Isstudent = () => {
    const {useremail} = useContext(Authcontext);
    const {data: isStudent, refetch, isloading} = useQuery({
        queryKey : ['isstudent', useremail],
        queryFn : async ()=>{
            const res = await fetch(`http://localhost:3000/user/student/${useremail}`)
            return res.json()
        }
    })
    return [isStudent, isloading];
};

export default Isstudent;