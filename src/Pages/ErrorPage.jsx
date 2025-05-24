import React from 'react';
// import { useRouteError } from 'react-router';


const ErrorPage = () => {
  // const error = useRouteError();
  // console.log(error);

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
      <p className="text-lg">Something went wrong.</p>
      {/* <p className="italic">{error.statusText || error.message}</p> */}
      <p className="italic text-7xl">404</p>
    </div>
  );
};

export default ErrorPage;
