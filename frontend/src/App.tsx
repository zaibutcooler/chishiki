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
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="flex col-span-1 bg-gray-900">
          <Sidebar />
        </div>
        <div className="container mx-auto col-span-4">
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
      </div>
    </>
  );
}

export default App;
