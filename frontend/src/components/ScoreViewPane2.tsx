import React from 'react';

const ScoreViewPane2: React.FC = () => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm h-full">
      <h2 className="text-lg font-semibold mb-2">Piano Roll</h2>
      <div className="bg-gray-100 h-5/6 flex items-center justify-center rounded">
        <p className="text-gray-500">Piano roll visualization will be displayed here</p>
      </div>
    </div>
  );
};

export default ScoreViewPane2; 