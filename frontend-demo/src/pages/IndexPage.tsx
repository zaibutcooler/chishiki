import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

import HomePage from "./HomePage";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import AboutPage from "./AboutPage";
import ClassroomPage from "./classroom/ClassroomPage";
import ClassRoomDetailPage from "./classroom/ClassRoomDetailPage";
import CoursePage from "./course/CoursePage";
import CourseDetailPage from "./course/CourseDetailPage";
import CourseCreatePage from "./course/CourseCreatePage";
import ProfilePage from "./profile/ProfilePage";
import CreateProfile from "./profile/CreateProfilePage";
import ProfileSetting from "./profile/ProfileSetting";
import InfoPage from "./admin/InfoPage";
import AllClassRoomsPage from "./classroom/AllClassRoomsPage";
import AllCoursePage from "./course/AllCoursePage";
import EventsPage from "./course/EventsPage";
import TakenCoursesPage from "./course/TakenCoursesPage";
import GradesPage from "./profile/GradesPage";

const IndexPage = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  const isAdmin = useSelector((state: RootState) => state.user.role);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/classroom/:id"
          element={isAuthenticated ? <ClassRoomDetailPage /> : <LoginPage />}
        />
        <Route
          path="/classroom"
          element={isAuthenticated ? <ClassroomPage /> : <LoginPage />}
        />
        <Route
          path="/classroom/all"
          element={isAuthenticated ? <AllClassRoomsPage /> : <LoginPage />}
        />
        <Route path="/courses/:id" element={<CourseDetailPage />} />
        <Route path="/courses/all" element={<AllCoursePage />} />
        <Route path="/courses/events" element={<EventsPage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route
          path="/courses/create-course"
          element={
            isAuthenticated && isAdmin ? (
              <CourseCreatePage />
            ) : isAuthenticated ? (
              <RegisterPage />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route path="/courses/taken" element={<TakenCoursesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/profile"
          element={isAuthenticated ? <ProfilePage /> : <LoginPage />}
        />
        <Route
          path="/profile/grades"
          element={isAuthenticated ? <GradesPage /> : <LoginPage />}
        />
        <Route path="/profile/create-profile" element={<CreateProfile />} />
        <Route
          path="/profile/settings"
          element={isAuthenticated ? <ProfileSetting /> : <LoginPage />}
        />
        <Route
          path="/admin/info"
          element={isAuthenticated && isAdmin ? <InfoPage /> : <LoginPage />}
        />
      </Routes>
    </div>
  );
};

export default IndexPage;
