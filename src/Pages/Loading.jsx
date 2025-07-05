import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <span
        className="loading loading-spinner text-accent"
        role="status"
        aria-live="polite"
        aria-label="Loading"
      ></span>
      <span className="mt-2 text-accent font-medium">Loading...</span>
    </div>
  );
};

export default Loading;
