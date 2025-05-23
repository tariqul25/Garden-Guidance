import React from 'react';
import TypeWriter from './TypeWriter';


const ActiveGardeners = ({ gardeners }) => {
    // console.log(gardeners); 
     const dynamicWords=['Our Active Gardener']
    return (
        <div>
           
            <TypeWriter words={dynamicWords}></TypeWriter>
            <div className='grid grid-cols-3 gap-4 my-6'>
                {
                    gardeners.map(gardener =>
                        <div key={gardener.id}>
                            <div className="card bg-base-100 dark:bg-white shadow-sm flex flex-col h-full">
                                <figure>
                                    <img src={gardener.profileImage} alt="Gardener" />
                                </figure>
                                <div className="card-body flex flex-col flex-1">
                                    <h2 className="card-title">
                                        {gardener.name}
                                        <div className="badge badge-secondary">{gardener.status}</div>
                                    </h2>
                                    <p className="flex-grow">{gardener.description}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">{gardener.location}</div>
                                        <div className="badge badge-outline">{gardener.trending}</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ActiveGardeners;