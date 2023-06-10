import { useContext } from "react";
import { Authcontext } from "../Authprovider/Auth";
import { useQuery } from "react-query";

const Isadmin = () => {
    const {useremail} = useContext(Authcontext);
    const {data: isAdmin, refetch, isloading} = useQuery({
        queryKey : ['isadmin', useremail],
        queryFn : async ()=>{
            const res = await fetch(`http://localhost:3000/user/admin/${useremail}`)
            return res.json()
        }
    })
    return [isAdmin, isloading];
};

export default Isadmin;