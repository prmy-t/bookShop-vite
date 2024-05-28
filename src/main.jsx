import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from "./Layout.jsx";
import NewReleases from './components/NewReleases.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<App />}/>
      <Route path='new-releases' element={<NewReleases />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
