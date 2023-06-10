import { useContext } from "react";
import { Authcontext } from "../Authprovider/Auth";
import { useQuery } from "react-query";

const Isinstructor = () => {
    const {useremail} = useContext(Authcontext);
    const {data: isInstructor, refetch, isloading} = useQuery({
        queryKey : ['isinstructor', useremail],
        queryFn : async ()=>{
            const res = await fetch(`http://localhost:3000/user/instructor/${useremail}`)
            return res.json()
        }
    })
    return [isInstructor, isloading];
};

export default Isinstructor;