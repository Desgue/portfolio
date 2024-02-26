import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Navigate } from 'react-router-dom';
import App from './App.tsx';

const router = createBrowserRouter([
  { path: "/home", element: <App /> },
  { path: "*", element: <Navigate to="/home" /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
