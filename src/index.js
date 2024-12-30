import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./componants/MainLayout";
import Login from "./componants/auth/Login";
import Register from "./componants/auth/Register";
import Productspage from "./componants/Productspage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path:'',
            element:<App/>
        },
        {
            path:'/products',
            element:<Productspage/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
