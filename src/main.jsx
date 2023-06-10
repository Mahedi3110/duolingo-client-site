import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'flowbite';
import Home from './components/body/home/Home.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/body/NotFound.jsx'
import AuthProvider from './provider/AuthProvider.jsx'

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
