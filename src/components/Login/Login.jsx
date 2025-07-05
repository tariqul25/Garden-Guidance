import React, { useContext, useState } from 'react';
import { GardenContext } from '../../provider/GardenContext';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { passSignIn, GoogleSignIn } = useContext(GardenContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handlePassSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setErrorMessage('');

    passSignIn(email, password)
      .then(() => {
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    GoogleSignIn()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Signed in successfully',
          toast: true,
          position: 'top',
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch(error => {
        alert(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12 bg-gradient-to-br from-[#0F4C3A]/20 to-[#8CAD88]/20 dark:from-[#8CAD88]/20 dark:to-[#0F4C3A]/20">
      <div className="w-full max-w-md bg-white dark:bg-[#1a202c] rounded-xl shadow-2xl p-6 md:p-8 space-y-6">
        <div className="text-center mb-4">
          <div className="mx-auto mb-4 flex items-center justify-center rounded-full w-16 h-16 bg-[#0F4C3A] dark:bg-[#8CAD88]">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F4C3A] dark:text-[#8CAD88]">Welcome Back</h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Sign in to your gardening account</p>
        </div>

        <form onSubmit={handlePassSignIn} className="space-y-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#0F4C3A] dark:text-[#8CAD88]">Email</label>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 pl-10 bg-white dark:bg-[#2d3748] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F4C3A] dark:focus:ring-[#8CAD88]"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#0F4C3A] dark:text-[#8CAD88]">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                required
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 pl-10 pr-10 bg-white dark:bg-[#2d3748] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F4C3A] dark:focus:ring-[#8CAD88]"
              />
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {errorMessage && (
            <p className="text-sm text-red-500 text-center">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 rounded-md text-white font-medium bg-[#0F4C3A] dark:bg-[#8CAD88] hover:bg-[#0a3529] dark:hover:bg-[#7a9c76] transition"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center my-2">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          <span className="mx-2 text-xs text-gray-500 dark:text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-2 w-full py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#2d3748] transition"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        <p className="text-center text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-4">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="font-medium text-[#0F4C3A] dark:text-[#8CAD88] hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
