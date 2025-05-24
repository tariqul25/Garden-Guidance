import React from 'react';

const BrowseTips = ({ alltips }) => {
    console.log(alltips);
    return (
        <div>
            {
                alltips.map(tips =>
                    <div key={tips._id} className='mb-4'>
                        <div className="card bg-green-200 text-gray w-full">
                            <div className="card-body items-center text-justify flex flex-col-reverse">
                                <h2 className="card-title text-xs dark:text-gray">{tips.tips}</h2>
                               <div>
                                 <span className='flex justify-center items-center'><img src={tips.image} className='w-6 h-6  rounded-full' alt="" /></span>
                                <div className="card-actions justify-end">
                                    {
                                        tips.trending && (
                                            <div className="rating w-21">
                                                {
                                                    [...Array(5)].map((_, index) => (
                                                        <input
                                                            key={index}
                                                            type="radio"
                                                            name={`rating-${tips._id}`}
                                                            className="mask mask-star bg-yellow-400"
                                                            checked
                                                            readOnly
                                                        />
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                               </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default BrowseTips;
