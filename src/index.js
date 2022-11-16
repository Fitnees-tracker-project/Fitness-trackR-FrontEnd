 import React, {useState, useEffect} from 'react';
 import ReactDom from 'react-dom'
 import { createRoot } from 'react-dom/client';
 import { createBrowserRouter, RouterProvider} from 'react-router-dom';
 import Homepage from './Comps/Homepage';
 import ErrorPage from './Comps/Errorpage'
import Page from './Comps/index'
const route = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
        errorElement: <ErrorPage />,

        children:[
            {
                index: true,
                element: <Page />
            }
        ]
    }
])


ReactDom.render(<RouterProvider router={route} />, document.getElementById('app'))