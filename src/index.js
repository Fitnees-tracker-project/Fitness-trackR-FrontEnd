import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom'
import { createRoot } from 'react-dom/client';
import {ErrorPage, Homepage, Navbar} from './Comps/index'
import Page from './Comps/index'
import RegisterForm from './Comps/Register';
import Routines from './Comps/Routines';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Outlet} from 'react-router'

const App = () => {
    return(
        <div>
            <Navbar />

            <Outlet />
        </div>
    )
}

const route = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,

        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: '/routines',
                element: <Routines />
            }
        ]
    }
])




const appElem = document.getElementById('app')
const root = createRoot(appElem)
root.render(<RouterProvider router={route} />)