import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Profile = () => {

    useTitle("Profile")

    const { user, logOut } = useContext(AuthContext)
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
        <div className='pt-7 pb-20 bg-black'>
            <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                className='h-screen text-white flex justify-center flex-col relative items-center mt-5'>
                <img className='h-96 w-7/12' src="https://i.ibb.co/yhvskkR/404.png" alt="" />
                <div className='grid grid-cols-2 w-5/12 border-2 pl-5 pr-5 h-80 items-center -mt-11 absolute'>
                    <div className='flex justify-end mr-10'>
                        {
                            pic > 12 ?
                                <img className='w-56 rounded-xl h-56 border-2 border-gray-400' src={user.photoURL} alt='User' />
                                :
                                <img className='w-56 rounded-xl h-56 border-2 border-gray-400' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' alt='User' />
                        }
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold mb-2'>{user.displayName}</h1>
                        <p><span className='text-lg font-bold'>Email: </span> {user.email}</p>
                        <p><span className='text-lg font-bold'>Create account: </span> {user.metadata.creationTime.slice(0, 16)}</p>
                        <p><span className='text-lg font-bold'>Last login time: </span> {user.metadata.lastSignInTime.slice(0, 16)}</p>
                        <p><span className='text-lg font-bold'>Phone number: </span> {user.phoneNumber ? phoneNumber : 'N/A'}</p>
                        <button onClick={handleLogOut} className='btn bg-orange-400 rounded-full hover:bg-orange-600 text-white normal-case mt-3 px-12'>Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;