import type { FC } from 'react';
import { useRef, useState, useEffect, useCallback } from 'react';

// --- Icon Imports (for the arrows) --- 
const ChevronLeftIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    className={`w-6 h-6 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    className={`w-6 h-6 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

// --- Interface/Type/Mock Data (MODIFIED) ---
interface CoursesSectionProps { darkMode: boolean; }
interface Course {
  category: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  // ✨ ADDED: Enrollment link
  enrollLink: string; 
}

// --- Mock Data (MODIFIED with enrollLink) ---
const SectionOneData: Course[] = [
  //1. Full-Stack Course
  {
    category: 'Programming',
    title: 'Full Stack Development',
    description: 'Learn to build complete web applications from frontend to backend.',
    image: 'FullStack.png',
    rating: 4.0,
    reviews: 643,
    enrollLink: '/FullStackCourse', // Example link
  },
  //2. AI & ML Course
  {
    category: 'programming',
    title: 'AI & ML Mastery',
    description: 'Become a AIML expert with hands-on projects.',
    image: 'Digital.png',
    rating: 4.0,
    reviews: 890,
    enrollLink: '/AIMLCourse', // Example link
  },
  //3. CSS Course
  {
    category: 'CSS',
    title: 'CSS Course',
    description: 'Learn the core concepts of product management and launch successful Products.',
    image: 'Product.png',
    rating: 4.0,
    reviews: 1920,
    enrollLink: '/CSSCourse', // Example link
  },
  //4. Data Engineering Course
  {
    category: 'Design',
    title: 'Data Engineering',
    description: 'Master the principles of user interface and user experience design.',
    image: 'UiUx.png',
    rating: 4.0,
    reviews: 657,
    enrollLink: '/DataEngineeringCourse', // Example link
  },
  //5. DSA Algo Course
  {
    category: 'Programming',
    title: 'DSA Algo ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/DSACourse', // Example link
  },
  //6. A to Z Course
  {
    category: 'Cloud Computing',
    title: 'A to Z DSA',
    description: 'Get hands-on experience deploying and managing applications in Amazon Web Services.',
    image: 'Cloud.png',
    rating: 4.0,
    reviews: 5643,
    enrollLink: '/DSACourse', // Redirected from AtoZCourse (folder deleted)
  },
  //7. NextJS Course 
  {
    category: 'Design',
    title: 'Nextjs Frontend',
    description: 'Master the principles of user interface and user experience design.',
    image: 'UiUx.png',
    rating: 4.0,
    reviews: 657,
    enrollLink: '/NextjsCourse', // Example link
  },
  // 8. React Frontend Course
  {
    category: 'Business',
    title: 'React Frontend',
    description: 'Learn the core concepts of product management and launch successful Products.',
    image: 'Product.png',
    rating: 4.0,
    reviews: 1920,
    enrollLink: '/ReactCourse', // Example link
  },
  // 9. HTML Course
   {
    category: 'Programming',
    title: 'HTML Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/HTMLCourse', // Example link
  },
  // 10. Java Course
  {
    category: 'Programming',
    title: 'Java Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/JavaCourse', // Example link
  },
  // 11. javaScript Course
  {
    category: 'Programming',
    title: 'JavaScript Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/JavascriptCourse', // Example link
  },
  // 12. Mern-Stack Course
  {
    category: 'Programming',
    title: 'Mern Stack Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/MernstackCourse', // Example link
  },
  //13. Python Course
   {
    category: 'Programming',
    title: 'Python Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/pythonCourse', // Example link
  },
  //14. TypeScript Course
   {
    category: 'Programming',
    title: 'TypeScript Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/typescriptCourse', // Example link
  },
  // 15. C++ Course
   {
    category: 'Programming',
    title: 'C++ Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/courseMain', // Example link
  },
];

const SectionTwoData: Course[] = [
   //1. Full-Stack Course
  {
    category: 'Programming',
    title: 'Full Stack Development',
    description: 'Learn to build complete web applications from frontend to backend.',
    image: 'FullStack.png',
    rating: 4.0,
    reviews: 643,
    enrollLink: '/FullStackCourse', // Example link
  },
  //2. AI & ML Course
  {
    category: 'programming',
    title: 'AI & ML Mastery',
    description: 'Become a AIML expert with hands-on projects.',
    image: 'Digital.png',
    rating: 4.0,
    reviews: 890,
    enrollLink: '/AIMLCourse', // Example link
  },
  //3. CSS Course
  {
    category: 'CSS',
    title: 'CSS Course',
    description: 'Learn the core concepts of product management and launch successful Products.',
    image: 'Product.png',
    rating: 4.0,
    reviews: 1920,
    enrollLink: '/CSSCourse', // Example link
  },
  //4. Data Engineering Course
  {
    category: 'Design',
    title: 'Data Engineering',
    description: 'Master the principles of user interface and user experience design.',
    image: 'UiUx.png',
    rating: 4.0,
    reviews: 657,
    enrollLink: '/DataEngineeringCourse', // Example link
  },
  //5. DSA Algo Course
  {
    category: 'Programming',
    title: 'DSA Algo ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/DSACourse', // Example link
  },
  //6. A to Z Course
  {
    category: 'Cloud Computing',
    title: 'A to Z DSA',
    description: 'Get hands-on experience deploying and managing applications in Amazon Web Services.',
    image: 'Cloud.png',
    rating: 4.0,
    reviews: 5643,
    enrollLink: '/DSACourse', // Redirected from AtoZCourse (folder deleted)
  },
  //7. NextJS Course 
  {
    category: 'Design',
    title: 'Nextjs Frontend',
    description: 'Master the principles of user interface and user experience design.',
    image: 'UiUx.png',
    rating: 4.0,
    reviews: 657,
    enrollLink: '/NextjsCourse', // Example link
  },
  // 8. React Frontend Course
  {
    category: 'Business',
    title: 'React Frontend',
    description: 'Learn the core concepts of product management and launch successful Products.',
    image: 'Product.png',
    rating: 4.0,
    reviews: 1920,
    enrollLink: '/ReactCourse', // Example link
  },
  // 9. HTML Course
   {
    category: 'Programming',
    title: 'HTML Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/HTMLCourse', // Example link
  },
  // 10. Java Course
  {
    category: 'Programming',
    title: 'Java Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/JavaCourse', // Example link
  },
  // 11. javaScript Course
  {
    category: 'Programming',
    title: 'JavaScript Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/JavascriptCourse', // Example link
  },
  // 12. Mern-Stack Course
  {
    category: 'Programming',
    title: 'Mern Stack Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/MernstackCourse', // Example link
  },
  //13. Python Course
   {
    category: 'Programming',
    title: 'Python Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/pythonCourse', // Example link
  },
  //14. TypeScript Course
   {
    category: 'Programming',
    title: 'TypeScript Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/typescriptCourse', // Example link
  },
  // 15. C++ Course
   {
    category: 'Programming',
    title: 'C++ Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/courseMain', // Example link
  },
];


const SectionThirdData: Course[] = [
  //1. Full-Stack Course
  {
    category: 'Programming',
    title: 'Full Stack Development',
    description: 'Learn to build complete web applications from frontend to backend.',
    image: 'FullStack.png',
    rating: 4.0,
    reviews: 643,
    enrollLink: '/FullStackCourse', // Example link
  },
  //2. AI & ML Course
  {
    category: 'programming',
    title: 'AI & ML Mastery',
    description: 'Become a AIML expert with hands-on projects.',
    image: 'Digital.png',
    rating: 4.0,
    reviews: 890,
    enrollLink: '/AIMLCourse', // Example link
  },
  //3. CSS Course
  {
    category: 'CSS',
    title: 'CSS Course',
    description: 'Learn the core concepts of product management and launch successful Products.',
    image: 'Product.png',
    rating: 4.0,
    reviews: 1920,
    enrollLink: '/CSSCourse', // Example link
  },
  //4. Data Engineering Course
  {
    category: 'Design',
    title: 'Data Engineering',
    description: 'Master the principles of user interface and user experience design.',
    image: 'UiUx.png',
    rating: 4.0,
    reviews: 657,
    enrollLink: '/DataEngineeringCourse', // Example link
  },
  //5. DSA Algo Course
  {
    category: 'Programming',
    title: 'DSA Algo ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/DSACourse', // Example link
  },
  //6. A to Z Course
  {
    category: 'Cloud Computing',
    title: 'A to Z DSA',
    description: 'Get hands-on experience deploying and managing applications in Amazon Web Services.',
    image: 'Cloud.png',
    rating: 4.0,
    reviews: 5643,
    enrollLink: '/DSACourse', // Redirected from AtoZCourse (folder deleted)
  },
  //7. NextJS Course 
  {
    category: 'Design',
    title: 'Nextjs Frontend',
    description: 'Master the principles of user interface and user experience design.',
    image: 'UiUx.png',
    rating: 4.0,
    reviews: 657,
    enrollLink: '/NextjsCourse', // Example link
  },
  // 8. React Frontend Course
  {
    category: 'Business',
    title: 'React Frontend',
    description: 'Learn the core concepts of product management and launch successful Products.',
    image: 'Product.png',
    rating: 4.0,
    reviews: 1920,
    enrollLink: '/ReactCourse', // Example link
  },
  // 9. HTML Course
   {
    category: 'Programming',
    title: 'HTML Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/HTMLCourse', // Example link
  },
  // 10. Java Course
  {
    category: 'Programming',
    title: 'Java Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/JavaCourse', // Example link
  },
  // 11. javaScript Course
  {
    category: 'Programming',
    title: 'JavaScript Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/JavascriptCourse', // Example link
  },
  // 12. Mern-Stack Course
  {
    category: 'Programming',
    title: 'Mern Stack Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/MernstackCourse', // Example link
  },
  //13. Python Course
   {
    category: 'Programming',
    title: 'Python Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/pythonCourse', // Example link
  },
  //14. TypeScript Course
   {
    category: 'Programming',
    title: 'TypeScript Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/typescriptCourse', // Example link
  },
  // 15. C++ Course
   {
    category: 'Programming',
    title: 'C++ Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/courseMain', // Example link
  },
];


const SectionFourData: Course[] = [
  //1. Full-Stack Course
  {
    category: 'Programming',
    title: 'Full Stack Development',
    description: 'Learn to build complete web applications from frontend to backend.',
    image: 'FullStack.png',
    rating: 4.0,
    reviews: 643,
    enrollLink: '/FullStackCourse', // Example link
  },
  //2. AI & ML Course
  {
    category: 'programming',
    title: 'AI & ML Mastery',
    description: 'Become a AIML expert with hands-on projects.',
    image: 'Digital.png',
    rating: 4.0,
    reviews: 890,
    enrollLink: '/AIMLCourse', // Example link
  },
  //3. CSS Course
  {
    category: 'CSS',
    title: 'CSS Course',
    description: 'Learn the core concepts of product management and launch successful Products.',
    image: 'Product.png',
    rating: 4.0,
    reviews: 1920,
    enrollLink: '/CSSCourse', // Example link
  },
  //4. Data Engineering Course
  {
    category: 'Design',
    title: 'Data Engineering',
    description: 'Master the principles of user interface and user experience design.',
    image: 'UiUx.png',
    rating: 4.0,
    reviews: 657,
    enrollLink: '/DataEngineeringCourse', // Example link
  },
  //5. DSA Algo Course
  {
    category: 'Programming',
    title: 'DSA Algo ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/DSACourse', // Example link
  },
  //6. A to Z Course
  {
    category: 'Cloud Computing',
    title: 'A to Z DSA',
    description: 'Get hands-on experience deploying and managing applications in Amazon Web Services.',
    image: 'Cloud.png',
    rating: 4.0,
    reviews: 5643,
    enrollLink: '/DSACourse', // Redirected from AtoZCourse (folder deleted)
  },
  //7. NextJS Course 
  {
    category: 'Design',
    title: 'Nextjs Frontend',
    description: 'Master the principles of user interface and user experience design.',
    image: 'UiUx.png',
    rating: 4.0,
    reviews: 657,
    enrollLink: '/NextjsCourse', // Example link
  },
  // 8. React Frontend Course
  {
    category: 'Business',
    title: 'React Frontend',
    description: 'Learn the core concepts of product management and launch successful Products.',
    image: 'Product.png',
    rating: 4.0,
    reviews: 1920,
    enrollLink: '/ReactCourse', // Example link
  },
  // 9. HTML Course
   {
    category: 'Programming',
    title: 'HTML Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/HTMLCourse', // Example link
  },
  // 10. Java Course
  {
    category: 'Programming',
    title: 'Java Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/JavaCourse', // Example link
  },
  // 11. javaScript Course
  {
    category: 'Programming',
    title: 'JavaScript Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/JavascriptCourse', // Example link
  },
  // 12. Mern-Stack Course
  {
    category: 'Programming',
    title: 'Mern Stack Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/MernstackCourse', // Example link
  },
  //13. Python Course
   {
    category: 'Programming',
    title: 'Python Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/pythonCourse', // Example link
  },
  //14. TypeScript Course
   {
    category: 'Programming',
    title: 'TypeScript Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/typescriptCourse', // Example link
  },
  // 15. C++ Course
   {
    category: 'Programming',
    title: 'C++ Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/courseMain', // Example link
  },
];


const SectionFiveData: Course[] = [
   //1. Full-Stack Course
  {
    category: 'Programming',
    title: 'Full Stack Development',
    description: 'Learn to build complete web applications from frontend to backend.',
    image: 'FullStack.png',
    rating: 4.0,
    reviews: 643,
    enrollLink: '/FullStackCourse', // Example link
  },
  //2. AI & ML Course
  {
    category: 'programming',
    title: 'AI & ML Mastery',
    description: 'Become a AIML expert with hands-on projects.',
    image: 'Digital.png',
    rating: 4.0,
    reviews: 890,
    enrollLink: '/AIMLCourse', // Example link
  },
  //3. CSS Course
  {
    category: 'CSS',
    title: 'CSS Course',
    description: 'Learn the core concepts of product management and launch successful Products.',
    image: 'Product.png',
    rating: 4.0,
    reviews: 1920,
    enrollLink: '/CSSCourse', // Example link
  },
  //4. Data Engineering Course
  {
    category: 'Design',
    title: 'Data Engineering',
    description: 'Master the principles of user interface and user experience design.',
    image: 'UiUx.png',
    rating: 4.0,
    reviews: 657,
    enrollLink: '/DataEngineeringCourse', // Example link
  },
  //5. DSA Algo Course
  {
    category: 'Programming',
    title: 'DSA Algo ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/DSACourse', // Example link
  },
  //6. A to Z Course
  {
    category: 'Cloud Computing',
    title: 'A to Z DSA',
    description: 'Get hands-on experience deploying and managing applications in Amazon Web Services.',
    image: 'Cloud.png',
    rating: 4.0,
    reviews: 5643,
    enrollLink: '/DSACourse', // Redirected from AtoZCourse (folder deleted)
  },
  //7. NextJS Course 
  {
    category: 'Design',
    title: 'Nextjs Frontend',
    description: 'Master the principles of user interface and user experience design.',
    image: 'UiUx.png',
    rating: 4.0,
    reviews: 657,
    enrollLink: '/NextjsCourse', // Example link
  },
  // 8. React Frontend Course
  {
    category: 'Business',
    title: 'React Frontend',
    description: 'Learn the core concepts of product management and launch successful Products.',
    image: 'Product.png',
    rating: 4.0,
    reviews: 1920,
    enrollLink: '/ReactCourse', // Example link
  },
  // 9. HTML Course
   {
    category: 'Programming',
    title: 'HTML Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/HTMLCourse', // Example link
  },
  // 10. Java Course
  {
    category: 'Programming',
    title: 'Java Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/JavaCourse', // Example link
  },
  // 11. javaScript Course
  {
    category: 'Programming',
    title: 'JavaScript Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/JavascriptCourse', // Example link
  },
  // 12. Mern-Stack Course
  {
    category: 'Programming',
    title: 'Mern Stack Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/MernstackCourse', // Example link
  },
  //13. Python Course
   {
    category: 'Programming',
    title: 'Python Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/pythonCourse', // Example link
  },
  //14. TypeScript Course
   {
    category: 'Programming',
    title: 'TypeScript Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/typescriptCourse', // Example link
  },
  // 15. C++ Course
   {
    category: 'Programming',
    title: 'C++ Course ',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
    enrollLink: '/courseMain', // Example link
  },
];

// --- CourseCard Component (MODIFIED) ---
interface CourseCardProps { course: Course; darkMode: boolean; }

const CourseCard: FC<CourseCardProps> = ({ course, darkMode }) => (
  <div
    className={`
      rounded-lg shadow-md border overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col flex-shrink-0 w-80 h-[320px]    
      ${darkMode
        ? 'bg-gray-800 border-[#6334B9] hover:shadow-lg hover:shadow-purple-500/30'
        : 'bg-white border-[#6334B9]'
      }
    `}
  >
    <img
      src={course.image}
      alt={course.title}
      className="w-full h-32 object-contain p-2 rounded-2xl"
    />
    <div className="p-4 pt-2 flex flex-col flex-grow h-[150px]">
      <div className={`text-sm font-medium mb-1 ${darkMode ? 'text-[#6334B9]' : 'text-[#6334B9]'}`}>
        {course.category}
      </div>
      <h3 className={`text-xl font-semibold mb-1 line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        {course.title}
      </h3>
      <p className={`text-xs mb-2 line-clamp-2 ${darkMode ? 'text-purple-300' : 'text-[#6334B9]'}`}>
        {course.description}
      </p>
      <div className="flex items-center mb-2">
        <span className={`${darkMode ? 'text-white' : 'text-gray-900'} mr-1`}>
          {course.rating.toFixed(1)}
        </span>
        <div className="flex text-yellow-400 text-sm">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-900'} text-sm ml-2`}>
          ({course.reviews})
        </span>
      </div>
      {/* 🎯 MODIFIED: Replaced <button> with <a> tag and used course.enrollLink for navigation */}
      <a
        href={course.enrollLink}
        className="w-full bg-[#6334B9] hover:bg-[#6334B9] text-white font-bold py-1 px-4 rounded-lg text-sm transition duration-300 shadow-lg mt-auto text-center cursor-pointer"
        // 'text-center' added to keep the text centered like the button was
      >
        Explore
      </a>
    </div>
  </div>
);


// --- Main Courses Section component (Remains largely the same, but imports the modified data) ---
const CoursesSection: FC<CoursesSectionProps> = ({ darkMode }) => {
  const scrollRefOne = useRef<HTMLDivElement>(null);
  const scrollRefTwo = useRef<HTMLDivElement>(null);
  const scrollRefThree = useRef<HTMLDivElement>(null);
  const scrollRefFour = useRef<HTMLDivElement>(null);
  const scrollRefFive = useRef<HTMLDivElement>(null);
  const scrollAmount = 352;

  // State to track scroll position for each section
  const [scrollState, setScrollState] = useState({
    one: { canScrollLeft: false, canScrollRight: true },
    two: { canScrollLeft: false, canScrollRight: true },
    three: { canScrollLeft: false, canScrollRight: true },
    four: { canScrollLeft: false, canScrollRight: true },
    five: { canScrollLeft: false, canScrollRight: true },
  });

  // Function to check scroll position and update state
  const checkScrollPosition = useCallback((ref: React.RefObject<HTMLDivElement | null>, key: 'one' | 'two' | 'three' | 'four' | 'five') => {
    if (ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current;
      const canScrollLeft = scrollLeft > 0;
      const canScrollRight = scrollLeft < scrollWidth - clientWidth - 1;

      setScrollState(prev => ({
        ...prev,
        [key]: { canScrollLeft, canScrollRight }
      }));
    }
  }, []);

  // Set up scroll event listeners
  useEffect(() => {
    const refs = [
      { ref: scrollRefOne, key: 'one' as const },
      { ref: scrollRefTwo, key: 'two' as const },
      { ref: scrollRefThree, key: 'three' as const },
      { ref: scrollRefFour, key: 'four' as const },
      { ref: scrollRefFive, key: 'five' as const },
    ];

    const handleScroll = (key: 'one' | 'two' | 'three' | 'four' | 'five', ref: React.RefObject<HTMLDivElement | null>) => () => {
      checkScrollPosition(ref, key);
    };

    // Add scroll listeners and check initial state
    refs.forEach(({ ref, key }) => {
      const element = ref.current;
      if (element) {
        const scrollHandler = handleScroll(key, ref);
        element.addEventListener('scroll', scrollHandler);
        // Check initial position
        checkScrollPosition(ref, key);
      }
    });

    // Cleanup
    return () => {
      refs.forEach(({ ref, key }) => {
        const element = ref.current;
        if (element) {
          element.removeEventListener('scroll', handleScroll(key, ref));
        }
      });
    };
  }, [checkScrollPosition]);

  // 🎯 FIX: Define separate scroll handlers for each section
  const createScrollHandlers = (ref: React.RefObject<HTMLDivElement | null>, key: 'one' | 'two' | 'three' | 'four' | 'five') => {
    const scrollLeft = () => {
      if (ref.current) {
        ref.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setTimeout(() => checkScrollPosition(ref, key), 350);
      }
    };
    const scrollRight = () => {
      if (ref.current) {
        ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setTimeout(() => checkScrollPosition(ref, key), 350);
      }
    };
    return { scrollLeft, scrollRight };
  };

  const handlersOne = createScrollHandlers(scrollRefOne, 'one');
  const handlersTwo = createScrollHandlers(scrollRefTwo, 'two');
  const handlersThree = createScrollHandlers(scrollRefThree, 'three');
  const handlersFour = createScrollHandlers(scrollRefFour, 'four');
  const handlersFive = createScrollHandlers(scrollRefFive, 'five');

  const arrowStyleBase = `
    absolute top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300
    cursor-pointer
    ${darkMode
      ? 'bg-gray-700 text-white hover:bg-[#6334B9]'
      : 'bg-white text-gray-900 hover:bg-[#6334B9] hover:text-white'
    }
  `;

  const arrowStyle = (visible: boolean) => `
    ${arrowStyleBase}
    ${visible ? 'opacity-100 md:block hidden' : 'opacity-0 pointer-events-none hidden'}
  `;

  return (
    <div className={`font-sans transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <main className="container mx-auto p-4 md:p-8">

        {/* ONE SECTION CODE */}
        <section className="my-8 md:my-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
            <div> {/* Use a div wrapper to stack h2 and p */}
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Premium Courses
              </h2>
              {/* 🌟 ADDED DESCRIPTION HERE 🌟 */}
              <p className={`text-base mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Unlock high-quality, comprehensive learning paths taught by industry experts.
              </p>
            </div>
          </div>

          <div className="relative">
            <button onClick={handlersOne.scrollLeft} className={`${arrowStyle(scrollState.one.canScrollLeft)} left-0 ml-1`} aria-label="Scroll left">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            {/* HORIZONTAL SLIDE TRACK */}
            <div
              ref={scrollRefOne}
              // Increased bottom padding (pb-8) to make space for the fixed link below the cards
              className="flex gap-8 overflow-x-scroll scrollbar-hide py-4 pb-8 snap-x snap-mandatory items-stretch"
            >
              {/* RENDER ALL FEATURED COURSE CARDS */}
              {SectionOneData.map((course, index) => (
                <div key={index} className="snap-start">
                  <CourseCard course={course} darkMode={darkMode} />
                </div>
              ))}
            </div>

            <button onClick={handlersOne.scrollRight} className={`${arrowStyle(scrollState.one.canScrollRight)} right-0 mr-1`} aria-label="Scroll right">
              <ChevronRightIcon className="w-6 h-6" />
            </button>
            {/* NEW: FIXED "EXPLORE ALL" LINK POSITIONED RELATIVE TO THE CAROUSEL CONTAINER */}
            <a
              href="/courses/ExploreAllComponent"
              // Positioned absolutely at the bottom left, aligned with the start of the first card
              // The 'ml-4' accounts for the container's padding/margin to align with the cards.
              className={`
                absolute bottom-0 left-0 ml-12 md:ml-10
                text-base font-medium hover:underline whitespace-nowrap z-20
                ${darkMode
                  ? 'text-[#6334B9] hover:text-purple-300'
                  : 'text-[#6334B9] hover:text-purple-900'
                }
              `}
            >
              Explore all courses &gt;
            </a>
          </div>
        </section>
        {/*END ONE SECTION CODE */}

        {/* TWO SECTION CODE */}
        <section className="my-8 md:my-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
            <div> {/* Use a div wrapper to stack h2 and p */}
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Particular skill set Courses
              </h2>
              {/* 🌟 ADDED DESCRIPTION HERE 🌟 */}
              <p className={`text-base mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Unlock high-quality, comprehensive learning paths taught by industry experts.
              </p>
            </div>
          </div>

          <div className="relative">
            <button onClick={handlersTwo.scrollLeft} className={`${arrowStyle(scrollState.two.canScrollLeft)} left-0 ml-1`} aria-label="Scroll left">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            {/* HORIZONTAL SLIDE TRACK */}
            <div
              ref={scrollRefTwo}
              // Increased bottom padding (pb-8) to make space for the fixed link below the cards
              className="flex gap-8 overflow-x-scroll scrollbar-hide py-4 pb-8 snap-x snap-mandatory items-stretch"
            >
              {/* RENDER ALL FEATURED COURSE CARDS */}
              {SectionTwoData.map((course, index) => (
                <div key={index} className="snap-start">
                  <CourseCard course={course} darkMode={darkMode} />
                </div>
              ))}
            </div>

            <button onClick={handlersTwo.scrollRight} className={`${arrowStyle(scrollState.two.canScrollRight)} right-0 mr-1`} aria-label="Scroll right">
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            {/* NEW: FIXED "EXPLORE ALL" LINK POSITIONED RELATIVE TO THE CAROUSEL CONTAINER */}
            <a
              href="/courses/ExploreAllComponent"
              // Positioned absolutely at the bottom left, aligned with the start of the first card
              // The 'ml-4' accounts for the container's padding/margin to align with the cards.
              className={`
                absolute bottom-0 left-0 ml-12 md:ml-10
                text-base font-medium hover:underline whitespace-nowrap z-20
                ${darkMode
                  ? 'text-[#6334B9] hover:text-purple-300'
                  : 'text-[#6334B9] hover:text-purple-900'
                }
              `}
            >
              Explore all courses &gt;
            </a>
          </div>
        </section>
        {/*END TWO SECTION CODE */}

        {/* THIRD SECTION CODE */}
        <section className="my-8 md:my-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
            <div> {/* Use a div wrapper to stack h2 and p */}
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Individual Skills
              </h2>
              {/* 🌟 ADDED DESCRIPTION HERE 🌟 */}
              <p className={`text-base mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Unlock high-quality, comprehensive learning paths taught by industry experts.
              </p>
            </div>
          </div>

          <div className="relative">
            <button onClick={handlersThree.scrollLeft} className={`${arrowStyle(scrollState.three.canScrollLeft)} left-0 ml-1`} aria-label="Scroll left">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            {/* HORIZONTAL SLIDE TRACK */}
            <div
              ref={scrollRefThree}
              // Increased bottom padding (pb-8) to make space for the fixed link below the cards
              className="flex gap-8 overflow-x-scroll scrollbar-hide py-4 pb-8 snap-x snap-mandatory items-stretch"
            >
              {/* RENDER ALL FEATURED COURSE CARDS */}
              {SectionThirdData.map((course, index) => (
                <div key={index} className="snap-start">
                  <CourseCard course={course} darkMode={darkMode} />
                </div>
              ))}
            </div>

            <button onClick={handlersThree.scrollRight} className={`${arrowStyle(scrollState.three.canScrollRight)} right-0 mr-1`} aria-label="Scroll right">
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            {/* NEW: FIXED "EXPLORE ALL" LINK POSITIONED RELATIVE TO THE CAROUSEL CONTAINER */}
            <a
              href="/courses/ExploreAllComponent"
              // Positioned absolutely at the bottom left, aligned with the start of the first card
              // The 'ml-4' accounts for the container's padding/margin to align with the cards.
              className={`
                absolute bottom-0 left-0 ml-12 md:ml-10
                text-base font-medium hover:underline whitespace-nowrap z-20
                ${darkMode
                  ? 'text-[#6334B9] hover:text-purple-300'
                  : 'text-[#6334B9] hover:text-purple-900'
                }
              `}
            >
              Explore all courses &gt;
            </a>
          </div>
        </section>
        {/*END THIRD SECTION CODE */}


        {/* FOURTH SECTION CODE */}
        <section className="my-8 md:my-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
            <h2 className={`text-3xl font-bold mb-4 md:mb-0 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Other Courses
            </h2>
          </div>

          <div className="relative">
            <button onClick={handlersFour.scrollLeft} className={`${arrowStyle(scrollState.four.canScrollLeft)} left-0 ml-1`} aria-label="Scroll left">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            {/* HORIZONTAL SLIDE TRACK */}
            <div
              ref={scrollRefFour}
              // Increased bottom padding (pb-8) to make space for the fixed link below the cards
              className="flex gap-8 overflow-x-scroll scrollbar-hide py-4 pb-8 snap-x snap-mandatory items-stretch"
            >
              {/* RENDER ALL FEATURED COURSE CARDS */}
              {SectionFourData.map((course, index) => (
                <div key={index} className="snap-start">
                  <CourseCard course={course} darkMode={darkMode} />
                </div>
              ))}
            </div>

            <button onClick={handlersFour.scrollRight} className={`${arrowStyle(scrollState.four.canScrollRight)} right-0 mr-1`} aria-label="Scroll right">
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            {/* NEW: FIXED "EXPLORE ALL" LINK POSITIONED RELATIVE TO THE CAROUSEL CONTAINER */}
            <a
              href="/courses/ExploreAllComponent"
              // Positioned absolutely at the bottom left, aligned with the start of the first card
              // The 'ml-4' accounts for the container's padding/margin to align with the cards.
              className={`
                absolute bottom-0 left-0 ml-12 md:ml-10
                text-base font-medium hover:underline whitespace-nowrap z-20
                ${darkMode
                  ? 'text-[#6334B9] hover:text-purple-300'
                  : 'text-[#6334B9] hover:text-purple-900'
                }
              `}
            >
              Explore all courses &gt;
            </a>
          </div>
        </section>
        {/*END FOURTH SECTION CODE */}

        {/* FIVE SECTION CODE */}
        <section className="my-8 md:my-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
            <div> {/* Use a div wrapper to stack h2 and p */}
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Free Courses
              </h2>
              {/* 🌟 ADDED DESCRIPTION HERE 🌟 */}
              <p className={`text-base mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Unlock high-quality, comprehensive learning paths taught by industry experts.
              </p>
            </div> 

          </div>

          <div className="relative">
            <button onClick={handlersFive.scrollLeft} className={`${arrowStyle(scrollState.five.canScrollLeft)} left-0 ml-1`} aria-label="Scroll left">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            {/* HORIZONTAL SLIDE TRACK */}
            <div
              ref={scrollRefFive}
              // Increased bottom padding (pb-8) to make space for the fixed link below the cards
              className="flex gap-8 overflow-x-scroll scrollbar-hide py-4 pb-8 snap-x snap-mandatory items-stretch"
            >
              {/* RENDER ALL FEATURED COURSE CARDS */}
              {SectionFiveData.map((course, index) => (
                <div key={index} className="snap-start">
                  <CourseCard course={course} darkMode={darkMode} />
                </div>
              ))}
            </div>

            <button onClick={handlersFive.scrollRight} className={`${arrowStyle(scrollState.five.canScrollRight)} right-0 mr-1`} aria-label="Scroll right">
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            {/* NEW: FIXED "EXPLORE ALL" LINK POSITIONED RELATIVE TO THE CAROUSEL CONTAINER */}
            <a
              href="/courses/ExploreAllComponent"
              // Positioned absolutely at the bottom left, aligned with the start of the first card
              // The 'ml-4' accounts for the container's padding/margin to align with the cards.
              className={`
                absolute bottom-0 left-0 ml-12 md:ml-10
                text-base font-medium hover:underline whitespace-nowrap z-20
                ${darkMode
                  ? 'text-[#6334B9] hover:text-purple-300'
                  : 'text-[#6334B9] hover:text-purple-900'
                }
              `}
            >
              Explore all courses &gt;
            </a>
          </div>
        </section>
        {/*END FIVE SECTION CODE */}




      </main>
    </div>
  );
};

export default CoursesSection;