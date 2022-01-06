import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React, { Suspense } from 'react';
const Lession = React.lazy(() => import("features/Lesson"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={() => <div>loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="lession" replace />} />

            <Route path="lession/*" element={<Lession />} />
            <Route path="*" element={<div>Not found</div>}></Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
