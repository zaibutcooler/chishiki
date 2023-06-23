import React from "react";
import { Routes, Route } from "react-router-dom";

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
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/classroom/:id" element={<ClassRoomDetailPage />} />
        <Route path="/classroom" element={<ClassroomPage />} />
        {/* <Route path="/classroom/all" element={<AllClassRoomsPage />} /> */}
        <Route path="/courses/:id" element={<CourseDetailPage />} />
        <Route path="/courses/all" element={<AllCoursePage />} />
        <Route path="/courses/events" element={<EventsPage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/courses/create-course" element={<CourseCreatePage />} />
        <Route path="/courses/taken" element={<TakenCoursesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/grades" element={<GradesPage />} />
        <Route path="/profile/create-profile" element={<CreateProfile />} />
        <Route path="/profile/settings" element={<ProfileSetting />} />
        <Route path="/admin/info" element={<InfoPage />} />
      </Routes>
    </div>
  );
};

export default IndexPage;
