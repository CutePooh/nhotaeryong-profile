
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Main from './pages/Main';
import ExperiencePage from './pages/Experience';
import CoverLetterPage from './pages/CoverLetter';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen bg-[#F2F0EA] text-stone-800 font-sans">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 flex-shrink-0 z-50">
          <Sidebar />
        </div>

        {/* Content Area */}
        <main className="flex-1 p-3 md:p-10 flex justify-center items-start overflow-y-auto custom-scrollbar">
          <div className="w-full max-w-4xl bg-white shadow-xl min-h-[85vh] md:min-h-[90vh] rounded-xl relative overflow-hidden transition-all duration-300 border border-stone-100">
             <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/cover-letter" element={<CoverLetterPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
             </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
