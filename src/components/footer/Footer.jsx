import React from 'react';
import { FaGoogle, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='md:px-20 px-10 bg-black text-white py-16'>
            <div className='grid md:grid-cols-6 grid-cols-3 gap-10 mx-4 mb-5'>
                <div className='col-span-2'>
                    <Link
                        to='/'
                        className='flex text-2xl'
                    >
                        <img className='w-10' src="https://i.ibb.co/G5WpQqX/logo.png" alt="" />
                        <img className='w-40 ml-2' src="https://i.ibb.co/JF6RgpT/text.png" alt="" />
                    </Link>
                    <p className="mb-4 mt-2 text-gray-400">Duolingo is a popular language learning website that offers bite-sized lessons, interactive exercises, and gamification to make language learning enjoyable and accessible to everyone. Start your language journey today</p>
                    <div className='flex mt-5'>
                        <button className='btn btn-link px-2'><FaGoogle className='text-3xl text-lime-500' /></button>
                        <button className='btn btn-link px-2'><FaFacebook className='text-3xl text-lime-500' /></button>
                        <button className='btn btn-link px-2'><FaTwitter className='text-3xl text-lime-500' /></button>
                        <button className='btn btn-link px-2'><FaInstagram className='text-3xl text-lime-500' /></button>
                    </div>
                </div>
                <div className='md:ml-5 ml-0'>
                    <h1 className='text-lg font-bold mb-4'>About Us</h1>
                    <p className="mb-2 text-gray-400">Courses</p>
                    <p className="mb-2 text-gray-400">Classes</p>
                    <p className="mb-2 text-gray-400">Services</p>
                    <p className="mb-2 text-gray-400">Avialablity</p>
                    <p className="mb-2 text-gray-400">Instructors</p>
                </div>
                <div>
                    <h1 className='text-lg font-bold mb-4'>Payment Option</h1>
                    <p className="mb-2 text-gray-400">Davit Card</p>
                    <p className="mb-2 text-gray-400">Credit Card</p>
                    <p className="mb-2 text-gray-400">Master Card</p>
                    <p className="mb-2 text-gray-400">Mobile Banking</p>
                    <p className="mb-2 text-gray-400">Bank Transfer</p>
                </div>
                <div className='ml-5'>
                    <h1 className='text-lg font-bold mb-4'>Offers</h1>
                    <p className="mb-2 text-gray-400">Discount</p>
                    <p className="mb-2 text-gray-400">Membership</p>
                    <p className="mb-2 text-gray-400">Toppers offer</p>
                    <p className="mb-2 text-gray-400">Summer Offer</p>
                    <p className="mb-2 text-gray-400">Pricing</p>
                </div>
                <div>
                    <h1 className='text-lg font-bold mb-4'>Contact</h1>
                    <p className="mb-4 text-gray-400">798 Mitaly Bhaban, Dampara, Wasa, Chittagong</p>
                    <p className='text-gray-400'>+8801830-256-369</p>
                    <p className='mt-3 text-gray-400'>gameon@gmail.com</p>
                </div>
            </div>
            <hr className='hr-style' />
            <div className='flex justify-between mt-5 mx-4'>
                <p className='text-gray-400'>@2023 duolingo. All Rights Reserved</p>
                <p className='text-gray-400'>Powered by duolingo</p>
            </div>
        </div>
    );
};

export default Footer;