import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">Oops!</h1>
      <p className="text-lg mt-4 text-gray-700">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-sm mt-2 text-gray-600">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
