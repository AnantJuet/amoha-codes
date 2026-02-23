import React from 'react';
import { CourseLayout } from './shared';
import { cssData } from '../../data/courses/cssData';

interface CssCourseProps {
  darkMode: boolean;
}

const CssCourse: React.FC<CssCourseProps> = ({ darkMode }) => (
  <CourseLayout darkMode={darkMode} courseData={cssData} />
);

export default CssCourse;
