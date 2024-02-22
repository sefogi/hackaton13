import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD

import App from './App.jsx'
=======
import { RouterProvider } from "react-router-dom";
import { router } from './router/router.jsx'
// import App from './App.jsx'
>>>>>>> develop
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
        <RouterProvider router={router} />
        </React.StrictMode>,
)
