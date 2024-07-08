import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AnonymousRoute from "./components/AnonymousRoute";
import ProtectedRoute from "./components/ProtectedRoute";

import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatePasswordPage from "./pages/CreatePasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";

import DashboardPage from "./pages/Dashboard";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import TeacherDashboardPage from "./pages/TeacherDashboardPage";
import UserSettingsPage from "./pages/UserSettingsPage";

import CoursePage from "./pages/CoursePage";
import CourseListPage from "./pages/CourseListPage";
import CreateCoursePage from "./pages/CreateCoursePage";

import LectureListPage from "./pages/LectureListPage";
import LecturePage from "./pages/LecturePage";
import CreateLecturePage from "./pages/CreateLecturePage";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Layout setSearch={setSearch}>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* -------------------------------------  */}
          {/* User Account Management Related Pages  */}
          <Route
            path="/login"
            element={
              <AnonymousRoute>
                <LoginPage />
              </AnonymousRoute>
            }
          />
          <Route
            path="/register"
            element={
              <AnonymousRoute>
                <RegisterPage />
              </AnonymousRoute>
            }
          />
          <Route
            path="/reset-password"
            element={
              <AnonymousRoute>
                <ResetPasswordPage />
              </AnonymousRoute>
            }
          />
          <Route
            path="/create-password/:token"
            element={<CreatePasswordPage />}
          />
          <Route
            path="/me"
            element={
              <ProtectedRoute roles={["student", "teacher", "admin"]}>
                <UserSettingsPage />
              </ProtectedRoute>
            }
          />
          {/* -------------------------------------  */}
          {/* Dashboards  */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute roles={["student", "teacher", "admin"]}>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
						path="/teacher/users"
						element={
							<ProtectedRoute roles={["teacher"]}>
								<TeacherDashboardPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/admin/users"
						element={
							<ProtectedRoute roles={["admin"]}>
								<AdminDashboardPage />
							</ProtectedRoute>
						}
					/>
          {/* -------------------------------------  */}
          {/* Courses & Lectures  */}
          <Route
            path="/courses"
            element={
              <ProtectedRoute roles={["student", "teacher", "admin"]}>
                <CourseListPage search={search} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/create"
            element={
              <ProtectedRoute roles={["teacher", "admin"]}>
                <CreateCoursePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/:courseId"
            element={
              <ProtectedRoute roles={["student", "teacher", "admin"]}>
                <CoursePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/:courseId/edit"
            element={
              <ProtectedRoute roles={["teacher", "admin"]}>
                <CreateCoursePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/:courseId/lectures"
            element={
              <ProtectedRoute roles={["student", "teacher", "admin"]}>
                <LectureListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/:courseId/lectures/create"
            element={
              <ProtectedRoute roles={["teacher", "admin"]}>
                <CreateLecturePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/:courseId/lectures/:lectureId"
            element={
              <ProtectedRoute roles={["student", "teacher", "admin"]}>
                <LecturePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/:courseId/lectures/:lectureId/edit"
            element={
              <ProtectedRoute roles={["teacher", "admin"]}>
                <CreateLecturePage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster position="bottom-center" />
      </Layout>
    </Router>
  );
}

export default App;
