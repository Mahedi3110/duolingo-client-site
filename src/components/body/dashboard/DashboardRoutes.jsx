import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { DataContext } from '../../../provider/DataProvider';
import { NavLink } from 'react-router-dom';

const DashboardRoutes = () => {
    const { user, loading } = useContext(AuthContext)
    const { allUsers, loadingUsers } = useContext(DataContext)

    if (loading) {
        return (
            <div className='h-screen bg-black flex justify-center items-center'>
                <Spinner
                    aria-label="Extra large spinner example"
                    size="xl"
                />
            </div>
        )
    }

    if (loadingUsers) {
        return (
            <div className='h-screen bg-black flex justify-center items-center'>
                <Spinner
                    aria-label="Extra large spinner example"
                    size="xl"
                />
            </div>
        )
    }

    const currectUser = allUsers.find(users => users.email == user.email)

    return (
        <div>
            {
                user && currectUser?.status == 'admin' ?
                    <div className='flex flex-col'>
                        <NavLink className={({ isActive }) => isActive ? 'w-fit mb-7 font-bold border-b-4 border-lime-500 text-lime-600 mx-10' : 'w-fit mb-7 font-bold hover:text-lime-600 mx-10'} to='/dashboard/manageClasses'>Manage Classes</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'w-fit mb-7 font-bold border-b-4 border-lime-500 text-lime-600 mx-10' : 'w-fit mb-7 font-bold hover:text-lime-600 mx-10'} to='/dashboard/manageUsers'>Manage Users</NavLink>
                    </div>
                    :
                    <>
                        {
                            user && currectUser?.status == 'instructor' ?
                                <div className='flex flex-col'>
                                    <NavLink className={({ isActive }) => isActive ? 'w-fit mb-7 font-bold border-b-4 border-lime-500 text-lime-600 mx-10' : 'w-fit mb-7 font-bold hover:text-lime-600 mx-10'} to='/dashboard/addClasses'>Add a Class</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? 'w-fit mb-7 font-bold border-b-4 border-lime-500 text-lime-600 mx-10' : 'w-fit mb-7 font-bold hover:text-lime-600 mx-10'} to='/dashboard/myClasses'>My Classes</NavLink>
                                </div>
                                :
                                <div className='flex flex-col'>
                                    <NavLink className={({ isActive }) => isActive ? 'w-fit mb-7 font-bold border-b-4 border-lime-500 text-lime-600 mx-10' : 'w-fit mb-7 font-bold hover:text-lime-600 mx-10'} to='/dashboard/mySelectedClasses'>My Selected Classes</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? 'w-fit mb-7 font-bold border-b-4 border-lime-500 text-lime-600 mx-10' : 'w-fit mb-7 font-bold hover:text-lime-600 mx-10'} to='/dashboard/myEnrolledClasses'>My Enrolled Classes</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? 'w-fit mb-7 font-bold border-b-4 border-lime-500 text-lime-600 mx-10' : 'w-fit mb-7 font-bold hover:text-lime-600 mx-10'} to='/dashboard/payment'>Payment</NavLink>
                                </div>
                        }
                    </>
            }
        </div>
    );
};

export default DashboardRoutes;