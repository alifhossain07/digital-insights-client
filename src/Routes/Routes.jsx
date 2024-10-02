import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import BlogPage from "../Components/BlogPage/BlogPage";
import BlogDetails from "../Components/BlogDetails/BlogDetails";
import SearchResults from "../Components/SearchResults/SearchResults";
import MyBlogs from "../Components/MyBlogs/MyBlogs";
import UpdateBlog from "../Components/UpdateBlog/UpdateBlog";
import AddBlog from "../Components/AddBlog/AddBlog";


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
      {
        path: "/searchresults",
        element: <SearchResults></SearchResults>
      },
      {
        path: "/myblogs",
        element: <MyBlogs></MyBlogs>
      },
      {
        path: "/addblog",
        element: <AddBlog></AddBlog>
      },
      {
        path: "/updateblog/:id",
        element: <UpdateBlog></UpdateBlog>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:5000/blogs/${params.id}`);
          if (!response.ok) {
            throw new Error('Blog not found');
          }
          return response.json();
        },
      }
    ]
      
  },
]);

export default routes;
