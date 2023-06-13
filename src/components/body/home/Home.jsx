import './Home.css'
import { Accordion, Carousel } from 'flowbite-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../../provider/DataProvider';

const Home = () => {

    const { instructors, approved } = useContext(DataContext)

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

            <section className='mx-32 mt-32'>
                <h1 className='text-center text-5xl font-bold'>Our popular Classes</h1>
                <p className='text-center mt-2 text-gray-400'>Here is our website's "Best Classes" section! Here, you'll discover a diverse group of passionate and experienced instructors who are ready to guide you on your learning journey. From expert academics to industry professionals, our instructors bring a wealth of knowledge and a commitment to help you succeed. Explore their profiles and find the perfect mentor for your educational goals.</p>
                <div className='grid grid-cols-3 gap-10 mt-10'>
                    {
                        approved?.length <= 6 ?
                            approved?.map(approv =>
                                <div className='relative rounded-2xl overflow-hidden max-h-96' key={approv._id}>
                                    <img className='' src={approv.photo} alt="" />
                                    <div
                                        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                                        className='absolute top-72 w-full h-full text-white pl-5 pt-5 text-lg font-bold'>
                                        <h1>Name: {approv.name}</h1>
                                        <p>Price: {approv.price}</p>
                                    </div>
                                </div>
                            )
                            :
                            approved?.slice(0, 6).map(approv =>
                                <div className='relative rounded-2xl overflow-hidden max-h-96' key={approv._id}>
                                    <img className='' src={approv.photo} alt="" />
                                    <div
                                        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                                        className='absolute top-72 w-full h-full text-white pl-5 pt-5 text-lg font-bold'>
                                        <h1>Name: {approv.name}</h1>
                                        <p>Price: {approv.price}</p>
                                    </div>
                                </div>
                            )
                    }
                </div>
                <div className='flex justify-center mt-16'>
                    <Link to='/classes' className='btn bg-lime-500 hover:bg-lime-600 w-40'>See more</Link>
                </div>
            </section>

            <section className='mx-32 mt-40 mb-32'>
                <h1 className='text-center text-5xl font-bold'>Meet Our best instructors</h1>
                <p className='text-center mt-2 text-gray-400'>Welcome to our website's "Best Instructors" section! Here, you'll discover a diverse group of passionate and experienced instructors who are ready to guide you on your learning journey. From expert academics to industry professionals, our instructors bring a wealth of knowledge and a commitment to help you succeed. Explore their profiles and find the perfect mentor for your educational goals.</p>
                <div className='grid grid-cols-3 gap-10 mt-10'>
                    {
                        instructors?.length <= 6 ?
                            instructors?.map(instructor =>
                                <div className='relative rounded-2xl overflow-hidden max-h-96' key={instructor._id}>
                                    <img className='' src={instructor.img} alt="" />
                                    <div
                                        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                                        className='absolute top-72 w-full h-full text-white pl-5 pt-5 text-lg font-bold'>
                                        <h1>Name: {instructor.name}</h1>
                                        <p>Email: {instructor.email}</p>
                                    </div>
                                </div>
                            )
                            :
                            instructors?.slice(0, 6).map(instructor =>
                                <div className='relative rounded-2xl overflow-hidden max-h-96' key={instructor._id}>
                                    <img className='' src={instructor.img} alt="" />
                                    <div
                                        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                                        className='absolute top-72 w-full h-full text-white pl-5 pt-5 text-lg font-bold'>
                                        <h1>Name: {instructor.name}</h1>
                                        <p>Email: {instructor.email}</p>
                                    </div>
                                </div>
                            )
                    }
                </div>
                <div className='flex justify-center mt-16'>
                    <Link to='/instructors' className='btn bg-lime-500 hover:bg-lime-600 w-40'>See more</Link>
                </div>
            </section>

            <section className='mx-24 mt-10 mb-32'>
                <h1 className='text-center text-5xl font-bold mt-20'>Frequently asked questions</h1>
                <p className='text-gray-400 mx-40 text-center mt-5'>Here we emplement some frequently asked questions. You can check this questions and the answers. If you have any other questions or if you want to know more about us then please check the about page or contact with us.</p>
                <Accordion className='mt-10'>
                    <Accordion.Panel>
                        <Accordion.Title className='bg-lime-500 text-black font-bold hover:bg-lime-600'>
                            How to select and enroll out courses?
                        </Accordion.Title>
                        <Accordion.Content className='bg-white'>
                            <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify">
                                Are you looking to select and enroll in courses from our website? Here's a simple guide on how to do it in just a few steps.

                                Browse: Start by exploring our website's course catalog. Look for courses that align with your interests, goals, or career aspirations.

                                Research: Read course descriptions, check out instructor profiles, and review any available feedback or ratings from previous learners. This will help you gauge the suitability and quality of the courses.

                                Select: Once you've found a course that catches your attention, click on it to access more details. Consider factors like course duration, prerequisites, and the skills or knowledge you'll gain.

                                Enroll: If you're satisfied with your choice, click on the "Enroll" button. You may be prompted to create an account or sign in if you haven't already. Follow the instructions and provide the necessary information.

                                Payment: Some courses may require payment. If so, choose your preferred payment method and complete the transaction securely. Keep any confirmation or receipt for future reference.

                                Access: After enrolling, you'll likely gain immediate access to the course materials. This may include video lectures, readings, assignments, or quizzes. Start exploring the content and engage with the course at your own pace.

                                Support: Should you encounter any issues or have questions, our website may offer support channels such as FAQs, discussion forums, or contact forms. Don't hesitate to seek assistance if needed.

                                Learn and Grow: Dive into the course materials, participate actively, and take advantage of any interactive elements. Make the most of the learning experience, ask questions, and connect with fellow learners if possible.

                                Complete and Certify: Once you've finished the course requirements, you may be eligible for a certificate of completion. Follow the instructions provided to obtain your certificate if available.

                                Repeat and Explore: As you complete one course, consider exploring other courses on our website. Continuously expand your knowledge and skills by selecting and enrolling in new subjects that interest you.

                                Remember, learning is a lifelong journey, and our website is here to support your educational endeavors. Happy learning!
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className='bg-lime-500 text-black font-bold hover:bg-lime-600'>
                            Our online language class time and routine
                        </Accordion.Title>
                        <Accordion.Content className='bg-white'>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Our language classes are available at various times throughout the week to accommodate different time zones and busy schedules. You can choose a time slot that works best for you, whether it's during the day or in the evening.

                                Once you enroll, you'll receive a detailed class schedule with the specific dates and times for your sessions. Our experienced language instructors will guide you through interactive lessons, covering vocabulary, grammar, pronunciation, and conversation practice.

                                To enhance your learning experience, we provide online resources, including downloadable materials, audio recordings, and practice exercises. You'll also have access to a supportive online community, where you can connect with fellow learners and receive additional language learning tips.

                                Join our online language classes and embark on a rewarding journey to master a new language. Start by enrolling today and embrace the opportunity to broaden your cultural horizons.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className='bg-lime-500 text-black font-bold hover:bg-lime-600'>
                            Our payment method?
                        </Accordion.Title>
                        <Accordion.Content className='bg-white'>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className='text-black font-bold text-2xl'>Payment method</span>
                                <br /><br />
                                1.                Add items to your shopping cart: Browse the website and select the items you wish to purchase by clicking on the "Add to Cart" or similar buttons.
                                <br /><br />
                                2.                Review your shopping cart: Once you have added all the desired items, click on the shopping cart icon or a similar button to review your selected products and their quantities.
                                <br /><br />
                                3.                Proceed to checkout: Click on the "Checkout" or "Proceed to Checkout" button to begin the payment process.
                                <br /><br />
                                4.                Provide shipping information: Enter your shipping address, including your name, address, city, state, ZIP code, and contact details. Some websites may offer saved addresses if you have previously shopped with them.
                                <br /><br />
                                5.                Select a payment method: Choose the payment method you prefer. Common options include credit or debit cards, online payment services (such as PayPal or Stripe), digital wallets (like Apple Pay or Google Pay), or bank transfers. Select the appropriate option and proceed.
                                <br /><br />
                                6.                Enter payment details: Provide the required payment information based on the chosen method. This typically includes the card number, expiration date, CVV code, and billing address. If using online payment services or digital wallets, you may need to log in to your account and authorize the transaction.
                                <br /><br />
                                7.                Review and confirm the order: Verify that the order details, including the items, quantities, shipping address, and payment information, are correct. If everything looks accurate, proceed to confirm the order.
                                <br /><br />
                                8.                Complete the payment: Depending on the chosen payment method, you may be redirected to a secure payment gateway or prompted to authorize the payment through your selected service or digital wallet. Follow the instructions provided to complete the payment.
                                <br /><br />
                                9.                Receive confirmation: After the payment is successfully processed, you will typically receive an order confirmation page on the website, as well as a confirmation email with the details of your purchase. Keep this information for future reference.
                                <br /><br />
                                It's important to note that specific steps and options may vary slightly between different e-commerce websites. Always ensure that the website is reputable and secure before providing any personal or payment information.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </section>

        </div>
    );
};

export default Home;