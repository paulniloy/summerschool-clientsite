import React, { useContext } from 'react';
import { Authcontext } from '../Authprovider/Auth';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {

    const location = useLocation();
    console.log(location);
    
    const {loggeduser, loader} = useContext(Authcontext);


    if(loader){
         return <div>loading</div>
    }

    if(loggeduser){
        return children;
    }
    return <Navigate state={{from: location}} replace to={"/login"}></Navigate>;
};

export default Private;