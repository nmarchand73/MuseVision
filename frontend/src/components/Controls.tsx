import React from 'react';

const Controls: React.FC = () => {
  return (
    <footer className="bg-dark text-white p-4">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        <button className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-md">
          <span className="mr-2">▶</span> Play
        </button>
        <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
          <span className="mr-2">⏸</span> Pause
        </button>
        <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
          <span className="mr-2">⏹</span> Stop
        </button>
        <div className="flex items-center space-x-2">
          <span>Tempo:</span>
          <input
            type="range"
            min="60"
            max="180"
            defaultValue="120"
            className="w-24"
          />
          <span>120 BPM</span>
        </div>
      </div>
    </footer>
  );
};

export default Controls; 