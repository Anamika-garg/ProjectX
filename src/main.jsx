import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import PredictorBlog from './components/ToolsBlog/PredictorBlog';
import LaptopBlog from './components/ToolsBlog/LaptopBlog';
import ProjectXBlog from './components/ToolsBlog/ProjectXBlog';
const router = createBrowserRouter([{
  path: '/',
  element: <App />
},{
  path: '/predictor',
  element: <PredictorBlog />
},
{
  path: '/adviser',
  element: <LaptopBlog />
},
{
  path: '/projectx',
  element: <ProjectXBlog />
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
