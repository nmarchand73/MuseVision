import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">MuseVision</h1>
        <p className="text-sm">A digital music score reader</p>
      </div>
    </header>
  );
};

export default Header; 