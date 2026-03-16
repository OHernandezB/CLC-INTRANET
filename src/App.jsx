import React, { useState } from 'react';
import IntranetPage from './pages/IntranetPage';
import PrivateAccessPage from './pages/PrivateAccessPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app-container">
      {currentPage === 'home' ? (
        <IntranetPage onNavigate={() => setCurrentPage('private')} />
      ) : (
        <PrivateAccessPage onBack={() => setCurrentPage('home')} />
      )}
    </div>
  );
}

export default App;
