import React from 'react';
import { useLoaderData } from 'react-router';


const TipsDetails = () => {
    const gardener= useLoaderData()
    console.log(gardener);
 
    return (
        <div className='w-full flex my-6 gap-4'>
           <div className='w-5/12 bg-green-400 rounded-md space-y-4 p-4    '>
                <p>{gardener.topic}</p>
                <p>{gardener.title}</p>
                <p>{gardener.category}</p>
                <p>{gardener.description}</p>
                <p>{gardener.difficulty}</p>
           </div>
           <div className='w-7/12 relative '>
            <img className=' h-96  w-full object-cover rounded-xl' src='https://i.ibb.co/cS12qYwV/IMG-20250501-225320.png' alt="" />
            {/* <p className='absolute bottom-16'>like</p> */}
           </div>
        </div>
    );
};

export default TipsDetails;