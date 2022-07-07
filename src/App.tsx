import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import PostPage from './pages/PostPage';

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
