import React from 'react';

const Loader = () => {
  return (
    <div className="spinner">
      <div className="blob top" />
      <div className="blob bottom" />
      <div className="blob left" />
      <div className="blob move-blob" />
    </div>
  );
};

export default Loader;
