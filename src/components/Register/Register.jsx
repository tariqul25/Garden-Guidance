import React, { use } from 'react';
import { GardenContext } from '../../provider/GardenContext';
import { Link, useLocation, useNavigate } from 'react-router';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';
import Swal from 'sweetalert2';

const Register = () => {

    const { createUser, GoogleSignIn, setErrorMessage, errorMessage } = use(GardenContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const user = Object.fromEntries(formData.entries())
        const { email, password, name, photoURL } = user

        setErrorMessage('')

        const passRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
        if (name.length < 6) {
            return setErrorMessage('Name should be atleast 6 character')
        }
        if (passRegEx.test(password) === false) {
            setErrorMessage('Password must be 1 lower case, 1 upper case and at least 6 character')
            return;
        }


        createUser(email, password)
            .then(result => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoURL
                }).then((result) => {
                    //  console.log(result);
                }).catch((error) => {
                    setErrorMessage(error)
                });
                //  console.log(result.user)
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }

                });
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });
                navigate('/');
            }).catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })

    }
    const handleGoogleSignIn = () => {
        GoogleSignIn()
            .then(result => {
                //  console.log(result.user.email);
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }

                });
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });
                navigate('/');
            })
            .catch(error => {
                //  console.log(error);

            })
    }
    return (
        // <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl my-8 mx-auto">
        //     <h2 className='text-3xl text-center'>Register Now</h2>
        //     <div className="card-body">
        //         <form onSubmit={handleRegister} className="fieldset">
        //             <label className="label">Name</label>
        //             <input type="text" name='name' className="input" placeholder="Name" required/>
        //             <label className="label">Email</label>
        //             <input type="email" name='email' className="input" placeholder="Email" required />
        //             <label className="label">photoURL</label>
        //             <input type="text" name='photoURL' className="input" placeholder="PhotoURL" required />
        //             <label className="label">Password</label>
        //             <input type="password" name='password' className="input" placeholder="Password" required />
        //             <div><a className="link link-hover">Already Have an Account?</a><Link className='underline text-blue-900' to='/login'>Login</Link></div>
        //             {
        //                 errorMessage && <p className='text-red-600 w-11/12 mx-auto text-center'>{errorMessage}</p>
        //             }
        //             <input type='submit' className="btn btn-neutral mt-4" value='Register' />
        //         </form>
        //         <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
        //             <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
        //             Login with Google
        //         </button>
        //     </div>

        // </div>
        // <section class="bg-white dark:bg-gray-900">
        //     <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
        //         <form class="w-full max-w-md">
        //             <div class="flex justify-center mx-auto">
        //                 <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="">
        //             </div>

        //             <div class="flex items-center justify-center mt-6">
        //                 <a href="#" class="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300">
        //                     sign in
        //                 </a>

        //                 <a href="#" class="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
        //                     sign up
        //                 </a>
        //             </div>

        //             <div class="relative flex items-center mt-8">
        //                 <span class="absolute">
        //                     <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        //                         <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        //                     </svg>
        //                 </span>

        //                 <input type="text" class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username">
        //             </div>

        //             <label for="dropzone-file" class="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
        //                 <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        //                     <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        //                 </svg>

        //                 <h2 class="mx-3 text-gray-400">Profile Photo</h2>

        //                 <input id="dropzone-file" type="file" class="hidden" />
        //             </label>

        //             <div class="relative flex items-center mt-6">
        //                 <span class="absolute">
        //                     <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        //                         <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        //                     </svg>
        //                 </span>

        //                 <input type="email" class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address">
        //             </div>

        //             <div class="relative flex items-center mt-4">
        //                 <span class="absolute">
        //                     <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        //                         <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        //                     </svg>
        //                 </span>

        //                 <input type="password" class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password">
        //             </div>

        //             <div class="relative flex items-center mt-4">
        //                 <span class="absolute">
        //                     <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        //                         <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        //                     </svg>
        //                 </span>

        //                 <input type="password" class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Confirm Password">
        //             </div>

        //             <div class="mt-6">
        //                 <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
        //                     Sign Up
        //                 </button>

        //                 <div class="mt-6 text-center ">
        //                     <a href="#" class="text-sm text-blue-500 hover:underline dark:text-blue-400">
        //                         Already have an account?
        //                     </a>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        // </section>
        <div className="card bg-base-100 w-full max-w-md shadow-2xl mx-auto my-10">
            <div className="card-body">
                <div className="flex justify-center mb-4">
                    <img src="logo.png" alt="logo" className="h-10" />
                </div>

                <div className="flex justify-center gap-4 border-b pb-4 mb-6">
                    <a className="text-blue-600 dark:text-green-300 border-b-2 border-blue-500 font-semibold">Sign Up</a>
                </div>

                <form onSubmit={handleRegister}>
                    <label className="label">
                        <span className="label-text dark:text-green-300">Username</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Username"
                        className="input input-bordered w-full dark:text-green-300 "
                        required
                    />

                    <label className="label">
                        <span className="label-text dark:text-green-300">Profile Photo</span>
                    </label>
                    <input
                        type="text"
                        name="photoURL"
                        placeholder="Photo URL"
                        className="input input-bordered w-full dark:text-green-300 "
                        required
                    />

                    <label className="label">
                        <span className="label-text dark:text-green-300">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input input-bordered w-full dark:text-green-300 "
                        required
                    />

                    <label className="label">
                        <span className="label-text dark:text-green-300">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="input input-bordered w-full dark:text-green-300 "
                        required
                    />



                    {
                        errorMessage && <p className="text-red-600 dark:text-red-400 mt-2 text-center">{errorMessage}</p>
                    }

                    <input type="submit" value="Sign Up" className="btn btn-primary w-full mt-4" />

                    <div className="text-center mt-4">
                        <p className="text-sm dark:text-green-300">
                            Already have an account? <Link to="/login" className="text-blue-600 underline dark:text-green-200">Login</Link>
                        </p>
                    </div>
                </form>

                <div className="divider dark:text-green-300">OR</div>

                <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-gray-300 w-full dark:bg-gray-800 dark:text-green-200">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    <span className="ml-2">Login with Google</span>
                </button>
            </div>
        </div>


    );
};

export default Register;