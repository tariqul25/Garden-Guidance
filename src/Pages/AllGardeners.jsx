import React, { useEffect, useState } from 'react';
import { Leaf, MapPin, Clock } from 'lucide-react';
import useAxios from '../hooks/useAxios';

const AllGardeners = () => {
  const axiosSecure = useAxios();
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    axiosSecure.get('api/allgardeners')
      .then(res => {
        setGardeners(res.data);
      })
      .catch(err => {
        console.error('Failed to fetch gardeners:', err);
      });
  }, [axiosSecure]);

  return (
    <div className="min-h-screen bg-base-100 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl text-base-content font-bold mb-4">Explore Gardeners</h1>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Connect with passionate gardeners from around the world and learn from their expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gardeners.map(({ _id, image, name, status, expertise, age, experience, totalTips, location }) => (
            <div key={_id} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg">
              <figure className="px-6 pt-6">
                <img
                  src={image}
                  alt={`Portrait of ${name}`}
                  className="rounded-full w-24 h-24 object-cover"
                  loading="lazy"
                />
              </figure>

              <div className="card-body">
                <div className="text-center mb-4">
                  <h3 className="card-title text-lg text-base-content justify-center">{name}</h3>
                  <div className="flex justify-center gap-2 mt-2">
                    <div className="badge badge-primary badge-sm">{status}</div>
                    <div className="badge badge-outline text-base-content badge-sm">{expertise}</div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-base-content/70">Age:</span>
                    <span className="font-medium text-base-content">{age}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-base-content/70">Experience:</span>
                    <span className="font-medium text-base-content flex items-center gap-1">
                      <Clock className="w-3 text-base-content h-3" aria-hidden="true" />
                      {experience}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-base-content/70">Tips Shared:</span>
                    <span className="font-medium flex text-base-content items-center gap-1">
                      <Leaf className="w-3 h-3 text-green-500" aria-hidden="true" />
                      {totalTips}
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-center font-bold gap-1 text-xs text-base-content/70 mb-2">
                    <MapPin className="w-3 h-3" aria-hidden="true" />
                    {location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllGardeners;
