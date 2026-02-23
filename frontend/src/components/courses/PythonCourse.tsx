import React from 'react';
import { CourseLayout } from './shared';
import { pythonData } from '../../data/courses/pythonData';

interface PythonCourseProps {
  darkMode: boolean;
}

const PythonCourse: React.FC<PythonCourseProps> = ({ darkMode }) => (
  <CourseLayout darkMode={darkMode} courseData={pythonData} />
);

export default PythonCourse;
