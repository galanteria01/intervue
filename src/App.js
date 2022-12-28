import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Login, Signup } from './screens';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Home />
    )
  },
  {
    path: '/login',
    element: (
      <Login />
    )
  },
  {
    path: '/signup',
    element: (
      <Signup />
    )
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
