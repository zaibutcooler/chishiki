export interface Admin {
  user: string;
  adminID: string;
  firstName: string;
  lastName: string;
  contactEmail?: string;
  control: boolean;
  inCharge: string[];
  created: Date;
}

export interface Student {
  studentID: string;
  user: string;
  firstName: string;
  lastName: string;
  dob?: Date;
  completedCourses: Course[];
  currentCourses: Course[];
  paid: boolean;
  created: Date;
}

export interface Course {
  id: string;
  title: string;
  teachers: Admin[];
  students: Student[];
  outline: string[];
  startDate: Date;
  endDate: Date;
  time: string[];
  zoomLink: string;
  zoomPassword: string;
  classroomLink: string;
  classroomType: string;
  classroomPassword: string;
  limit: number;
  paid: boolean;
  creator: Admin;
  created: Date;
}

export interface User {
  isAuthenticated: boolean;
  token: string;
  email: string;
  role: boolean;
  profileId: string;
}
