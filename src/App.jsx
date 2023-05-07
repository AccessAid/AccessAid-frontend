import React from 'react';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className='App bg-gradient-to-r from-white via-secondary-dark to-tertiary-dark dark:from-black dark:via-secondary-light dark:to-tertiary-light'>
      <h1 className='font-jakarta text-8xl'>Welcome to Access Aid</h1>
      <Login />
    </div>
  );
}

export default App;
