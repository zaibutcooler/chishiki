import React, { useState } from "react";

interface CourseFormProps {
  onSubmit: (course: Course) => void;
}

interface Course {
  title: string;
  outline: string[];
  startDate: Date | null;
  endDate: Date | null;
  time: string[];
  zoomLink: string;
  zoomPassword: string;
  classroomLink: string;
  classroomType: string;
  classroomPassword: string;
  limit: number;
  paid: boolean;
}

const CourseCreateForm: React.FC<CourseFormProps> = ({ onSubmit }) => {
  const [course, setCourse] = useState<Course>({
    title: "",
    outline: [],
    startDate: null,
    endDate: null,
    time: [],
    zoomLink: "",
    zoomPassword: "",
    classroomLink: "",
    classroomType: "",
    classroomPassword: "",
    limit: 0,
    paid: false,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(course);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block mb-2 font-medium text-gray-700">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={course.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="outline"
          className="block mb-2 font-medium text-gray-700">
          Outline:
        </label>
        <textarea
          id="outline"
          name="outline"
          value={course.outline.join("\n")}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="startDate"
          className="block mb-2 font-medium text-gray-700">
          Start Date:
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={
            course.startDate ? course.startDate.toISOString().split("T")[0] : ""
          }
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="endDate"
          className="block mb-2 font-medium text-gray-700">
          End Date:
        </label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={
            course.endDate ? course.endDate.toISOString().split("T")[0] : ""
          }
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="time" className="block mb-2 font-medium text-gray-700">
          Time:
        </label>
        <input
          type="text"
          id="time"
          name="time"
          value={course.time.join(", ")}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="zoomLink"
          className="block mb-2 font-medium text-gray-700">
          Zoom Link:
        </label>
        <input
          type="text"
          id="zoomLink"
          name="zoomLink"
          value={course.zoomLink}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="zoomPassword"
          className="block mb-2 font-medium text-gray-700">
          Zoom Password:
        </label>
        <input
          type="password"
          id="zoomPassword"
          name="zoomPassword"
          value={course.zoomPassword}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="classroomLink"
          className="block mb-2 font-medium text-gray-700">
          Classroom Link:
        </label>
        <input
          type="text"
          id="classroomLink"
          name="classroomLink"
          value={course.classroomLink}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="classroomType"
          className="block mb-2 font-medium text-gray-700">
          Classroom Type:
        </label>
        <input
          type="text"
          id="classroomType"
          name="classroomType"
          value={course.classroomType}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="classroomPassword"
          className="block mb-2 font-medium text-gray-700">
          Classroom Password:
        </label>
        <input
          type="password"
          id="classroomPassword"
          name="classroomPassword"
          value={course.classroomPassword}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="limit" className="block mb-2 font-medium text-gray-700">
          Limit:
        </label>
        <input
          type="number"
          id="limit"
          name="limit"
          value={course.limit}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="paid" className="inline-flex items-center">
          <input
            type="checkbox"
            id="paid"
            name="paid"
            checked={course.paid}
            onChange={(event) =>
              setCourse((prevCourse) => ({
                ...prevCourse,
                paid: event.target.checked,
              }))
            }
            className="mr-2 form-checkbox focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-gray-700">Paid</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
        Create Course
      </button>
    </form>
  );
};

export default CourseCreateForm;
