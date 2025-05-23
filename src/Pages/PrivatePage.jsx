import React, { use } from 'react';
import { GardenContext } from '../provider/GardenContext';
import { Navigate, useLocation } from 'react-router';
import Loading from './Loading';

const PrivatePage = ({children}) => {
    const {user,loading}=use(GardenContext)
    console.log(loading);
    const location =useLocation()
         if(loading){
          return <Loading></Loading>
        }
        if(user){
            return children;
        }
        return  <Navigate state={location.pathname} to='/login'></Navigate>

};

export default PrivatePage;