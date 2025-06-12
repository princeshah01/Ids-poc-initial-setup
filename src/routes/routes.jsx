import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import Projectoverview from "@/pages/Projectoverview";
import Main from "@/pages/Main";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element:<Projectoverview/>
      },
      {
        path:"/upload-image",
        element:<Main/>
      }
    ]
  }
]);

export default router;