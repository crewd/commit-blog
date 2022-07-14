import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import AppLayout from './components/layout/AppLayout';
import CreatePostPage from './pages/CreatePostPage';
import Home from './pages/Home';
import PostPage from './pages/PostPage';

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/write" element={<CreatePostPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
