import React from 'react';
const BrowseTips = ({ alltips }) => {
    console.log(alltips);
    return (
        <div className=''>
            {
                alltips.map(tips =>
                    <div className='mb-4'>
                        <div className="card bg-green-300 text-gray w-full ">
                            <div className="card-body items-center text-justify flex flex-col-reverse">
                                <h2 className="card-title text-xs">{tips.tips}</h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary btn-sm">{tips.trending}</button>
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