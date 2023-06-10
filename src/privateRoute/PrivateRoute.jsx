import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
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
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
};

export default PrivateRoute;