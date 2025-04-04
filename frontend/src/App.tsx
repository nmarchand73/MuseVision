import { useState, useEffect } from 'react';
import Header from './components/Header';
import ScoreViewPane1 from './components/ScoreViewPane1';
import ScoreViewPane2 from './components/ScoreViewPane2';
import Controls from './components/Controls';

function App() {
  const [backendStatus, setBackendStatus] = useState<string>('Checking...');

  useEffect(() => {
    const checkBackendStatus = async () => {
      try {
        const response = await fetch('http://localhost:8000/healthcheck');
        const data = await response.json();
        
        if (data.status === 'ok') {
          setBackendStatus('Connected');
        } else {
          setBackendStatus('Error: Unexpected response');
        }
      } catch (error) {
        console.error('Backend connection error:', error);
        setBackendStatus('Error: Cannot connect to backend');
      }
    };

    checkBackendStatus();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-light">
      <Header />
      <div className="px-4 py-2 bg-green-100 text-green-800 text-sm flex items-center">
        <span className="mr-2">Backend Status:</span> 
        <span className={`px-2 py-0.5 rounded ${backendStatus === 'Connected' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
          {backendStatus}
        </span>
      </div>
      <main className="flex flex-1 overflow-hidden">
        <div className="grid grid-cols-2 w-full gap-2 p-4">
          <ScoreViewPane1 />
          <ScoreViewPane2 />
        </div>
      </main>
      <Controls />
    </div>
  );
}

export default App; 