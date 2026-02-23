interface PracticeCard {
  title: string;
  description: string;
  problems: number;
  problemsText: string;
  level: 'Beginner to Advanced';
  completed: boolean;
  url: string;
  icon: string;
  category: 'Systems Programming' | 'Embedded Systems' | 'Compiler Development' | 'Memory Safe';
}

interface SystemsProgrammingPageProps {
  darkMode?: boolean;
}

const SystemsProgrammingPage = ({ darkMode = false }: SystemsProgrammingPageProps) => {

  const practiceCards: PracticeCard[] = [
    {
      title: 'Learn C',
      description: 'Master C programming for systems development — learn memory management, pointers, low-level operations, and build operating systems, compilers, and embedded applications.',
      problems: 222,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/CTutorial',
      icon: 'c',
      category: 'Systems Programming'
    },
    {
      title: 'Learn C++',
      description: 'Master C++ for high-performance systems — learn object-oriented programming, templates, STL, and build complex systems software, game engines, and performance-critical applications.',
      problems: 192,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/CppTutorial',
      icon: 'cplusplus',
      category: 'Systems Programming'
    },
    {
      title: 'Learn Rust',
      description: 'Master Rust for memory-safe systems programming — learn ownership system, zero-cost abstractions, and build safe concurrent systems, web assembly, and embedded applications.',
      problems: 135,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
     url: '/RustTutorial',
      icon: 'rust',
      category: 'Memory Safe'
    },
    {
      title: 'Learn Assembly',
      description: 'Master Assembly language for ultimate control — learn x86/x64 architecture, low-level programming, reverse engineering, and understand how computers work at the hardware level.',
      problems: 98,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/AssemblyTutorial',
      icon: 'assembly',
      category: 'Systems Programming'
    },
    {
      title: 'Learn Ada',
      description: 'Master Ada for high-reliability systems — learn strong typing, contract programming, and build safety-critical systems for aerospace, defense, and transportation industries.',
      problems: 112,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/AdaTutorial',
      icon: 'ada',
      category: 'Embedded Systems'
    },
    {
      title: 'Learn D',
      description: 'Master D language for modern systems programming — learn metaprogramming, concurrency, and build efficient systems with C-like performance and modern language features.',
      problems: 105,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/DLanguageTutorial',
      icon: 'd',
      category: 'Systems Programming'
    },
    {
      title: 'Learn Zig',
      description: 'Master Zig for robust systems development — learn compile-time execution, manual memory management, and build small, fast, and reliable system software.',
      problems: 88,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/ZigTutorial',
      icon: 'zig',
      category: 'Compiler Development'
    }
  ];

  const getIcon = (iconName: string) => {
    const iconClass = "w-8 h-8";
    
    switch (iconName) {
      case 'c':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#659AD2" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
            <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
            <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"/>
          </svg>
        );
      case 'cplusplus':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#659AD2" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
            <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
            <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"/>
            <path d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z" fill="#fff"/>
          </svg>
        );
      case 'rust':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#000" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#fff" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#000" d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z"/>
          </svg>
        );
      case 'assembly':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#00599C" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#fff" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#00599C" d="M45.8 47.6h36.4v33.8H45.8z"/>
            <path fill="#fff" d="M50.2 52h27.6v25H50.2z"/>
            <path fill="#00599C" d="M55 57h18v15H55z"/>
          </svg>
        );
      case 'ada':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#000000" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#02D8E9" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#000000" d="M45 45h38v38H45z"/>
            <path fill="#02D8E9" d="M50 50h28v28H50z"/>
          </svg>
        );
      case 'd':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#B03931" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#fff" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#B03931" d="M45.8 47.6h36.4v33.8H45.8z"/>
            <path fill="#fff" d="M50.2 52h27.6v25H50.2z"/>
          </svg>
        );
      case 'zig':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#F7A41D" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#fff" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#F7A41D" d="M45.8 47.6h36.4v33.8H45.8z"/>
            <path fill="#fff" d="M50.2 52h27.6v25H50.2z"/>
            <path fill="#F7A41D" d="M55 57h18v15H55z"/>
          </svg>
        );
      default:
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#666" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
          </svg>
        );
    }
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'Systems Programming':
        return darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800';
      case 'Embedded Systems':
        return darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800';
      case 'Compiler Development':
        return darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-800';
      case 'Memory Safe':
        return darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-800';
      default:
        return darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800';
    }
  };

  const PracticeCard = ({ card }: { card: PracticeCard }) => (
    <div className={`p-6 rounded-lg border transition-all duration-200 hover:shadow-lg flex flex-col justify-between h-full ${
      darkMode 
        ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
        : 'bg-white border-gray-200 hover:border-gray-300'
    }`}>

      {/* Icon and Title */}
      <div className="flex items-center space-x-3 mb-3">
        <div className="flex-shrink-0">
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
      
      {/* Problems and Level */}
      <div className="flex items-center justify-center mb-4">
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
          darkMode
            ? 'bg-green-900/30 text-green-300'
            : 'bg-green-100 text-green-800'
        }`}>
          {card.level} level
        </div>
      </div>
      
      {/* Start Learning Button */}
      <a href={card.url} className={`w-full py-2 rounded-md text-sm font-medium transition-colors duration-150 text-center ${
        darkMode
          ? 'bg-[#6334B9] hover:bg-[#5529a3] text-white'
          : 'bg-[#6334B9] hover:bg-[#5529a3] text-white'
      }`}>
        Start Learning
      </a>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">⚙️ Systems & Low-Level Programming</h1>
            <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Used for operating systems, compilers, embedded systems, and performance-critical applications
            </p>
          </div>
          
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-150 ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button> */}
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Systems Programming</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Embedded Systems</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Compiler Development</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Memory Safe</span>
          </div>
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {practiceCards.map((card) => (
            <PracticeCard key={card.url} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemsProgrammingPage;