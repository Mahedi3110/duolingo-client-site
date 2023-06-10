import React, { useEffect, useState } from 'react';
import './Home.css'

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
            <img src="https://www.nanubarahagara.com/wp-content/uploads/2023/01/Young_boy_writing_multiple_languages_on_chalkboard_eli_asenova_GI_large.jpg" alt="" />
            <img src="https://media.gettyimages.com/id/143176434/photo/master-greeter.jpg?s=612x612&w=gi&k=20&c=0a2qPi9Ue_AJXKyjsYlWe4W3Tp9u9nVWW_gv59K5EzQ=" alt="" />
            <img src="https://i0.wp.com/improvingteaching.co.uk/wp-content/uploads/2016/11/language-learning.png?fit=640%2C480&ssl=1" alt="" />
            <img src="https://www.optilingo.com/wp-content/uploads/2019/02/142539865.jpg" alt="" />
            <img src="https://www.englishery.com/wp-content/uploads/2022/05/which-language-to-learn2.jpeg" alt="" />
            <img src="https://www.amacad.org/sites/default/files/styles/large/public/media/images/iStock-478438526.jpg?itok=5l93U6eL" alt="" />
        </div>
    );
};

export default Home;