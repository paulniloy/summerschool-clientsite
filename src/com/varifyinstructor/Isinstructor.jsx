import { useContext } from "react";
import { Authcontext } from "../Authprovider/Auth";
import { useQuery } from "react-query";
import axios from "axios";

const Isinstructor = () => {
    const {loggeduser} = useContext(Authcontext);
    const {data: isInstructor, refetch, isloading} = useQuery({
        queryKey : ['isinstructor', loggeduser?.email],
        queryFn : async ()=>{
            const res = await axios.get(`https://summerschool.vercel.app/user/instructor/${loggeduser?.email}`)
            return res.data.role
        }
    })
    return [isInstructor, isloading];
};

export default Isinstructor;