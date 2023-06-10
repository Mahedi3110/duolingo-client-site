import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import { addToLS, getLSdata } from '../../../public/fakeDB'

const ViewDetails = () => {

    useTitle("View Details")

    const [match, setMatch] = useState(false)

    const added = () => toast("You add this product.")

    const { user } = useContext(AuthContext)

    const paramsData = useParams();
    const loaderDatas = useLoaderData();

    const data = loaderDatas.find(loaderData => loaderData.id === paramsData.id)
    const { about, id, name, photo, price } = data;

    const check = getLSdata()

    useEffect(() => {
        const getProductData = Object.keys(getLSdata());
        const same = getProductData.find(id => id === data.id)
        setMatch(same)
    }, [check])

    const choose = (props) => {
        if (match) {
            console.log(match);
        }
        else {
            addToLS(props)
            setMatch(true)
        }
    }

    const add = () => {
        choose(data.id)
        const email = user.email;
        const addableData = { about, id, name, photo, price, email };
        // send data to the server
        fetch('https://game-on-new-server.vercel.app/choiceList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addableData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    added();
                }
            })
    }

    return (
        <div className='bg-black pt-32 pb-64 text-white'>
            <div className='mx-20 h-screen mb-56'>
                <div className='grid grid-cols-12 gap-10'>
                    <div
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                        className='col-span-6'>
                        <img className='rounded-3xl w-full' src={data.photo} alt={data.name} />
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                        className='col-span-6 flex flex-col justify-evenly'>
                        <h3 className="text-2xl font-bold text-orange-400">{data.name}</h3>
                        <div>
                            <p className='text-lg font-bold text-orange-400'>Features</p>
                            {
                                data?.features?.map((feature, index) => <p key={index}>{feature}</p>)
                            }
                        </div>
                        <div>
                            <p className='text-orange-400'>Ratting: <span className='text-lg font-bold text-white'>4.5</span> </p>
                            <p className='text-orange-400'>Available Quantity: <span className='text-lg font-bold text-white'>58</span></p>
                            <p className='text-orange-400'>Saller Name: <span className='text-lg font-bold text-white'>Game On</span></p>
                            <p className='text-orange-400'>Saller Email: <span className='text-lg font-bold text-white'>gameon@gmail.com</span></p>
                        </div>
                        <p className='text-xl font-bold rounded-xl text-orange-400'>Price: <span className='text-3xl text-white'>{data.price} tk</span></p>
                        {
                            match ?
                                <button disabled onClick={add} className='btn bg-orange-400 hover:bg-orange-600 mt-10 w-2/5'>Add this product</button>
                                :
                                <button onClick={add} className='btn bg-orange-400 hover:bg-orange-600 mt-10 w-2/5'>Add this product</button>
                        }
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                    className='mt-16'>
                    <p className='text-2xl font-bold mt-2 text-center text-orange-400'>About</p>
                    <p className='text-justify'>{data.about}</p>
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

export default ViewDetails;