 import React, {useState, useEffect} from 'react';
 import { createRoot } from 'react-dom/client';

 const App = () => {
    return (
        <div>
            <p>Hello World!</p>
        </div>
    )
 }

 const appElement = document.getElementById('app')
 const root = createRoot(appElement)
 root.render(<App />, appElement)