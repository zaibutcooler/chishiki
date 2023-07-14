import React from "react";
import CourseCard from "../../components/cards/CourseCard";
import { Course } from "./CourseCreatePage";

const AllCoursePage: React.FC = () => {
  const courses: Course[] = [
    {
      title: "Web Development 101",
      outline: ["HTML", "CSS", "JavaScript"],
      startDate: new Date("2023-07-01"),
      endDate: new Date("2023-07-31"),
      time: ["10:00 AM", "2:00 PM"],
      zoomLink: "https://zoom.us/webinar/123456789",
      zoomPassword: "123456",
      classroomLink: "https://classroom.google.com",
      classroomType: "Google Classroom",
      classroomPassword: "password123",
      limit: 30,
      paid: false,
    },
    {
      title: "React Masterclass",
      outline: ["React fundamentals", "React components", "State management"],
      startDate: new Date("2023-08-01"),
      endDate: new Date("2023-08-31"),
      time: ["9:00 AM", "12:00 PM"],
      zoomLink: "https://zoom.us/webinar/987654321",
      zoomPassword: "654321",
      classroomLink: "https://classroom.google.com",
      classroomType: "Google Classroom",
      classroomPassword: "password123",
      limit: 20,
      paid: true,
    },
    // Add more courses as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">All Courses</h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCoursePage;
