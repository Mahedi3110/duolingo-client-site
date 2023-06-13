import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { DarkThemeToggle, Navbar, Spinner, Tooltip } from 'flowbite-react';
import { MdLogout } from "react-icons/md";
import './Header.css'

const Header = () => {
    const { user, loading, logOut } = useContext(AuthContext)
    const pic = user?.photoURL?.length;
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <Navbar
                className='fixed w-full z-20 top-0 left-0 !px-12 !bg-lime-100'
                fluid={true}
            >
                <Link
                    to='/'
                    className='flex text-2xl'
                >
                    <img className='w-10' src="https://i.ibb.co/G5WpQqX/logo.png" alt="" />
                    <img className='w-40 ml-2' src="https://i.ibb.co/JF6RgpT/text.png" alt="" />
                </Link>
                <div className="flex md:order-2">
                    {loading ?
                        <Spinner className='mt-3 mb-2 mr-16 ml-9' aria-label="Default status example" />
                        :
                        user ? <div className='flex items-center'>
                            <NavLink className={({ isActive }) => isActive ? 'text-blue-700 mt-1' : 'my-1 hover:text-blue-500'} to="/profile">
                                {
                                    pic > 12 ?
                                        <Tooltip content={user.displayName}>
                                            <img className='w-10 h-10 rounded-full border-2 border-gray-400' src={user.photoURL} alt='User' />
                                        </Tooltip>
                                        :
                                        <Tooltip content={user.displayName}>
                                            <img className='w-10 h-10 rounded-full border-2 border-gray-400' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' alt='User' />
                                        </Tooltip>
                                }
                            </NavLink>
                            <Tooltip content='Log out'>
                                <button className='btn btn-link'>
                                    <MdLogout onClick={handleLogOut} className="text-3xl font-bold text-lime-500 hover:text-lime-600" />
                                </button>
                            </Tooltip>
                        </div> :
                            <NavLink to="/login" className="btn border-0 bg-lime-500 text-white text-lg font-bold normal-case hover:bg-lime-600 rounded-full px-10">Login</NavLink>
                    }

                    <Navbar.Toggle />
                </div>
                <Navbar className='!bg-transparent ml-20'>
                    <div className='mb-3 md:mb-0'>
                        <NavLink
                            className={({ isActive }) => isActive ? 'font-bold border-b-4 border-lime-500 text-lime-600 mx-10' : 'font-bold hover:text-lime-600 mx-10'}
                            to="/">
                            Home
                        </NavLink>
                    </div>
                    <div className='mb-3 md:mb-0'>
                        <NavLink
                            className={({ isActive }) => isActive ? 'font-bold border-b-4 border-lime-500 text-lime-600 mx-10' : 'font-bold hover:text-lime-600 mx-10'}
                            to="/instructors">
                            Instructors
                        </NavLink>
                    </div>
                    <div className='mb-3 md:mb-0'>
                        <NavLink
                            className={({ isActive }) => isActive ? 'font-bold border-b-4 border-lime-500 text-lime-600 mx-10' : 'font-bold hover:text-lime-600 mx-10'}
                            to="/classes">
                            Classes
                        </NavLink>
                    </div>

                    {
                        loading ?
                            <Spinner className='mt-3 mb-2 mr-16 ml-9' aria- label="Default status example" />
                            :
                            user ? <div className='mb-3 md:mb-0'>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'font-bold border-b-4 border-lime-500 text-lime-600 mx-10' : 'font-bold hover:text-lime-600 mx-10'}
                                    to="/dashboard">
                                    Dashboard
                                </NavLink>
                            </div>
                                :
                                <></>
                    }
                </Navbar>
                <DarkThemeToggle></DarkThemeToggle>
            </Navbar>
        </div>
    );
};

export default Header;