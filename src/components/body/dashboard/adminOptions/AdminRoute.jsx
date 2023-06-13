import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../../../provider/AuthProvider";
import { DataContext } from "../../../../provider/DataProvider";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const { allUsers, loadingUsers } = useContext(DataContext)
    const location = useLocation();

    if (loading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <Spinner
                    aria-label="Extra large spinner example"
                    size="xl"
                />
            </div>
        )
    }

    if (loadingUsers) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <Spinner
                    aria-label="Extra large spinner example"
                    size="xl"
                />
            </div>
        )
    }

    const currectUser = allUsers.find(users => users.email == user.email)

    if (user && currectUser.status == 'admin') {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;