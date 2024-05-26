import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
// Pages
import Home from './pages/Home';
import BookSection from './pages/BookSection';
// React Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books",
    element: <BookSection />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
