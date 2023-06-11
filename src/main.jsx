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
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
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
    <RouterProvider router={router} />
  </AuthProvider>
)
