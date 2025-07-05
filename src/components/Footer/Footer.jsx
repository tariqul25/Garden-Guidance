import React from 'react';

const Footer = () => {
  return (
 
      <footer className="py-16 bg-gradient-to-r from-primary to-[#8CAD88]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Connected with Nature</h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Get weekly gardening tips, seasonal advice, and community updates delivered to your inbox
            </p>
            <div className="max-w-md mx-auto">
              <div className="join w-full">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="input input-bordered text-base-content join-item w-full" 
                />
                <button className="btn btn-accent join-item">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
