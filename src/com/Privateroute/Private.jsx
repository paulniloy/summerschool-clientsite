import React, { useContext } from 'react';
import { Authcontext } from '../Authprovider/Auth';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {

    const location = useLocation();
    console.log(location);
    
    const {loggeduser, loader} = useContext(Authcontext);


    if(loader){
         return <progress className="progress w-56"></progress>
    }

    if(loggeduser){
        return children;
    }
    return <Navigate to={"/login"}></Navigate>;
};

export default Private;