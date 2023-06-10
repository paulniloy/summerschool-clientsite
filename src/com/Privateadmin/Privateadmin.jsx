import React, { useContext } from 'react';
import { Authcontext } from '../Authprovider/Auth';
import Isadmin from '../varifyadmin/Isadmin';
import { Navigate } from 'react-router-dom';

const {loggeduser, loader} = useContext(Authcontext);
const [isAdmin, isloading] = Isadmin();

const Privateadmin = ({children}) => {

    if(loader || isloading){
        return <progress className="progress w-56"></progress>
    }

    if(loggeduser && isAdmin){
        return children;
    }
    return <Navigate state={{from: location}} replace to={"/login"}></Navigate>
};

export default Privateadmin;