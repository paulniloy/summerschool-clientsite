import { useContext } from "react";
import { Authcontext } from "../Authprovider/Auth";
import { useQuery } from "react-query";
import axios from "axios";

const Isadmin = () => {
    const {loggeduser} = useContext(Authcontext);
    const {data: isAdmin={}, refetch, isloading} = useQuery({
        queryKey : ['admin', loggeduser?.email],
        queryFn : async ()=>{
            const res = await axios.get(`http://localhost:3000/user/admin/${loggeduser?.email}`)
            return res.data.role
        }
    })
    return [isAdmin, isloading];
};

export default Isadmin;