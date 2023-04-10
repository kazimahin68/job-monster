import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/home',
        element: <Outlet></Outlet>

      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs></AppliedJobs>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
