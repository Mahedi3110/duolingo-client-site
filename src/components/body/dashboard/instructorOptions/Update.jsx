import React from 'react';
import { useParams } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { useContext } from 'react';
import { DataContext } from '../../../../provider/DataProvider';

const Update = () => {
    const updated = () => toast("Your class is updated.")
    const paramsData = useParams();
    const { allClasses, setReCallClasses, reCallClasses } = useContext(DataContext)

    const data = allClasses.find(classes => classes._id === paramsData.id)

    const handleForm = (event) => {
        event.preventDefault()
        const photo = event.target.photo.value;
        const name = event.target.name.value;
        const instructorName = event.target.instructorName.value;
        const email = event.target.email.value;
        const availableSeats = parseInt(event.target.availableSeats.value);
        const price = parseInt(event.target.price.value);
        const about = event.target.about.value;
        const status = 'pending';
        const addToDB = { photo, name, instructorName, email, availableSeats, price, about, status }

        fetch(`https://duolingo-server-lilac.vercel.app/classes/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToDB)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    updated()
                    setReCallClasses(!reCallClasses)
                }
            })
    }

    return (
        <div>
            <div className='pt-32 pb-36'>
                <div className='text-black mx-20 mr-10'>
                    <div className="hero bg-lime-100 rounded-xl w-full pb-12 pt-5">
                        <div className="flex-col lg:flex-row-reverse w-full px-5">
                            <div className="flex-shrink-0 w-full">
                                <form onSubmit={handleForm}>
                                    <div className='md:grid-cols-2 grid-cols-1 grid mx-5'>
                                        <div className='md:mr-3 mr-0'>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Class Image</span>
                                                </label>
                                                <input type="img" placeholder="image url" name='photo' className="input input-bordered pt-2 pl-2" required defaultValue={data.photo} />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Class Name</span>
                                                </label>
                                                <input type="text" placeholder="class name" name='name' className="input input-bordered" required defaultValue={data.name} />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Instructor Name</span>
                                                </label>
                                                <input disabled type="text" name='instructorName' className="input input-bordered text-black" defaultValue={data?.instructorName} />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Email</span>
                                                </label>
                                                <input disabled type="email" placeholder="email" name='email' className="input text-black input-bordered" defaultValue={data?.email} />
                                            </div>
                                        </div>
                                        <div className='md:ml-3 ml-0'>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Available seats</span>
                                                </label>
                                                <div className='relative'>
                                                    <input type='number' placeholder="0" name='availableSeats' className="input input-bordered w-full border-gray-300" required defaultValue={data.availableSeats} />
                                                </div>
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Price</span>
                                                </label>
                                                <div className='relative'>
                                                    <input type='number' placeholder="$" name='price' className="input input-bordered w-full border-gray-300" required defaultValue={data.price} />
                                                </div>
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">About</span>
                                                </label>
                                                <div className='relative'>
                                                    <textarea id="message" required rows="4" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="about" name='about' defaultValue={data.about}></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-control mt-10 modal-action">
                                        <button className="btn w-1/5 mx-auto bg-lime-500 hover:bg-lime-600 border-0 rounded-full">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
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
        </div>
    );
};

export default Update;