import React from "react";

interface Course {
  title: string;
  outline: string[];
  startDate: Date | null;
  endDate: Date | null;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const formatDate = (date: Date | null): string => {
    if (!date) return "";

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {course.title}
      </h3>
      <div className="flex flex-col mb-4">
        <span className="text-sm text-gray-600 font-semibold">Outline:</span>
        {course.outline.map((item, index) => (
          <span key={index} className="text-sm text-gray-800">
            {item}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-600 mb-2">
        Start Date: {formatDate(course.startDate)}
      </p>
      <p className="text-sm text-gray-600 mb-4">
        End Date: {formatDate(course.endDate)}
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseCard;
