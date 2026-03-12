import React, { useState } from 'react';
import IntranetPage from './components/IntranetPage';
import PrivateAccessPage from './components/PrivateAccessPage';
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
