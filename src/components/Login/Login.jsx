import React, { use, useState } from 'react';
import { GardenContext } from '../../provider/GardenContext';
import { Link } from 'react-router';

const Login = () => {
    const [errorMessage, SetErrorMessage] = useState('')
    const { passSignIn, GoogleSignIn } = use(GardenContext)
    const handlePassSignIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        SetErrorMessage('')


        passSignIn(email, password)
            .then(result => {
                console.log(result.user);
                alert('sign in success')
            })
            .catch(error => {
                SetErrorMessage(error);
            })

    }

    const handleGoogleSignIn=()=>{
        GoogleSignIn()
        .then(result =>{
            console.log(result.user);
            alert('user addded successfully')
        })
        .catch(error =>{
            console.log(error);
            alert(error)
        })
    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-8">
                <div className="card-body">
                    <h1 className='text-3xl text-center'>Login Now</h1>
                    <form onSubmit={handlePassSignIn} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" name='email' placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" name='password' placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <input className="btn btn-neutral mt-4" type='submit' value='Login' />
                    </form>
                    <p className=''>New to this website?<Link className='underline text-blue-900' to='/register'>Register</Link></p>
                    <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    {
                        errorMessage ? <p>Error</p> : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;