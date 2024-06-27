import React from "react";
import { Link } from "react-router-dom";

const Error404 = ({ history }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-6xl text-gray-700">404</div>
      <div className="mt-4">
        <Link
          to="/"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Ir al inicio
        </Link>
      </div>
    </div>
  );
};

export default Error404;
