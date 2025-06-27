import React from 'react';

const TopTrending = ({ trendingtips }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {trendingtips.map((trends, index) => (
        <div key={index} className="w-full">
          <div
            className="card bg-cover bg-center shadow-xl image-full group aspect-[4/3]"
            style={{
              backgroundImage: `url('${trends.image}')`,
            }}
          >
            <div className="card-body flex flex-col justify-between">
              {/* Author Info */}
              <div className="flex items-center gap-3">
                <img
                  src="/manu.png"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full border-2 object-cover"
                />
                <div>
                  <p className="text-white font-semibold">{trends.name}</p>
                  <p className="bg-green-400 w-7 rounded flex justify-center text-yellow-200 text-sm">
                    {trends.trending}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="card-title text-white">{trends.expertise}</h2>
                <p className="text-white text-sm mt-2 line-clamp-3">
                  {trends.tips}
                </p>
                <div className="mt-3 flex justify-end">
                  <button className="btn btn-xs btn-outline text-white">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopTrending;
