import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Resume from './pages/Resume.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import ErrorComponent from './components/ErrorComponent.jsx';
import Introduction from './components/Introduction.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: '/',
        element: <><Introduction /></>
      },
      {
        path: '/resume',
        element: <Resume />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
