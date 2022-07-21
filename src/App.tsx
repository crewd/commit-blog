import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import AppLayout from './components/layout/AppLayout';
import WritePage from './pages/WritePage';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import RequireSha from './components/route/RequireSha';

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/write" element={
            <RequireSha>
              <WritePage />
            </RequireSha>
          }
          />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
