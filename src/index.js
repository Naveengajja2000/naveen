import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import reportWebVitals from './reportWebVitals';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
var myrouter = createBrowserRouter([
  {
    path:'/abc',
    element:<h1>Hello Naveen</h1>
  },
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/aboutus',
        element:<Aboutus></Aboutus>
      },
      {
        path:'/contactus',
        element:<Contactus></Contactus>
      },
    ]
  },
  {
    path:'/xyz',
    element:<h2>Welcom to routing</h2>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={myrouter}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
