import { Link } from 'react-router-dom'; // Link component imported for clickable cards

interface SubjectCard {
  title: string;
  description: string;
  topics: number;
  topicsText: string;
  level: 'Beginner to Advanced';
  completed: boolean;
  url: string;
  icon: string;
  category: 'Core Foundations' | 'Systems & Networking' | 'Data & Databases' | 'Data Science' | 'Programming & Development';
}

interface ComputerSciencePageProps {
  darkMode?: boolean;
}

const ComputerSciencePage = ({ darkMode = false }: ComputerSciencePageProps) => {

  const subjectCards: SubjectCard[] = [
    // Core Foundations
    {
      title: 'Computer Fundamentals',
      description: 'Learn the basics of computer systems, hardware, software, and how computers process information. Essential foundation for all computer science studies.',
      topics: 45,
      topicsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/ComputerFundamentals',
      icon: 'fundamentals',
      category: 'Core Foundations'
    },
    {
      title: 'Engineering Mathematics',
      description: 'Master mathematical concepts essential for computer science including discrete mathematics, calculus, linear algebra, and probability theory.',
      topics: 68,
      topicsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/EngMath',
      icon: 'math',
      category: 'Core Foundations'
    },
    {
      title: 'Maths for Computer Science',
      description: 'Specialized mathematics for computing including logic, set theory, graph theory, combinatorics, and mathematical reasoning for algorithms.',
      topics: 72,
      topicsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/MathCS',
      icon: 'cs-math',
      category: 'Core Foundations'
    },

    // Systems & Networking
    {
      title: 'Operating Systems',
      description: 'Learn how operating systems work, process management, memory management, file systems, and system programming concepts.',
      topics: 75,
      topicsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/OperatingSystemsTutorial',
      icon: 'os',
      category: 'Systems & Networking'
    },
    {
      title: 'Computer Organization & Architecture',
      description: 'Understand computer hardware architecture, CPU design, memory hierarchy, I/O systems, and performance optimization.',
      topics: 58,
      topicsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
     url: '/OrganizationTutorial',
      icon: 'architecture',
      category: 'Systems & Networking'
    },
    {
      title: 'Computer Networks',
      description: 'Master networking concepts, protocols, TCP/IP stack, network security, and distributed system communication.',
      topics: 62,
      topicsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/NetworksTutorial',
      icon: 'networks',
      category: 'Systems & Networking'
    },
    {
      title: 'Theory of Computation',
      description: 'Study automata theory, formal languages, computability, and computational complexity. Foundation for understanding computation limits.',
      topics: 48,
      topicsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
     url: '/ComputationTutorial',
      icon: 'computation',
      category: 'Systems & Networking'
    },
    {
      title: 'Compiler Design',
      description: 'Learn how compilers work, lexical analysis, parsing, semantic analysis, optimization, and code generation techniques.',
      topics: 55,
      topicsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/CompilerTutorial',
      icon: 'compiler',
      category: 'Systems & Networking'
    },
    {
      title: 'Distributed Systems',
      description: 'Understand distributed computing, consensus algorithms, distributed databases, and building scalable distributed applications.',
      topics: 42,
      topicsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/DistributedTutorial',
      icon: 'distributed',
      category: 'Systems & Networking'
    },
    {
      title: 'Linux Tutorial',
      description: 'Master Linux operating system, command line tools, shell scripting, system administration, and open-source development.',
      topics: 65,
      topicsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/LinuxTutorial',
      icon: 'linux',
      category: 'Systems & Networking'
    },
    {
      title: 'Cybersecurity Tutorial',
      description: 'Learn security principles, cryptography, network security, ethical hacking, and security best practices for software development.',
      topics: 70,
      topicsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
     url: '/CyberSecurityTutorial',
      icon: 'security',
      category: 'Systems & Networking'
    },

    // Data & Databases
    {
      title: 'Database Management System (DBMS)',
      description: 'Master database design, SQL, normalization, transaction processing, and working with relational and NoSQL databases.',
      topics: 80,
      topicsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/DbmsTutorial',
      icon: 'dbms',
      category: 'Data & Databases'
    },
    {
      title: 'Data Warehousing',
      description: 'Learn data warehouse design, ETL processes, OLAP, business intelligence, and large-scale data storage solutions.',
      topics: 45,
      topicsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/WarehousingTutorial',
      icon: 'warehouse',
      category: 'Data & Databases'
    },

    // Data Science
    {
      title: 'Machine Learning Tutorial',
      description: 'Learn machine learning algorithms, supervised and unsupervised learning, neural networks, and practical ML applications.',
      topics: 85,
      topicsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/launchingsoon',
      icon: 'ml',
      category: 'Data Science'
    },
    {
      title: 'Artificial Intelligence Tutorial',
      description: 'Study AI concepts, search algorithms, knowledge representation, natural language processing, and intelligent systems.',
      topics: 72,
      topicsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
     url: '/launchingsoon',
      icon: 'ai',
      category: 'Data Science'
    },
    {
      title: 'Data Analysis Tutorial',
      description: 'Master data analysis techniques, statistical methods, data visualization, and extracting insights from complex datasets.',
      topics: 60,
      topicsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
     url: '/launchingsoon',
      icon: 'analysis',
      category: 'Data Science'
    },
    {
      title: 'Data Science Tutorial',
      description: 'Comprehensive data science curriculum covering data preprocessing, machine learning, big data technologies, and real-world projects.',
      topics: 95,
      topicsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/launchingsoon',
      icon: 'data-science',
      category: 'Data Science'
    },

    // Programming & Development
    {
      title: 'Software Engineering',
      description: 'Learn software development methodologies, requirements engineering, design patterns, testing, and project management.',
      topics: 78,
      topicsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/SDLCTutorial',
      icon: 'software',
      category: 'Programming & Development'
    },
    {
      title: 'Web Technology',
      description: 'Master web development technologies, frontend and backend frameworks, web protocols, and modern web application architecture.',
      topics: 88,
      topicsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/tutorial/WebDevLanguage',
      icon: 'web',
      category: 'Programming & Development'
    }
  ];

  const getIcon = (iconName: string) => {
    const iconClass = "w-8 h-8";
    
    switch (iconName) {
      case 'fundamentals':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      case 'math':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'cs-math':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'os':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        );
      case 'architecture':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case 'networks':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
        );
      case 'computation':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'compiler':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'distributed':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
          </svg>
        );
      case 'linux':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'security':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        );
      case 'dbms':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        );
      case 'warehouse':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'ml':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      case 'ai':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case 'analysis':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'data-science':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'software':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'web':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
          </svg>
        );
      default:
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
    }
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'Core Foundations':
        return darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800';
      case 'Systems & Networking':
        return darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800';
      case 'Data & Databases':
        return darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-800';
      case 'Data Science':
        return darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-800';
      case 'Programming & Development':
        return darkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-800';
      default:
        return darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800';
    }
  };

  // UPDATED SubjectCard Component to include 'h-full', Link, and repositioned 'level'
  const SubjectCard = ({ card }: { card: SubjectCard }) => (
    // Added 'flex flex-col justify-between h-full' for uniform card height and sticky bottom content
    <div className={`p-6 rounded-lg border transition-all duration-200 hover:shadow-lg flex flex-col justify-between h-full ${
      darkMode 
        ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
        : 'bg-white border-gray-200 hover:border-gray-300'
    }`}>
      
      {/* Top Content Area - Everything that sticks to the top */}
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
      </div>

      {/* Bottom Action Area - Pushed to the bottom (mt-auto) */}
      <div className="mt-auto pt-4 space-y-3">
        {/* Level Badge - Now above the button and centered/left-aligned for style */}
        <div className="flex justify-center">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            darkMode
              ? 'bg-green-900/30 text-green-300'
              : 'bg-green-100 text-green-800'
          }`}>
            {card.level} level
          </span>
        </div>
        
        {/* Start Learning Button - Wrapped in Link and using card.href */}
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

  const categories = [
    'Core Foundations',
    'Systems & Networking',
    'Data & Databases',
    'Data Science',
    'Programming & Development'
  ];

  const getCategoryCards = (category: string) => {
    return subjectCards.filter(card => card.category === category);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">📚 Computer Science Core Subjects</h1>
            <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Master the theoretical and practical foundations of computer science.
            </p>
          </div>
        </div>

        {/* Subject Categories */}
        {categories.map(category => (
          <div key={category} className="mb-12">
            <h2 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {category}
            </h2>
            {/* Added 'h-full' to grid items to ensure full height for flex cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
              {getCategoryCards(category).map((card) => (
                <SubjectCard key={card.url} card={card} />
              ))}
            </div>
            
            {/* Horizontal Rule to separate categories visually */}
            {category !== categories[categories.length - 1] && (
              <hr className={`mt-10 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} />
            )}
          </div>
        ))}

      </div>
    </div>
  );
};

export default ComputerSciencePage;