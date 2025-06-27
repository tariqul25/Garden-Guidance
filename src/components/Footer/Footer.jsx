import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-400 text-black  dark:bg-green-400 dark:text-black py-10">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 mx-auto mb-5">
        
        {/* Contact Info */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Contact Us</h2>
          <p>Email: support@example.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* Terms */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Legal</h2>
          <ul className="space-y-1">
            <li><a href="#" className="link link-hover">Terms of Service</a></li>
            <li><a href="#" className="link link-hover">Privacy Policy</a></li>
            <li><a href="#" className="link link-hover">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-sky-500 hover:text-sky-700">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

      </div>
      <hr className='w-11/12 mx-auto'/>
      
      <div className="mt-5 text-center text-sm text-black dark:text-black">
        © {new Date().getFullYear()} GreenHaven. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
