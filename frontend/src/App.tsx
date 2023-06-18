import { Router, Routes, Route } from "react-router-dom";

import {
  HomePage,
  LoginPage,
  RegisterPage,
  AboutPage,
  ClassRoomDetailPage,
  ClassroomPage,
  CoursePage,
  CourseDetailPage,
  CourseCreatePage,
  ProfilePage,
  CreateProfile,
  ProfileSetting,
  InfoPage,
} from "./pages/index";
import AllClassRoomsPage from "./pages/classroom/AllClassRoomsPage";
import AllCoursePage from "./pages/course/AllCoursePage";
import TakenCoursesPage from "./pages/course/TakenCoursesPage";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import EventsPage from "./pages/course/EventsPage";
import GradesPage from "./pages/profile/GradesPage";

function App() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/classroom/:id" element={<ClassRoomDetailPage />} />
          <Route path="/classroom" element={<ClassroomPage />} />
          <Route path="/classroom/all" element={<AllClassRoomsPage />} />
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
    </>
  );
}

export default App;
