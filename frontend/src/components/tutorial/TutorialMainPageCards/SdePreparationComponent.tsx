import React, { useState } from "react";
// Import Link component for clickable links
import { Link } from 'react-router-dom'; 


// 1. TutorialPageComponentProps (Kept)
interface TutorialPageComponentProps {
  darkMode: boolean;
}

// 2. PreparationCard Interface (Kept)
interface PreparationCard {
  title: string;
  description: string;
  items: number;
  itemsText: string;
  level: 'Beginner to Advanced';
  completed: boolean;
  url: string;
  icon: string;
  category: 'CS Fundamentals' | 'DSA' | 'System Design' | 'Coding Practice';
}

// 3. Main Component (Using the name and props from the first snippet)
const TutorialPageComponent: React.FC<TutorialPageComponentProps> = ({ darkMode }) => {
  // Keeping useState for card completion status (reserved for future use)
  const [_completedCourses] = useState<Set<string>>(new Set());
  void _completedCourses;

  // Preparation Card Data (Kept)
  const preparationCards: PreparationCard[] = [
    // CS Fundamentals
    {
      title: 'Computer Science Subjects',
      description: 'Master core CS fundamentals including Operating Systems, DBMS, Computer Networks, OOP, and Software Engineering concepts essential for technical interviews.',
      items: 150,
      itemsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/tutorial/ComputerScienceCoreSubjects',
      icon: 'cs',
      category: 'CS Fundamentals',

    },
    {
      title: 'System Design',
      description: 'Learn to design scalable systems, microservices, databases, caching strategies, and handle large-scale distributed systems design problems.',
      items: 85,
      itemsText: 'Design Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/SystemDesignTutorial',
      icon: 'system-design',
      category: 'CS Fundamentals',

    },

    // DSA
    {
      title: 'Learn Data Structures',
      description: 'Comprehensive guide to essential data structures - Arrays, Linked Lists, Trees, Graphs, Hash Tables, and their implementations and use cases.',
      items: 45,
      itemsText: 'Data Structures',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/DataStructuresTutorial',
      icon: 'data-structures',
      category: 'DSA',

    },
    {
      title: 'Learn Algorithms',
      description: 'Master fundamental algorithms including sorting, searching, dynamic programming, greedy algorithms, graph algorithms, and complexity analysis.',
      items: 60,
      itemsText: 'Algorithms',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/AlgorithmsTutorial',
      icon: 'algorithms',
      category: 'DSA',

    },
    {
      title: 'Practice Data Structures & Algorithms',
      description: 'Hands-on practice with 500+ curated DSA problems with detailed solutions, patterns, and interview-focused problem-solving techniques.',
      items: 500,
      itemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/practice',
      icon: 'practice-dsa',
      category: 'DSA',

    },

    // Coding Practice
    {
      title: 'Practice Competitive Programming',
      description: 'Sharpen your problem-solving skills with competitive programming challenges, contests, and advanced algorithm implementation practice.',
      items: 300,
      itemsText: 'Challenges',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/practice/CP',
      icon: 'competitive',
      category: 'Coding Practice',

    },
    {
      title: 'Interview Preparation',
      description: 'Comprehensive interview prep with mock interviews, behavioral questions, company-specific patterns, and real interview problems from top tech companies.',
      items: 200,
      itemsText: 'Questions',
      level: 'Beginner to Advanced',
      completed: false,
       url: '/launchingsoon',
      icon: 'interview',
      category: 'Coding Practice',
    
    }
  ];

  // Helper Functions (Kept)
  const getIcon = (iconName: string) => {
    const iconClass = "w-8 h-8";
    
    switch (iconName) {
      case 'cs':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      case 'system-design':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case 'data-structures':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case 'algorithms':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'practice-dsa':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'competitive':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'interview':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
    }
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'CS Fundamentals':
        return darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800';
      case 'DSA':
        return darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800';
      case 'System Design':
        return darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-800';
      case 'Coding Practice':
        return darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-800';
      default:
        return darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800';
    }
  };
  
  // PreparationCard Component - UPDATED to move 'Level' badge to the bottom action area
  const PreparationCard = ({ card }: { card: PreparationCard }) => (
    // Add 'flex flex-col justify-between h-full' to ensure cards have equal height and bottom elements are pushed down
    <div className={`p-6 rounded-lg border transition-all duration-200 hover:shadow-lg flex flex-col justify-between h-full ${
      darkMode 
        ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
        : 'bg-white border-gray-200 hover:border-gray-300'
    }`}>
      
      {/* Top Content Area - Contains everything that should stick to the top */}
      <div>
        {/* Icon and Title */}
        <div className="flex items-center space-x-3 mb-3">
          <div className={`flex-shrink-0 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {getIcon(card.icon)}
          </div>
          <div>
            <h3 className={`text-lg font-semibold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {card.title}
            </h3>
          </div>
        </div>

        {/* Category Badge */}
        <div className="mb-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryBadgeColor(card.category)}`}>
            {card.category}
          </span>
        </div>

        {/* Description */}
        <p className={`text-sm mb-4 ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {card.description}
        </p>
        
        {/* Removed the original Items/Level div to place Level at the bottom */}
      </div>
      
      {/* Bottom Action Area - Pushed to the bottom (mt-auto) */}
      <div className="mt-auto pt-4 space-y-3">
        
        {/* Level Badge - Now above the button and centered (due to parent flex column) */}
        <div className="flex justify-center">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            darkMode
              ? 'bg-green-900/30 text-green-300'
              : 'bg-green-100 text-green-800'
          }`}>
            {card.level} level
          </span>
        </div>
       
        {/* Start Preparation Button - Wrapped in Link */}
        <Link 
          to={card.url} // **Clickable Link**
          className={`block w-full text-center py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
            darkMode
              ? 'bg-[#6334B9] hover:bg-[#5529a3] text-white'
              : 'bg-[#6334B9] hover:bg-[#5529a3] text-white'
          }`}
        >
          Start Learning
        </Link>
      </div>
    </div>
  );

  // Main Render (Kept)
  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">🚀 SDE Preparation</h1>
            <p className={`mt-2 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Comprehensive preparation guide for Software Development Engineer interviews at top tech companies
            </p>
            <p className={`mt-1 text-sm ${
              darkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              Master Computer Science fundamentals, Data Structures & Algorithms, System Design, and coding practice to ace your technical interviews.
            </p>
          </div>
        </div>

        {/* Preparation Path / Card Grid */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Core Interview Topics
          </h2>
          {/* Added 'h-full' to grid items to ensure full height for flex cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
            {preparationCards.map((card) => (
              <PreparationCard key={card.url} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialPageComponent;

