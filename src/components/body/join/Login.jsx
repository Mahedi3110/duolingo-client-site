import React, { useContext, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import useTitle from '../../../hooks/useTitle';

const Login = () => {

    useTitle("Login")

    const { joinByGoogle, logIn, resetPassword, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/home';

    const [showPass1, setShowPass1] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [border3, setBorder3] = useState(true)

    const wrongIDPass = () => toast(<p className='text-center'>You entered wrong email or password. <br /> Please try again.</p>);

    const handleGoogleSignIn = () => {
        joinByGoogle()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
                setLoading(false)
            })
            .catch(error => {
                console.log(error.message);
                setLoading(false)
            })
    }
    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        logIn(email, password)
            .then(result => {
                navigate(from, { replace: true })
                setLoading(false)
            })
            .catch(error => {
                wrongIDPass()
                setBorder3(false)
                setLoading(false)
            })
    }
    const recoverPassword = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        resetPassword(email)
            .then(() => {
                console.log('check your email');
            })
            .catch(error => {
                console.log(error.message);
            })
        setClicked(true)
    }

    return (
        <div className="hero min-h-80 pt-32 pb-32 bg-black">
            <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                className="hero-content flex-col lg:flex-row-reverse pt-0 md:w-4/12 w-10/12">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-orange-200">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='relative'>
                                    <input type={showPass1 ? 'text' : 'password'} placeholder="password" name='password' className={border3 ? "input input-bordered w-full border-gray-300" : "input input-bordered w-full border-red-700"} required />
                                    <div className='absolute top-3 right-3'>
                                        {
                                            showPass1 ? <AiFillEye onClick={() => setShowPass1(!showPass1)} className="cursor-pointer text-2xl text-orange-500" /> : <AiFillEyeInvisible onClick={() => setShowPass1(!showPass1)} className="cursor-pointer text-2xl text-orange-500" />
                                        }
                                    </div>
                                </div>
                                <label htmlFor="my-modal-4" className="label label-text-alt link link-hover">Forgot password?</label>
                            </div>
                            <div className="form-control mt-6 flex flex-col items-center">
                                <button type='submit' className="btn w-full 
                                bg-gradient-to-r from-orange-400 to-amber-500 border-0 hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-600
                                normal-case font-bold text-lg rounded-full">Login</button>
                                <p className='ml-2'>Don't have an account? <Link to="/register" className="btn modal-button normal-case text-orange-400 hover:text-orange-600 btn-link p-0 ml-1">Please Register.</Link></p>
                            </div>
                        </form>
                        <div className='mt-0 flex flex-col items-center'>
                            <h1>You can also login with <span onClick={handleGoogleSignIn} className='text-2xl border-0 p-0 ml-1 normal-case font-bold text-orange-400 btn btn-link'>Google</span></h1>
                        </div>
                    </div>
                </div>
            </div>


            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative max-w-md">
                    <label htmlFor="my-modal-4" className="btn btn-sm bg-orange-400 hover:bg-orange-600 border-0 btn-circle absolute right-2 top-2">✕</label>
                    {
                        clicked ?
                            <div className='flex flex-col items-center'>
                                <p className='text-center mx-5 my-5'>We just send a password recovery mail to you. Check your email and click the link in it. And then set a new password</p>
                                <button onClick={() => setClicked(false)} className='btn text-lg normal-case font-bold bg-gradient-to-r from-orange-400 to-amber-500 border-0 hover:bg-gradient-to-r rounded-full hover:from-orange-600 hover:to-orange-600'>Send again</button>
                            </div>
                            :
                            <form onSubmit={recoverPassword} className='flex flex-col mt-5 mb-3'>
                                <p className='text-center mx-5 mb-5'>If you forgot your password and want to recover it then put your eamil here and click the submit button</p>
                                <input type="email" id='email' name='email' placeholder='email' className='mx-5 rounded-lg' required />
                                <input type='submit' value='Submit' className='btn rounded-full text-lg mx-5 mt-5 normal-case font-bold bg-gradient-to-r from-orange-400 to-amber-500 border-0 hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-600' />
                            </form>
                    }
                </div>
            </div>


            <Toaster
                toastOptions={{
                    style: {
                        padding: '16px',
                    },
                }}
            />
        </div>
    );
};

export default Login;