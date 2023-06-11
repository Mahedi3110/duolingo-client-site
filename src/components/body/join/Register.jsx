import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Register = () => {

    const exist = () => toast("This email address is already exist.");
    const sixPass = () => toast("Password can't be less than six digit.");
    const passError = () => toast("Confirm password dosen't match.");
    const strongPass = () => toast("Please input a strong password.");
    const successful = () => toast("Registration successful.");
    const unsuccessful = () => toast("Unsuccessful registration.");

    const { createUser, joinByGoogle, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/home';

    const [showPass2, setShowPass2] = useState(false)
    const [showPass3, setShowPass3] = useState(false)
    const [desable, setDesable] = useState(true)
    const [border1, setBorder1] = useState(true)
    const [border2, setBorder2] = useState(true)

    const check = () => {
        setDesable(!desable)
    }
    const handleGoogleSignIn = () => {
        joinByGoogle()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
                setLoading(false)
                const saveUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    img: result.user.photoURL,
                    status: "student"
                }
                fetch('http://localhost:7000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            successful()
                        }
                        else {
                            unsuccessful()
                        }
                    })
            })
            .catch(error => {
                console.log(error.message);
                setLoading(false)
            })
    }
    const handleSignUp = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const photo = event.target.image.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        const fullName = event.target.fullName.value;
        const pass = password.length;
        if (pass < 6) {
            sixPass()
            setBorder1(false)
            return
        }
        if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
            strongPass()
            setBorder1(false)
            return;
        }
        setBorder1(true)
        if (confirmPassword !== password) {
            passError()
            setBorder2(false)
            return
        }
        createUser(email, password)
            .then(result => {
                const logInUser = result.user
                updateProfile(logInUser, { displayName: fullName, photoURL: photo })
                    .then(() => {
                        navigate(from, { replace: true })
                        setLoading(false)
                        const saveUser = {
                            name: fullName,
                            email: email,
                            img: photo,
                            status: "student"
                        }
                        fetch('http://localhost:7000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    successful()
                                }
                                else {
                                    unsuccessful()
                                }
                            })

                    })
                    .catch(error => {
                        exist()
                        setLoading(false)
                        console.log(error.message);
                    })
            })
            .catch(error => {
                exist()
                setLoading(false)
                console.log(error.message);
            })
    }

    return (
        <div className='pt-16 pb-44'>
            <div className='flex justify-center items-center h-screen'>
                <div
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                    className="hero bg-lime-100 rounded-xl w-2/6 mt-24">
                    <div className="flex-col lg:flex-row-reverse w-full px-5 pt-5">
                        <div className="flex-shrink-0 w-full">
                            <form onSubmit={handleSignUp}>
                                <div>
                                    <div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Full Name</span>
                                            </label>
                                            <input type="text" placeholder="full name" name='fullName' className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Image</span>
                                            </label>
                                            <input type="img" placeholder="image url" name='image' className="input input-bordered pt-2 pl-2" required />
                                        </div>
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
                                                <input type={showPass2 ? 'text' : 'password'} placeholder="password" name='password' className={border1 ? "input input-bordered w-full border-gray-300" : "input input-bordered w-full border-red-700"} required />
                                                <div className='absolute top-3 right-3'>
                                                    {
                                                        showPass2 ? <AiFillEye onClick={() => setShowPass2(!showPass2)} className="cursor-pointer text-2xl text-lime-600" /> : <AiFillEyeInvisible onClick={() => setShowPass2(!showPass2)} className="cursor-pointer text-2xl text-lime-600" />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Confirm Password</span>
                                            </label>
                                            <div className='relative'>
                                                <input type={showPass3 ? 'text' : 'password'} placeholder="confirm password" name='confirmPassword' className={border2 ? "input input-bordered w-full border-gray-300" : "input input-bordered w-full border-red-700"} required />
                                                <div className='absolute top-3 right-3'>
                                                    {
                                                        showPass3 ? <AiFillEye onClick={() => setShowPass3(!showPass3)} className="cursor-pointer text-2xl text-lime-600" /> : <AiFillEyeInvisible onClick={() => setShowPass3(!showPass3)} className="cursor-pointer text-2xl text-lime-600" />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center mt-3'>
                                    <input onChange={check} className='mt-4 rounded-sm mr-2' type="checkbox" />
                                    <p>Accept our<span className='btn btn-link -ml-3 text-lime-600 hover:text-lime-800 cursor-pointer'>terms and conditions</span></p>
                                </div>
                                <div className="form-control mt-3 modal-action">
                                    {
                                        desable ?
                                            <button className="btn w-3/5 rounded-full border-0 mx-auto bg-lime-500 hover:bg-lime-600" disabled>Sign Up</button>
                                            :
                                            <button className="btn w-3/5 rounded-full border-0 mx-auto bg-lime-500 hover:bg-lime-600">Sign Up</button>
                                    }
                                    <p className='ml-2 text-center'>Already have an account? <Link to="/login" className="btn modal-button normal-case text-lime-600 hover:text-lime-800 btn-link p-0 ml-1">Please Login.</Link></p>
                                </div>
                            </form>
                            <div className='mt-5 mb-2 flex flex-col items-center'>
                                <h1>You can also register with <span onClick={handleGoogleSignIn} className='text-2xl border-0 p-0 ml-1 normal-case font-bold text-lime-600 hover:text-lime-800 btn btn-link'>Google</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Toaster
                toastOptions={{
                    style: {
                        padding: '16px'
                    }
                }}
            />
        </div>
    );
};

export default Register;