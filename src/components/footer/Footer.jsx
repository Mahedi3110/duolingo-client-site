import React from 'react';
import { FaGoogle, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import './Footer.css'
import { Link } from 'react-router-dom';
import { GiGamepad } from 'react-icons/gi';

const Footer = () => {
    return (
        <div className='md:px-20 px-10 bg-black text-white py-16'>
            <div className='grid md:grid-cols-6 grid-cols-3 gap-10 mx-4 mb-5'>
                <div className='col-span-2'>
                    <Link
                        to='/'
                        className='text-orange-400 flex font-bold text-3xl'
                    >GA<GiGamepad className='-mt-1 text-5xl -ml-1' /><span className='-ml-1.5 mr-3'>E</span> ON</Link>
                    <p className="mb-4 text-gray-400">Discover top-quality gaming components at our ecommerce store. Choose from a wide range of processors, graphics cards, and more for an immersive gaming experience. Shop now</p>
                    <div className='flex mt-5'>
                        <button className='btn btn-link px-2'><FaGoogle className='text-3xl text-orange-400' /></button>
                        <button className='btn btn-link px-2'><FaFacebook className='text-3xl text-orange-400' /></button>
                        <button className='btn btn-link px-2'><FaTwitter className='text-3xl text-orange-400' /></button>
                        <button className='btn btn-link px-2'><FaInstagram className='text-3xl text-orange-400' /></button>
                    </div>
                </div>
                <div className='md:ml-5 ml-0'>
                    <h1 className='text-lg font-bold mb-4'>About Us</h1>
                    <p className="mb-2 text-gray-400">Products</p>
                    <p className="mb-2 text-gray-400">Deals</p>
                    <p className="mb-2 text-gray-400">Services</p>
                    <p className="mb-2 text-gray-400">Avialablity</p>
                    <p className="mb-2 text-gray-400">Careers</p>
                </div>
                <div>
                    <h1 className='text-lg font-bold mb-4'>Payment Method</h1>
                    <p className="mb-2 text-gray-400">Card</p>
                    <p className="mb-2 text-gray-400">Mobile Banking</p>
                    <p className="mb-2 text-gray-400">Bank Transfer</p>
                    <p className="mb-2 text-gray-400">Cradit</p>
                    <p className="mb-2 text-gray-400">On Condition</p>
                </div>
                <div className='ml-5'>
                    <h1 className='text-lg font-bold mb-4'>Offers</h1>
                    <p className="mb-2 text-gray-400">Packages</p>
                    <p className="mb-2 text-gray-400">Plans</p>
                    <p className="mb-2 text-gray-400">Items</p>
                    <p className="mb-2 text-gray-400">Order</p>
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
                <p className='text-gray-400'>@2023 Game On. All Rights Reserved</p>
                <p className='text-gray-400'>Powered by Game On</p>
            </div>
        </div>
    );
};

export default Footer;