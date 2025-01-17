import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';
import VersePage from './pages/VersePage';
import Header from './components/Header';
import DailyVersePage from './pages/DailyVersePage';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import ToastContainer from './components/ToastContainer';
import { SanskritProvider } from './context/SanskritContext';

const App = () => {
  return (
    <ErrorBoundary>
      <SanskritProvider>
      <Router>
        <Header />        
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chapter/:ch" element={<ChapterPage />} />
          <Route path="/verse/:ch/:sl" element={<VersePage />} />
          <Route path="/daily-verse" element={<DailyVersePage />} />
        </Routes>
        <Footer />
      </Router>
      </SanskritProvider>
    </ErrorBoundary>
  );
};

export default App;
