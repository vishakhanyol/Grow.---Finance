import React from 'react';
import SavingsSection from './components/SavingsSection';
import './index.css';
import ApplicationPage from './components/ApplicationPage';
import DocumentItem from './components/DocumentItem';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <SavingsSection />
      <ApplicationPage/>
      <DocumentItem/>
      <LoginForm/>
    </div>
 
  );
}

export default App;
