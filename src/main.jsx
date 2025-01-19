import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import JobListing from './pages/JobListing.jsx'
import JobPosting from './pages/JobPosting.jsx'
import JobDetails from './pages/JobDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/jobs',
    element: <JobListing/>
  },
  {
    path: '/jobs/:jobId',
    element: <JobDetails/>
  },
  {
    path: '/job-posting',
    element: <JobPosting/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
