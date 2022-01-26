import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
const Lession = React.lazy(() => import("features/Lesson"));
const Auth = React.lazy(() => import("features/Auth"));

function App() {

  const { loggedIn } = useSelector(state => state.auth);

  return (
    <div className="App">
      <Suspense fallback={() => <div>loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="lession" replace />} />
            <Route path="lession/*" element={loggedIn ? <Lession /> : <Navigate to="/auth/login" />} />
            <Route path="auth/*" element={<Auth />} />
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
          <div className='circle1' />
          <div className='circle2' />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
