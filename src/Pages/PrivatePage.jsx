import React, { use } from 'react';
import { GardenContext } from '../provider/GardenContext';
import { Navigate, useLocation } from 'react-router';
import Loading from './Loading';

const PrivatePage = ({children}) => {
    const {user,loading}=use(GardenContext)
    const location =useLocation()
    console.log(location);
         if(loading){
          return <Loading></Loading>
        }
        if(user){
            return children;
        }
        return  <Navigate state={location.pathname} to='/login'></Navigate>

};

export default PrivatePage;