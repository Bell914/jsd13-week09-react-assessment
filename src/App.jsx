import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Owner from "./pages/Owner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "owner",
        element: <Owner />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
