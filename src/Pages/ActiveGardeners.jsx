import { Leaf, Users } from 'lucide-react';
import React from 'react';
const ActiveGardeners = ({ gardeners }) => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-base-content dark:text-base-content flex items-center justify-center gap-2">
              <Users className="w-8 h-8 text-primary" />
            Featured Active Gardeners
          </h2> 
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Connect with our community's most experienced and active gardeners who share their knowledge daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gardeners.map(({ _id, image, name, status, age, gender, expertise, experience, totalTips }) => (
            <div key={_id} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg">
              <figure className="px-6 pt-6">
                <img
                  src={image}
                  alt={`Portrait of ${name}`}
                  className="rounded-full w-24 h-24 object-cover"
                  loading="lazy"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-black dark:text-white text-lg">{name}</h3>
                <div className="badge badge-primary badge-sm">{status}</div>
                <div className="text-sm text-base-content/70 space-y-1 mt-2">
                  <p>Age: {age} • {gender}</p>
                  <p>Specialty: {expertise}</p>
                  <p>Experience: {experience}</p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                 <Leaf className="w-4 h-4 text-green-500" />
                  <span className="font-semibold">{totalTips} tips shared</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActiveGardeners;
