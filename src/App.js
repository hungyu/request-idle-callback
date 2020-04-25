import React from 'react';
import WithRequestIdleCallback from './WithRequestIdleCallback';
import WithoutRequestIdleCallback from './WithoutRequestIdleCallback';
import './App.css';

function App() {
  return (
    <div className="App">
      <WithoutRequestIdleCallback/>
      <WithRequestIdleCallback/>
    </div>
  );
}

export default App;
