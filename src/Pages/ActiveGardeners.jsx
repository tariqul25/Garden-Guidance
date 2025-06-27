import React from 'react';
import TypeWriter from './TypeWriter';
import { Link } from 'react-router'; 

const ActiveGardeners = ({ gardeners }) => {
  const dynamicWords = ['Our Active Gardener'];

  return (
    <div className="px-4">
      <TypeWriter words={dynamicWords}></TypeWriter>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6">
        {gardeners.map((gardener) => (
          <div key={gardener.id} className="w-full">
            <div className="card bg-green-50 shadow-sm flex flex-col h-full">
              {/* Image */}
              <figure className="aspect-[4/3] overflow-hidden">
                <img
                  src={gardener.image}
                  alt="Gardener"
                  className="object-cover w-full h-full"
                />
              </figure>

              {/* Divider */}
              <hr className="border-t border-gray-200" />

              {/* Content */}
              <div className="card-body flex flex-col flex-1">
                <h2 className="card-title">
                  {gardener.name}
                  <div className="badge badge-secondary">{gardener.status}</div>
                </h2>
                <p className="flex-grow text-sm text-gray-700">{gardener.description}</p>
                <div className="card-actions justify-end mt-2">
                  <Link to="/alltips">
                    <div className="btn btn-sm">See More</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveGardeners;
