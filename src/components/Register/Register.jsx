import React, { use } from 'react';
import { GardenContext } from '../../provider/GardenContext';
import { Link } from 'react-router';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';
import Swal from 'sweetalert2';

const Register = () => {

    const { createUser, GoogleSignIn, setErrorMessage, errorMessage } = use(GardenContext)
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const user = Object.fromEntries(formData.entries())
        const { email, password, name, photoURL } = user

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
                    console.log(result);
                }).catch((error) => {
                    setErrorMessage(error)
                });
                console.log(result.user)
                alert('user added')
            }).catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })

    }
    const handleGoogleSignIn = () => {
        GoogleSignIn()
            .then(result => {
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
            })
            .catch(error => {
                console.log(error);
                alert(error)
            })
    }
    return (
        <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl my-8 mx-auto">
            <h2 className='text-3xl text-center'>Register Now</h2>
            <div className="card-body">
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" required/>
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" required />
                    <label className="label">photoURL</label>
                    <input type="text" name='photoURL' className="input" placeholder="PhotoURL" required />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" required />
                    <div><a className="link link-hover">Already Have an Account?</a><Link className='underline text-blue-900' to='/login'>Login</Link></div>
                    {
                        errorMessage && <p className='text-red-600 w-11/12 mx-auto text-center'>{errorMessage}</p>
                    }
                    <input type='submit' className="btn btn-neutral mt-4" value='Register' />
                </form>
                <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>

        </div>
    );
};

export default Register;