import React, { useEffect, useState } from 'react';
import './Home.css'
import { Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Home = () => {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        const fetchFunction = async () => {
            const res = await fetch(`https://game-on-new-server.vercel.app/category`);
            const data = await res.json();
            setDatas(data);
        }
        fetchFunction();
    }, [])


    return (
        <div>
            <section
                style={{ backgroundColor: "rgba(5, 15, 0, 9)" }}
            >
                <Carousel>
                    <div className="flex relative flex-col h-full items-center justify-center dark:text-white">
                        <img className='w-full h-screen opacity-30' src="https://i.ibb.co/vq7CJ99/gettyimages-143176434-612x612.jpg" alt="" />
                        <div className='absolute bottom-32 text-white flex flex-col items-center text-center mx-48'>
                            <h1 className='text-5xl font-bold'>Learn new language</h1>
                            <p className='text-gray-300 mt-5'>Enhance your linguistic skills from the comfort of your home! Join our dynamic online language classes and unlock a world of opportunities. Whether you're a beginner or an advanced learner, our experienced instructors will guide you through interactive sessions, personalized exercises, and engaging discussions. Don't miss this chance to broaden your horizons. Enroll today and embark on a language learning journey like no other!</p>
                            <Link className='btn bg-lime-500 hover:bg-lime-600 normal-case border-0 mt-10 text-white text-lg font-bold'>See out all language classes</Link>
                        </div>
                    </div>
                    <div className="flex relative flex-col h-full items-center justify-center dark:text-white">
                        <img className='w-full h-screen opacity-30' src="https://i.ibb.co/VC4FLnt/gettyimages-143176434-612x612-4.jpg" alt="" />
                        <div className='absolute bottom-32 text-white flex flex-col items-center text-center mx-48'>
                            <h1 className='text-5xl font-bold'>Learn new language</h1>
                            <p className='text-gray-300 mt-5'>Enhance your linguistic skills from the comfort of your home! Join our dynamic online language classes and unlock a world of opportunities. Whether you're a beginner or an advanced learner, our experienced instructors will guide you through interactive sessions, personalized exercises, and engaging discussions. Don't miss this chance to broaden your horizons. Enroll today and embark on a language learning journey like no other!</p>
                            <Link className='btn bg-lime-500 hover:bg-lime-600 normal-case border-0 mt-10 text-white text-lg font-bold'>See out all language classes</Link>
                        </div>
                    </div>
                    <div className="flex relative flex-col h-full items-center justify-center dark:text-white">
                        <img className='w-full h-screen opacity-30' src="https://i.ibb.co/crH2yLy/gettyimages-143176434-612x612-1.jpg" alt="" />
                        <div className='absolute bottom-32 text-white flex flex-col items-center text-center mx-48'>
                            <h1 className='text-5xl font-bold'>Learn new language</h1>
                            <p className='text-gray-300 mt-5'>Enhance your linguistic skills from the comfort of your home! Join our dynamic online language classes and unlock a world of opportunities. Whether you're a beginner or an advanced learner, our experienced instructors will guide you through interactive sessions, personalized exercises, and engaging discussions. Don't miss this chance to broaden your horizons. Enroll today and embark on a language learning journey like no other!</p>
                            <Link className='btn bg-lime-500 hover:bg-lime-600 normal-case border-0 mt-10 text-white text-lg font-bold'>See out all language classes</Link>
                        </div>
                    </div>
                    <div className="flex relative flex-col h-full items-center justify-center dark:text-white">
                        <img className='w-full h-screen opacity-30' src="https://i.ibb.co/zSKpQGF/gettyimages-143176434-612x612-3.jpg" alt="" />
                        <div className='absolute bottom-32 text-white flex flex-col items-center text-center mx-48'>
                            <h1 className='text-5xl font-bold'>Learn new language</h1>
                            <p className='text-gray-300 mt-5'>Enhance your linguistic skills from the comfort of your home! Join our dynamic online language classes and unlock a world of opportunities. Whether you're a beginner or an advanced learner, our experienced instructors will guide you through interactive sessions, personalized exercises, and engaging discussions. Don't miss this chance to broaden your horizons. Enroll today and embark on a language learning journey like no other!</p>
                            <Link className='btn bg-lime-500 hover:bg-lime-600 normal-case border-0 mt-10 text-white text-lg font-bold'>See out all language classes</Link>
                        </div>
                    </div>
                    <div className="flex relative flex-col h-full items-center justify-center dark:text-white">
                        <img className='w-full h-screen opacity-30' src="https://i.ibb.co/XzGrhYN/gettyimages-143176434-612x612-2.jpg" alt="" />
                        <div className='absolute bottom-32 text-white flex flex-col items-center text-center mx-48'>
                            <h1 className='text-5xl font-bold'>Learn new language</h1>
                            <p className='text-gray-300 mt-5'>Enhance your linguistic skills from the comfort of your home! Join our dynamic online language classes and unlock a world of opportunities. Whether you're a beginner or an advanced learner, our experienced instructors will guide you through interactive sessions, personalized exercises, and engaging discussions. Don't miss this chance to broaden your horizons. Enroll today and embark on a language learning journey like no other!</p>
                            <Link className='btn bg-lime-500 hover:bg-lime-600 normal-case border-0 mt-10 text-white text-lg font-bold'>See out all language classes</Link>
                        </div>
                    </div>
                </Carousel>
            </section>

            <section>
                <h1>Our popular Classes</h1>
            </section>

            <section>
                <h1>Our best instructors</h1>
            </section>


        </div>
    );
};

export default Home;