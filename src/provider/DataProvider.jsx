import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const DataContext = createContext(null)

const DataProvider = ({ children }) => {
    const [allUsers, setAllUsers] = useState()
    const [admins, setAdmins] = useState()
    const [students, setStudents] = useState()
    const [instructors, setinstructors] = useState()
    const [allClasses, setAllClasses] = useState()
    const [reCallUsers, setReCallUsers] = useState(true)
    const [reCallClasses, setReCallClasses] = useState(true)
    const [loadingUsers, setLoadingUsers] = useState(true)
    const [loadingClasses, setLoadingClasses] = useState(true)
    const [pendings, setPendings] = useState()
    const [approved, setApproved] = useState()
    const [denied, setDenied] = useState()

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
            setAllUsers(users)
            setLoadingUsers(false)
        }
        fetchFunction();
    }, [reCallUsers])

    useEffect(() => {
        const fetchFunction = async () => {
            const res = await fetch('http://localhost:7000/classes')
            const classes = await res.json();
            const pending = classes.filter(data => data.status === "pending")
            const approv = classes.filter(data => data.status === "approved")
            const deni = classes.filter(data => data.status === "denied")
            setDenied(deni)
            setApproved(approv)
            setPendings(pending)
            setAllClasses(classes)
        }
        fetchFunction();
    }, [reCallClasses])


    const authInfo = {
        admins,
        approved,
        allUsers,
        allClasses,
        reCallClasses,
        setReCallUsers,
        setReCallClasses,
        denied,
        students,
        pendings,
        loadingUsers,
        loadingClasses,
        setLoadingUsers,
        setLoadingClasses,
        instructors,
        reCallUsers,
    }


    return (
        <DataContext.Provider value={authInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;