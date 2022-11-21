import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom'
import { createRoot } from 'react-dom/client';
import {ErrorPage, Homepage, Navbar, RegisterForm, Routines, Login, NewRoutine, UpdateRoutine, MyRoutines, Activites, NewActivity, UpdateActivity, UpdateRoutineActivity, PublicRoutinesWithActivity, DeleteRoutineActivities} from './Comps/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Outlet} from 'react-router'
import MyPage from './Comps/MyPage';
import DeletePost from './Comps/DeletePost';

const App = () => {
    const [routines, setRoutines] = useState()
    useEffect(() => {
        async function showAllRoutines(){
            const pubRoutines = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines')
            const regRout = await pubRoutines.json();
            // console.log('this si regROut', regRout)
            setRoutines(regRout)
    }
    showAllRoutines()
}, [])
    return(
        <div>
            <Navbar />
            <Outlet context={{routines, setRoutines}} />
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
                path: '/newroutine',
                element: <NewRoutine />
            },
            {
            path: '/routines/:routineid',
            element: <UpdateRoutine />
            },
            {
                path :'/activities',
                element: <Activites />
            },
            {
                path:'/newActivity',
                element: <NewActivity />
            },
            {
                path:'/updateActivity/:Activityid',
                element: <UpdateActivity />
            },
            {
                path:'/updateRoutineActivity/:Raid',
                element: <UpdateRoutineActivity/>
            },
            {
                path:'/publicRoutinesWithActivity/:Raid',
                element: <PublicRoutinesWithActivity/>
            },
            {
                path:'/deleteRoutineActivity/:activityid',
                element: <DeleteRoutineActivities />
            },
            {
                path: '/routine/activities/:id',
                element: <PublicRoutinesWithActivity />
            },
            {
                path:'/me',
                element: <MyPage />
            },
            {
                path:'/me/routines/:postId',
                element: <DeletePost />
            }
        ]
    }
])




const appElem = document.getElementById('app')
const root = createRoot(appElem)
root.render(<RouterProvider router={route} />)