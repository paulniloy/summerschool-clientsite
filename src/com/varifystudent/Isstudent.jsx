import React, { useContext } from 'react';
import { Authcontext } from '../Authprovider/Auth';
import { useQuery } from 'react-query';
import axios from 'axios';

const Isstudent = () => {
    const {loggeduser} = useContext(Authcontext);
    const {data: isStudent, refetch, isloading} = useQuery({
        queryKey : ['isstudent', loggeduser?.email],
        queryFn : async ()=>{
            const res = await axios.get(`https://summerschool.vercel.app/user/student/${loggeduser?.email}`)
            return res.data.role;
        }
    })
    return [isStudent, isloading];
};

export default Isstudent;