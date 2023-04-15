import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import About from './components/about/about';
import First from './components/First/First';
import Friends from './components/Friends/Friends';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//   },

//   {

//     path: "/about",
//     element: <About></About>
//   },

//   {
//    path: "/contact",
//    element:<Contact></Contact> 
//   },
// ]);

const router = createBrowserRouter([
  {

    path: '/',
    element: <Home></Home>,
    children: [

      {
        path: '/',
        element: <First></First>
      },
      {
        path: "Friends",
        element: <Friends></Friends>,
        loader: () => fetch ('https://jsonplaceholder.typicode.com/users')

      },
    {
        path: 'about',
        element: <About></About>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      }
    ]


  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
