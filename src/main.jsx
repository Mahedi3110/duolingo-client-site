import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'flowbite';
import Home from './components/body/home/Home.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/body/NotFound.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Instructors from './components/body/Instructors.jsx';
import Classes from './components/body/Classes.jsx';
import Login from './components/body/join/Login.jsx';
import Register from './components/body/join/Register.jsx'
import Dashboard from './components/body/dashboard/Dashboard.jsx';
import Profile from './components/body/Profile.jsx';
import PrivateRoute from './privateRoute/PrivateRoute.jsx';
import DataProvider from './provider/DataProvider.jsx';
import AddClasses from './components/body/dashboard/instructorOptions/AddClasses.jsx'
import MyClasses from './components/body/dashboard/instructorOptions/MyClasses.jsx'
import InstructorRoute from './components/body/dashboard/instructorOptions/InstructorRoute.jsx'
import StudentRoute from './components/body/dashboard/studentOptions/StudentRoute.jsx'
import AdminRoute from './components/body/dashboard/adminOptions/AdminRoute.jsx'
import Payment from './components/body/dashboard/studentOptions/Payment.jsx';
import MyEnrolledClasses from './components/body/dashboard/studentOptions/MyEnrolledClasses.jsx'
import MySelectedClasses from './components/body/dashboard/studentOptions/MySelectedClasses.jsx'
import ManageUsers from './components/body/dashboard/adminOptions/ManageUsers.jsx'
import ManageClasses from './components/body/dashboard/adminOptions/ManageClasses.jsx'
import Update from './components/body/dashboard/instructorOptions/Update.jsx';
import Details from './components/body/Details.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
          {
            path: '/dashboard/addClasses',
            element: <InstructorRoute><AddClasses></AddClasses></InstructorRoute>
          },
          {
            path: '/dashboard/myClasses',
            element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
          },
          {
            path: '/dashboard/update/:id',
            element: <InstructorRoute><Update></Update></InstructorRoute>
          },
          {
            path: '/dashboard/myEnrolledClasses',
            element: <StudentRoute><MyEnrolledClasses></MyEnrolledClasses></StudentRoute>
          },
          {
            path: '/dashboard/mySelectedClasses',
            element: <StudentRoute><MySelectedClasses></MySelectedClasses></StudentRoute>
          },
          {
            path: '/dashboard/payment',
            element: <StudentRoute><Payment></Payment></StudentRoute>
          },
          {
            path: '/dashboard/manageClasses',
            element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
          },
          {
            path: '/dashboard/manageUsers',
            element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
          }
        ]
      }
    ]
  },
  {
    path: "/*",
    element: <NotFound></NotFound>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </AuthProvider>
)
