git pull origin main
import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { GardenContext } from '../Provider/GardenContext';


const TipsDetails = () => {
    const { like, setLike } = use(GardenContext)
    const [click, setClick] = useState(false)
    // console.log(click);
    // console.log(like);
    const gardener = useLoaderData()
    // console.log(gardener);

    const handleLikeBtn = () => {
        const totalLike = like + 1
        setLike(totalLike)
        setClick(() => !click)
        if (click === false) {
            const likes = like - 1;
            setLike(likes)
        }
        console.log(click);
    }

    return (
        <div>
            <span className='flex justify-center mt-4'><button onClick={() => handleLikeBtn()} className={`btn btn-primary`} >like-{`${like}`}</button></span>
            <div className='w-full flex my-6 gap-4'>
                <div className='w-5/12 bg-green-400 rounded-md space-y-4 p-4    '>
                    <p>{gardener.topic}</p>
                    <p>{gardener.title}</p>
                    <p>{gardener.category}</p>
                    <p>{gardener.description}</p>
                    <p>{gardener.difficulty}</p>
                </div>
                <div className='w-7/12 relative '>
                    <img className=' h-96  w-full object-cover rounded-xl' src={gardener.imageUrl} alt="" />
                    {/* <p className='absolute bottom-16'>like</p> */}
                </div>
            </div>
        </div>
    );
};

export default TipsDetails;