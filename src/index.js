import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom'
import { createRoot } from 'react-dom/client';
import {ErrorPage, Homepage, Navbar, RegisterForm, Routines, Login, NewRoutine, UpdateRoutine, MyRoutines,} from './Comps/index'
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
            },
            {
                path: '/routine/:username',
                element: <MyRoutines />
            },
            {
                path: '/register',
                element: <RegisterForm />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/routine/newroutine',
                element: <NewRoutine />
            },
            {
            path: '/routines/:routineid',
            element: <UpdateRoutine />
            },
        ]
    }
])




const appElem = document.getElementById('app')
const root = createRoot(appElem)
root.render(<RouterProvider router={route} />)