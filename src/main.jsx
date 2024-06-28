import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import CourseList from "./components/CourseList.jsx";
import CoursePage from "./components/CoursePage.jsx";
import CreateCourse from "./components/CreateCourse";
import RecordList from "./components/RecordList";
import Home from "./components/Home.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courselist",
        element: <CourseList />,
      },
      {
        path: "/course/:id",
        element: <CoursePage />,
      },
      {
        path: "/edit/:id",
        element: <CreateCourse />,
      },
      {
        path: "/editMyCourses",
        element: <RecordList />,
      },
      {
        path: "/createNewCourse",
        element: <CreateCourse />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
