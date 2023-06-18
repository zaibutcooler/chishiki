import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect } from "react";
import axios from "axios";
import { setCourses } from "../../store/courseSlice";
import { Course } from "../../store/types";

const CoursePage = () => {
  const { courses } = useSelector((state: RootState) => state.coursea);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDhhN2FjYTU5ZmZlYTAxNjkxMmU5ODAiLCJpYXQiOjE2ODcwMzk2MDgsImV4cCI6MTY4NzA0MzIwOH0.oReba7jP_nU-hNxIWE8ePlDXRard2quuVzqzp0oiFY0"; // Replace with your actual JWT token
        const response = await axios.get("/course", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const fetchedCourses: Course[] = response.data;
        dispatch(setCourses(fetchedCourses));
      } catch (error) {
        // Handle error
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">CoursePage</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses &&
          courses.map((course, index) => (
            <div className="bg-white shadow-lg rounded-md p-4" key={index}>
              <h2 className="text-xl font-bold mb-2">{course.title}</h2>
              <p className="mb-2">
                Teachers:
                {course.teachers.map((teacher) => teacher.firstName)}
              </p>
              <p className="mb-2">Students: {course.students.length}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CoursePage;
