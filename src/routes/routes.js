import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Courses from "../Pages/Courses/Courses";
import CoursesLayout from "../Pages/Courses/CoursesLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SingleCoursePage from "../Pages/SingleCoursePage/SingleCoursePage";
import PrivateRouter from "./PrivateRouter";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      {
        path: "/courses",
        loader: () => {
          return fetch("https://course-data-server.vercel.app/courses");
        },
        element: <CoursesLayout></CoursesLayout>,
      },

      {
        path: "/courses/:id",
        loader: ({ params }) => {
          return fetch(`https://course-data-server.vercel.app/course/${params.id}`);
        },
        element: <SingleCoursePage></SingleCoursePage>,
      },
      { path: "/faq", element: <Faq></Faq> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

export default routes;
