import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center p-20">
      <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
      <p className="text-lg">Something went wrong.</p>
      {error && (
        <p className="italic mt-2 text-sm text-gray-600">
          {error.statusText || error.message || 'Unknown error'}
        </p>
      )}
      <p className="italic text-7xl mt-6">404</p>
    </div>
  );
};

export default ErrorPage;
