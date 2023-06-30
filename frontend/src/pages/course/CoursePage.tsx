import React from "react";
import { format } from "date-fns";

interface Course {
  title: string;
  startDate: Date;
  endDate: Date;
}

const AllCoursesPage: React.FC = () => {
  // Dummy data for demonstration purposes
  const courses: Course[] = [
    {
      title: "Course 1",
      startDate: new Date("2023-08-01 14:00"),
      endDate: new Date("2023-08-03 16:00"),
    },
    {
      title: "Course 2",
      startDate: new Date("2023-08-05 10:00"),
      endDate: new Date("2023-08-07 12:00"),
    },
    // Add more courses here
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">All Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-sky-500 rounded-lg p-6 shadow-md text-white">
            <h3 className="text-xl font-bold mb-4">{course.title}</h3>
            <p>
              <strong>Start Date:</strong>{" "}
              {format(course.startDate, "hh:mm a EEEE")}
            </p>
            <p>
              <strong>End Date:</strong>{" "}
              {format(course.endDate, "hh:mm a EEEE")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCoursesPage;
