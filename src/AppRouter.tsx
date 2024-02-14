import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPage from './components/BlogPage';
// import NotFoundPage from './components/NotFoundPage'; // Create a NotFoundPage component for unmatched routes

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        {/*<Route path="*" element={<NotFoundPage />} />*/}
      </Routes>
    </Router>
  );
};

export default AppRouter;
