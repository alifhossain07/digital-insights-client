import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import BlogPage from "../Components/BlogPage/BlogPage";
import BlogDetails from "../Components/BlogDetails/BlogDetails";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,       
      },
      {
        path: "/login",
        element: <Login></Login>,       
      },
      {
        path: "/register",
        element: <Register></Register>,       
      },
      {
        path: "/blogPage",
        element: <BlogPage></BlogPage>       
      },
      {
        path: "/blog/:id",
        element: <BlogDetails></BlogDetails>       
      },
    ]
      
  },
]);

export default routes;
