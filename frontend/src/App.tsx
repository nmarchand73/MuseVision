import { useState } from 'react';
import Header from './components/Header';
import ScoreViewPane1 from './components/ScoreViewPane1';
import ScoreViewPane2 from './components/ScoreViewPane2';
import Controls from './components/Controls';

function App() {
  return (
    <div className="flex flex-col h-screen bg-light">
      <Header />
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