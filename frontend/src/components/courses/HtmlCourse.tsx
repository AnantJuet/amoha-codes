import React from 'react';
import { CourseLayout } from './shared';
import { htmlData } from '../../data/courses/htmlData';

interface HtmlCourseProps {
  darkMode: boolean;
}

const HtmlCourse: React.FC<HtmlCourseProps> = ({ darkMode }) => (
  <CourseLayout darkMode={darkMode} courseData={htmlData} />
);

export default HtmlCourse;
