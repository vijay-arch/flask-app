import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'; // Add this

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('/api/')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>3 Tier Kubernetes Project</h1>
      <h2>{message}</h2>
    </div>
  );
}

// Add these lines at the bottom:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
