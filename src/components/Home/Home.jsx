import React, { use } from 'react';
import Banner from '../Banner/Banner';
import ActiveGardeners from '../../Pages/ActiveGardeners';
import BrowseTips from '../../Pages/BrowseTips';
import { useLoaderData } from 'react-router';
import { GardenContext } from '../../provider/GardenContext';
import Loading from '../../Pages/Loading';

const Home = () => {
    const {loading}=use(GardenContext)
        const {alltips,gardeners}=useLoaderData()
    //  console.log(alltips);
    //  console.log(gardeners);
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <Banner></Banner>
            <ActiveGardeners gardeners={gardeners}></ActiveGardeners>
            <BrowseTips alltips={alltips}></BrowseTips>
        </div>
    );
};

export default Home;