import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import MainLayout from "./Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index : true,
        element : <Home />,
    }
    ]
    
  },
  {
    path: "/about-us",
    element : <AboutUs />,
  }
]);


function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
