import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css'
import DashboardRoutes from './DashboardRoutes';

const Dashboard = () => {
    return (
        <div>
            <div className='grid grid-cols-12 bg-lime-100'>
                <div className='col-span-3 mt-24 sideBar mb-16 ml-12'>
                    <div>
                        <DashboardRoutes></DashboardRoutes>
                    </div>
                    <div className='border-b-2 border-lime-500 mr-16'></div>
                    <div className='flex flex-col ml-10'>
                        <p className='w-fit mt-7 hover:text-lime-600 text-lg font-bold'><Link to='/home'>Home</Link></p>
                        <p className='w-fit mt-7 hover:text-lime-600 text-lg font-bold'><Link to='/instructors'>Instructors</Link></p>
                        <p className='w-fit mt-7 hover:text-lime-600 text-lg font-bold'><Link to='/classes'>Classes</Link></p>
                        <p className='w-fit mt-7 hover:text-lime-600 text-lg font-bold'><Link to='/profile'>Profile</Link></p>
                        <p className='w-fit mt-7 cursor-pointer hover:text-lime-600 text-lg font-bold'>About</p>
                        <p className='w-fit mt-7 cursor-pointer hover:text-lime-600 text-lg font-bold'>Services</p>
                        <p className='w-fit mt-7 cursor-pointer hover:text-lime-600 text-lg font-bold'>Contact</p>
                    </div>
                </div>
                <div className='col-span-9 bg-white pr-10 -ml-10'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;