import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Home } from './components/Home.jsx';
import Root, { fetchPhoto, fetchTech } from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";

import { NasaPhoto } from "./routes/NasaPhoto.jsx";
import NasaTechTransf from "./routes/NasaTechTransf.jsx";
import TechDetail from "./routes/TechDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/nasa", element: <NasaPhoto />, loader: fetchPhoto },
      { path: "/tech", element: <NasaTechTransf />, loader: fetchTech },
      { path: "/detail", element: <TechDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
