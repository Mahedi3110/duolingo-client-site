import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiGamepad } from "react-icons/gi";
import { AuthContext } from '../provider/AuthProvider';
import { Navbar, Spinner, Tooltip } from 'flowbite-react';
import { IoIosLogOut } from "react-icons/io";

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
                className='!bg-black fixed w-full z-20 top-0 left-0 !px-10 shadow-xl shadow-black'
                fluid={true}
            >
                <Link
                    to='/'
                    className='text-orange-400 flex font-bold text-3xl'
                >GA<GiGamepad className='-mt-1 text-5xl -ml-1' /><span className='-ml-1.5 mr-3'>E</span> ON</Link>
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
                                    <IoIosLogOut onClick={handleLogOut} className="text-3xl text-orange-400 hover:text-orange-600" />
                                </button>
                            </Tooltip>
                        </div> :
                            <NavLink to="/login" className="btn hover:bg-gradient-to-r hover:from-orange-400 hover:to-amber-500 normal-case border-4 border-orange-400 font-bold rounded-full px-6 hover:border-0 hover:px-7 hover:text-white bg-transparent text-center mr-3 md:mr-0 text-orange-400 text-lg">Login</NavLink>
                    }

                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <div className='mb-3 md:mb-0'>
                        <NavLink
                            className={({ isActive }) => isActive ? 'py-2 px-3 text-white bg-orange-400 mx-2 font-bold rounded-full border-orange-400' : 'hover:bg-orange-400 py-2 px-3 rounded-full hover:text-white mx-2 text-orange-400'}
                            to="/">
                            Home
                        </NavLink>
                    </div>
                    <div className='mb-3 md:mb-0'>
                        <NavLink
                            className={({ isActive }) => isActive ? 'py-2 px-3 text-white bg-orange-400 mx-2 font-bold rounded-full border-orange-400' : 'hover:bg-orange-400 py-2 px-3 rounded-full hover:text-white mx-2 text-orange-400'}
                            to="/all-products">
                            All Products
                        </NavLink>
                    </div>

                    {
                        loading ?
                            <Spinner className='mt-3 mb-2 mr-16 ml-9' aria- label="Default status example" />
                            :
                            user ? <div className='mb-3 md:mb-0'>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'py-2 px-3 text-white bg-orange-400 mx-2 font-bold rounded-full border-orange-400' : 'hover:bg-orange-400 py-2 px-3 rounded-full hover:text-white mx-2 text-orange-400'}
                                    to="/my-choice">
                                    My Products
                                </NavLink>
                            </div>
                                :
                                <></>
                    }

                    {
                        loading ?
                            <Spinner className='mt-3 mb-2 mr-16 ml-9' aria- label="Default status example" />
                            :
                            user ? <div className='mb-3 md:mb-0'>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'py-2 px-3 text-white bg-orange-400 mx-2 font-bold rounded-full border-orange-400' : 'hover:bg-orange-400 py-2 px-3 rounded-full hover:text-white mx-2 text-orange-400'}
                                    to="/add-product">
                                    Add A Product
                                </NavLink>
                            </div>
                                :
                                <></>
                    }

                    <div className='mb-3 md:mb-0'>
                        <NavLink
                            className={({ isActive }) => isActive ? 'py-2 px-3 text-white bg-orange-400 mx-2 font-bold rounded-full border-orange-400' : 'hover:bg-orange-400 py-2 px-3 rounded-full hover:text-white mx-2 text-orange-400'}
                            to="/About">
                            About
                        </NavLink>
                    </div>
                    <div className='mb-3 md:mb-0'>
                        <NavLink
                            className={({ isActive }) => isActive ? 'py-2 px-3 text-white bg-orange-400 mx-2 font-bold rounded-full border-orange-400' : 'hover:bg-orange-400 py-2 px-3 rounded-full hover:text-white mx-2 text-orange-400'}
                            to="/blog">
                            Blog
                        </NavLink>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;