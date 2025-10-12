import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import ReactDom from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/ui/custom/Header.jsx'
import { Toaster } from 'sonner'
import {GoogleOAuthProvider} from '@react-oauth/google';
// import ViewTrip from './view-trip/[tripId]/index.jsx'
import ViewTrip from './view-trip/[tripId]/index'
import MyTrips from './my-trips'
import Footer from './components/ui/custom/Footer'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/create-trip',
    element: <CreateTrip />,
  },
  {
    path:'/view-trip/:tripId',
    element:<ViewTrip/>
  },
  {
    path:'/my-trips',
    element:<MyTrips/>
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Header />
    <Toaster/>
    <RouterProvider router={router} />
    </GoogleOAuthProvider>

  </StrictMode>,
)
