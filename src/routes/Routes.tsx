import {
    createBrowserRouter,
  } from "react-router-dom";
  import App from "../App";

import AddProject from "@/pages/projects/AddProject";
import AllProject from "@/pages/projects/AllProject";
import UpdateProject from "@/pages/projects/UpdateProject";
import AddBlog from "@/pages/blogs/AddBlog";
import AllBlog from "@/pages/blogs/AllBlog";
import UpdateBlog from "@/pages/blogs/UpdateBlog";
import Login from "@/pages/login/Login";
import ErrorPage from "@/pages/errorPage/ErrorPage";
import AddSkill from "@/pages/skills/AddSkill";
import AllSkills from "@/pages/skills/AllSkills";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
          // {
          //     index: true,
          //     element: <Dashboard></Dashboard>
          // },
          {
            path: "/add-project",
            element: <AddProject/>
          },
          {
            path: "/all-projects",
            element: <AllProject/>
          },
          {
            path: "/update-project/:id",
            element: <UpdateProject/>
          },
          {
            path: "/add-blog",
            element: <AddBlog/>
          },
          {
            path: "/all-blogs",
            element: <AllBlog/>
          },
          {
            path: "/update-blog/:id",
            element: <UpdateBlog/>
          },
          {
            path: "/add-skill",
            element: <AddSkill/>
          },
          {
            path: "/all-skills",
            element: <AllSkills/>
          },
          
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
  ]);
  
  export default router;