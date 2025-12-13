
export enum ViewState {
  HOME = 'HOME',
  COURSES = 'COURSES',
  TUTOR = 'TUTOR',
  COURSE_DETAILS = 'COURSE_DETAILS',
  CAREER_SUPPORT = 'CAREER_SUPPORT'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface SyllabusDay {
  day: string;
  topic: string;
}

export interface SyllabusWeek {
  title: string;
  days: SyllabusDay[];
}

export interface ProjectItem {
  title: string;
  skills: string;
}

export interface ProjectSection {
  title: string;
  projects: ProjectItem[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  image: string;
  tags: string[];
  modules: number[]; // IDs of modules from the official curriculum
  detailedSyllabus?: SyllabusWeek[]; // Optional override for day-wise detailed syllabus
  projectSections?: ProjectSection[]; // Optional list of projects
}

export interface SyllabusItem {
  week: number;
  topic: string;
  details: string;
  resources: string[];
}

export interface SyllabusResponse {
  courseTitle: string;
  schedule: SyllabusItem[];
}