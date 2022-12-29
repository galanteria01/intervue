import React from 'react';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { Home, Login, Signup } from './screens';
import { supabase } from './utils/supabaseClient';
import { useDispatch } from 'react-redux';
import { addSession, selectSession } from './features/session/sessionSlice';

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
  const session = selectSession()
  console.log(session)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
