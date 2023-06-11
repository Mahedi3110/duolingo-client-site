import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const DataContext = createContext(null)

const DataProvider = ({ children }) => {
    const [admins, setAdmins] = useState()
    const [students, setStudents] = useState()
    const [instructors, setinstructors] = useState()
    const [classes, setClasses] = useState()
    const [reCallUsers, setReCallUsers] = useState(0)
    const [reCallClasses, setReCallClasses] = useState(0)
    const [loadingUsers, setLoadingUsers] = useState(true)
    const [loadingClasses, setLoadingClasses] = useState(true)

    useEffect(() => {
        const fetchFunction = async () => {
            const res = await fetch('http://localhost:7000/users')
            const users = await res.json();
            const instructor = users.filter(data => data.status === "instructor")
            const student = users.filter(data => data.status === "student")
            const admin = users.filter(data => data.status === "admin")
            setinstructors(instructor)
            setStudents(student)
            setAdmins(admin)
        }
        fetchFunction();
    }, [reCallUsers])


    const authInfo = {
        admins,
        classes,
        setReCallUsers,
        setReCallClasses,
        loadingUsers,
        loadingClasses,
        setLoadingUsers,
        setLoadingClasses,
        instructors,
        students
    }


    return (
        <DataContext.Provider value={authInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;