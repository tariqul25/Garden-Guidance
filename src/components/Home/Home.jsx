import React from 'react';
import Banner from '../Banner/Banner';
import ActiveGardeners from '../../Pages/ActiveGardeners';
import BrowseTips from '../../Pages/BrowseTips';
import { useLoaderData } from 'react-router';

const Home = () => {
    const {alltips,gardeners}=useLoaderData()
    // console.log(alltips);
    // console.log(gardeners);
    return (
        <div>
            <Banner></Banner>
            <ActiveGardeners gardeners={gardeners}></ActiveGardeners>
            <BrowseTips alltips={alltips}></BrowseTips>
        </div>
    );
};

export default Home;