import React, { useState } from "react";

export interface Course {
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

const CourseCreatePage: React.FC = () => {
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
    // Perform form submission or API call here
    console.log(course); // Replace with your logic
  };

  return (
    <div className=" py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Create Course
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 border border-sky-200">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-medium mb-2">
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
              className="block text-gray-700 text-sm font-medium mb-2">
              Outline:
            </label>
            <textarea
              id="outline"
              name="outline"
              value={course.outline.join("\n")}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="startDate"
              className="block text-gray-700 text-sm font-medium mb-2">
              Start Date:
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={
                course.startDate
                  ? course.startDate.toISOString().split("T")[0]
                  : ""
              }
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="endDate"
              className="block text-gray-700 text-sm font-medium mb-2">
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
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="time"
              className="block text-gray-700 text-sm font-medium mb-2">
              Time:
            </label>
            <input
              type="text"
              id="time"
              name="time"
              value={course.time.join(", ")}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="zoomLink"
              className="block text-gray-700 text-sm font-medium mb-2">
              Zoom Link:
            </label>
            <input
              type="text"
              id="zoomLink"
              name="zoomLink"
              value={course.zoomLink}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="zoomPassword"
              className="block text-gray-700 text-sm font-medium mb-2">
              Zoom Password:
            </label>
            <input
              type="password"
              id="zoomPassword"
              name="zoomPassword"
              value={course.zoomPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="classroomLink"
              className="block text-gray-700 text-sm font-medium mb-2">
              Classroom Link:
            </label>
            <input
              type="text"
              id="classroomLink"
              name="classroomLink"
              value={course.classroomLink}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="classroomType"
              className="block text-gray-700 text-sm font-medium mb-2">
              Classroom Type:
            </label>
            <input
              type="text"
              id="classroomType"
              name="classroomType"
              value={course.classroomType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="classroomPassword"
              className="block text-gray-700 text-sm font-medium mb-2">
              Classroom Password:
            </label>
            <input
              type="password"
              id="classroomPassword"
              name="classroomPassword"
              value={course.classroomPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="limit"
              className="block text-gray-700 text-sm font-medium mb-2">
              Limit:
            </label>
            <input
              type="number"
              id="limit"
              name="limit"
              value={course.limit}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="paid"
              className="block text-gray-700 text-sm font-medium mb-2">
              Paid:
            </label>
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
              className="form-checkbox h-4 w-4 text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-end mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Create Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseCreatePage;
