import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Navigate } from 'react-router-dom';
import App from './App.tsx';
import Blog from "./pages/blog/Blog";
import Projects from './pages/projects/Projects.tsx';


const router = createBrowserRouter([
  { path: "/home", element: <App /> },
  { path: "/blog", element: <Blog />},
  { path: "/projects", element: <Projects/> },
  { path: "*", element: <Navigate to="/home" /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
