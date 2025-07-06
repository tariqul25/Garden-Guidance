import React, { useContext, useState } from 'react';
import { GardenContext } from '../../provider/GardenContext';
import { Link, useLocation, useNavigate } from 'react-router';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';
import Swal from 'sweetalert2';
import { User, Mail, Lock, Eye, EyeOff, Image, UserPlus } from 'lucide-react';

const Register = () => {
  const { createUser, GoogleSignIn, setErrorMessage, errorMessage } = useContext(GardenContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Your palette colors as hex from tailwind config:
  const colors = {
    primary: '#0F4C3A',
    primaryFocus: '#0a3529',
    primaryContent: '#ffffff',
    secondary: '#8CAD88',
    secondaryContent: '#ffffff',
    base100Light: '#ffffff',
    base100Dark: '#1a202c',
    baseContentLight: '#1a202c',
    baseContentDark: '#f7fafc',
    error: '#e53e3e',
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());
    const { email, password, name, photoURL } = user;

    setErrorMessage('');

    const passRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    if (name.length < 6) {
      return setErrorMessage('Name should be at least 6 characters');
    }
    if (!passRegEx.test(password)) {
      return setErrorMessage('Password must include lowercase, uppercase, special character, and be at least 8 characters long');
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        }).catch((error) => {
          setErrorMessage(error);
        });

        Swal.fire({
          icon: 'success',
          title: 'Signed up successfully',
          toast: true,
          position: 'top',
          timer: 1500,
          showConfirmButton: false,
        });

        navigate('/');
      })
      .catch((error) => {
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
        navigate('/');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12 ">
      <div className="w-full max-w-md bg-white dark:bg-[#1a202c] rounded-xl shadow-2xl p-6 md:p-8 space-y-6">
        <div className="text-center mb-6">
          <div
            className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
            style={{
              backgroundColor: colors.secondary,
              color: colors.secondaryContent,
            }}
          >
            <UserPlus className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold">Join GardenHub</h2>
          <p  >
            Create your gardening account
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          {/** Each form-control block with relative icon and input */}
          {[
            {
              label: 'Name',
              name: 'name',
              type: 'text',
              placeholder: 'Enter your full name',
              Icon: User,
            },
            {
              label: 'Email',
              name: 'email',
              type: 'email',
              placeholder: 'Enter your email',
              Icon: Mail,
            },
            {
              label: 'Photo URL',
              name: 'photoURL',
              type: 'url',
              placeholder: 'Enter your photo URL',
              Icon: Image,
            },
          ].map(({ label, name, type, placeholder, Icon }) => (
            <div className="form-control" key={name}>
              <label className="label">
                <span className="label-text font-medium">{label}</span>
              </label>
              <div className="relative">
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  required
                  className="input input-bordered w-full pl-10"
                  style={{
                    color: theme === 'light' ? colors.baseContentLight : colors.baseContentDark,
                    backgroundColor: theme === 'light' ? colors.base100Light : colors.base100Dark,
                    borderColor: theme === 'light' ? colors.primary : colors.secondary,
                  }}
                />
                <Icon
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  style={{ color: `${theme === 'light' ? colors.baseContentLight : colors.baseContentDark}80` }}
                />
              </div>
            </div>
          ))}

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Create a strong password"
                required
                className="input input-bordered w-full pl-10 pr-10"
                style={{
                  color: theme === 'light' ? colors.baseContentLight : colors.baseContentDark,
                  backgroundColor: theme === 'light' ? colors.base100Light : colors.base100Dark,
                  borderColor: theme === 'light' ? colors.primary : colors.secondary,
                }}
              />
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                style={{ color: `${theme === 'light' ? colors.baseContentLight : colors.baseContentDark}80` }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                aria-label="Toggle password visibility"
                style={{ color: theme === 'light' ? colors.baseContentLight : colors.baseContentDark }}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {errorMessage && (
            <p
              className="text-center"
              style={{
                color: colors.error,
              }}
            >
              {errorMessage}
            </p>
          )}

          <input
            type="submit"
            value="Create Account"
            className="w-full rounded-md font-semibold py-2 cursor-pointer"
            style={{
              backgroundColor: colors.secondary,
              color: colors.secondaryContent,
            }}
          />
        </form>

        <div className="divider my-6" style={{ borderColor: theme === 'light' ? colors.primary : colors.secondary }} />

        <button
          onClick={handleGoogleSignIn}
          className="w-full rounded-md font-semibold py-2 cursor-pointer flex justify-center items-center gap-2 border"
          style={{
            borderColor: theme === 'light' ? colors.primary : colors.secondary,
            color: theme === 'light' ? colors.primary : colors.secondary,
            backgroundColor: 'transparent',
          }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </button>

        <div className="text-center mt-6 text-sm" >
          Already have an account?{' '}
          <Link to="/login" className="font-medium underline" style={{ color: colors.primary }}>
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
