import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import Contact from "./pages/Contact.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

import './assets/navbar.css'
import './assets/work.css'
import ThankYou from "./pages/ThankYou.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "apps",
        element: <Work />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: 'thanks', 
        element: <ThankYou />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
