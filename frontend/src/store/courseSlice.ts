import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "./types";

const courseSlice = createSlice({
  name: "coursea",
  initialState: {
    courses: [] as Course[],
  },
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload;
    },
    addCourse: (state, action: PayloadAction<Course>) => {
      state.courses = [action.payload, ...state.courses];
    },
    updateCourse: (
      state,
      action: PayloadAction<{ courseId: string; updatedCourse: Course }>
    ) => {
      const { courseId, updatedCourse } = action.payload;
      const index = state.courses.findIndex((course) => course.id === courseId);
      if (index !== -1) {
        state.courses[index] = updatedCourse;
      }
    },
    deleteCourse: (state, action: PayloadAction<string>) => {
      const courseId = action.payload;
      state.courses = state.courses.filter((course) => course.id !== courseId);
    },
  },
});

export const { setCourses, addCourse, updateCourse, deleteCourse } =
  courseSlice.actions;
export default courseSlice.reducer;
