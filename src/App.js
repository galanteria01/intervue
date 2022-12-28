import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Login, Signup } from './screens';
import { supabase } from './utils/supabaseClient';
import { useDispatch } from 'react-redux';
import { addSession } from './features/session/sessionSlice';

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
  const dispatch = useDispatch()
  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(addSession(session))
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(addSession(session))
    })
  }, [])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
