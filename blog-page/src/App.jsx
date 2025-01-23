import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Navigation from './components/Navigation';

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:postId" element={<PostPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </Router>
);

export default App;
