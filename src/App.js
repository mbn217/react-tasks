import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header title="Tarmeez Academy" />
      <div className="app-container">
        <MainContent />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
