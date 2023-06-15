import { Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AboutPage from "./pages/AboutPage";
import ClassroomPage from "./pages/classroom/ClassroomPage";
import ClassRoomDetailPage from "./pages/classroom/ClassRoomDetailPage";
import CoursePage from "./pages/course/CoursePage";
import CourseDetailPage from "./pages/course/CourseDetailPage";
import CourseCreatePage from "./pages/course/CourseCreatePage";
import ProfilePage from "./pages/profile/ProfilePage";
import CreateProfile from "./pages/profile/CreateProfile";
import ProfileSetting from "./pages/profile/ProfileSetting";
import Navbar from "./components/Navbar";
import InfoPage from "./pages/admin/InfoPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/classroom/:id" element={<ClassRoomDetailPage />} />
          <Route path="/classroom" element={<ClassroomPage />} />
          <Route path="/courses/:id" element={<CourseDetailPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/create-course" element={<CourseCreatePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/profile/settings" element={<ProfileSetting />} />
          <Route path="/admin/info" element={<InfoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
