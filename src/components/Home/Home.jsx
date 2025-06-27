import React, { use } from 'react';
import Banner from '../Banner/Banner';
import ActiveGardeners from '../../Pages/ActiveGardeners';
import BrowseTips from '../../Pages/Categories';
import { useLoaderData } from 'react-router';
import { GardenContext } from '../../provider/GardenContext';
import Loading from '../../Pages/Loading';
import Qna from '../../Pages/Qna';
import TopTrending from '../../Pages/TopTrending';
import Categories from '../../Pages/Categories';

const Home = () => {
    const {loading}=use(GardenContext)
        const {trendingtips,gardeners}=useLoaderData()

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <Banner></Banner>
            <ActiveGardeners gardeners={gardeners}></ActiveGardeners>
            <TopTrending trendingtips={trendingtips}></TopTrending>
         <Categories trendingtips={trendingtips}></Categories>
            <Qna></Qna>
        </div>
    );
};

export default Home;