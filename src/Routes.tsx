import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Chat from "./Pages/Chat";
import LoginPage from "./Pages";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);

export default Router;
