import { useState } from 'react';

interface PracticeCard {
  title: string;
  description: string;
  problems: number;
  problemsText: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  completed: boolean;
  href: string;
  icon: string;
  category: 'Machine Learning' | 'Statistical Analysis' | 'Scientific Computing' | 'AI Research';
}

const DataScienceLanguagesPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const practiceCards: PracticeCard[] = [
    {
      title: 'Learn Python',
      description: 'Master Python for data science and AI — learn NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch, and build machine learning models, data analysis pipelines, and AI applications.',
      problems: 192,
      problemsText: 'Problems',
      level: 'Beginner',
      completed: false,
      href: '/python-ds',
      icon: 'python',
      category: 'Machine Learning'
    },
    {
      title: 'Learn R',
      description: 'Master R for statistical computing — learn data visualization with ggplot2, statistical modeling, hypothesis testing, and conduct advanced data analysis for research and academia.',
      problems: 165,
      problemsText: 'Problems',
      level: 'Intermediate',
      completed: false,
      href: '/r',
      icon: 'r',
      category: 'Statistical Analysis'
    },
    {
      title: 'Learn Julia',
      description: 'Master Julia for high-performance scientific computing — learn numerical analysis, parallel computing, and build fast computational models for scientific research and data science.',
      problems: 138,
      problemsText: 'Problems',
      level: 'Intermediate',
      completed: false,
      href: '/julia',
      icon: 'julia',
      category: 'Scientific Computing'
    },
    {
      title: 'Learn MATLAB',
      description: 'Master MATLAB for engineering and scientific computing — learn matrix operations, numerical methods, signal processing, and build mathematical models and simulations.',
      problems: 145,
      problemsText: 'Problems',
      level: 'Intermediate',
      completed: false,
      href: '/matlab',
      icon: 'matlab',
      category: 'Scientific Computing'
    },
    {
      title: 'Learn Scala',
      description: 'Master Scala for big data and distributed computing — learn functional programming, Spark integration, and build scalable data processing pipelines and machine learning systems.',
      problems: 158,
      problemsText: 'Problems',
      level: 'Advanced',
      completed: false,
      href: '/scala',
      icon: 'scala',
      category: 'Machine Learning'
    },
    {
      title: 'Learn Lisp',
      description: 'Master Lisp for AI research and symbolic computing — learn functional programming, metaprogramming, and explore artificial intelligence, theorem proving, and expert systems.',
      problems: 112,
      problemsText: 'Problems',
      level: 'Advanced',
      completed: false,
      href: '/lisp',
      icon: 'lisp',
      category: 'AI Research'
    },
    {
      title: 'Learn Prolog',
      description: 'Master Prolog for logic programming and AI — learn declarative programming, rule-based systems, and build expert systems, natural language processing, and knowledge representation.',
      problems: 98,
      problemsText: 'Problems',
      level: 'Advanced',
      completed: false,
      href: '/prolog',
      icon: 'prolog',
      category: 'AI Research'
    }
  ];

  const getIcon = (iconName: string) => {
    const iconClass = "w-8 h-8";
    
    switch (iconName) {
      case 'python':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#306998" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 93.6)"/>
            <path fill="#FFD43B" d="M91.682 28.38v10.966c0 8.525-6.998 15.34-15.426 15.34H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
            <path fill="#306998" d="M93.604 62.262c-6.599-2.527-12.346-5.51-12.346-12.837V29.649h12.346V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008-4.22-.02-8.251.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V45.14c0 5.791-3.521 9.639-12.346 12.386z"/>
          </svg>
        );
      case 'r':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#276DC3" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#fff" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#276DC3" d="M45.8 47.6h36.4v33.8H45.8z"/>
            <path fill="#fff" d="M50.2 52h27.6v25H50.2z"/>
            <text x="64" y="70" textAnchor="middle" fill="#276DC3" fontSize="24" fontWeight="bold">R</text>
          </svg>
        );
      case 'julia':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#CB3C33" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#fff" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#389826" d="M45.8 47.6h36.4v33.8H45.8z"/>
            <path fill="#9558B2" d="M50.2 52h27.6v25H50.2z"/>
            <text x="64" y="70" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">Julia</text>
          </svg>
        );
      case 'matlab':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#0076A8" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#fff" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#0076A8" d="M45.8 47.6h36.4v33.8H45.8z"/>
            <path fill="#fff" d="M50.2 52h27.6v25H50.2z"/>
            <text x="64" y="70" textAnchor="middle" fill="#0076A8" fontSize="14" fontWeight="bold">MATLAB</text>
          </svg>
        );
      case 'scala':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#DE3423" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#fff" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#DE3423" d="M45.8 47.6h36.4v33.8H45.8z"/>
            <path fill="#fff" d="M50.2 52h27.6v25H50.2z"/>
            <text x="64" y="70" textAnchor="middle" fill="#DE3423" fontSize="16" fontWeight="bold">Scala</text>
          </svg>
        );
      case 'lisp':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#000000" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#fff" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#000000" d="M45.8 47.6h36.4v33.8H45.8z"/>
            <path fill="#fff" d="M50.2 52h27.6v25H50.2z"/>
            <text x="64" y="70" textAnchor="middle" fill="#000000" fontSize="16" fontWeight="bold">Lisp</text>
          </svg>
        );
      case 'prolog':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#742C84" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#fff" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#742C84" d="M45.8 47.6h36.4v33.8H45.8z"/>
            <path fill="#fff" d="M50.2 52h27.6v25H50.2z"/>
            <text x="64" y="70" textAnchor="middle" fill="#742C84" fontSize="14" fontWeight="bold">Prolog</text>
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
      case 'Machine Learning':
        return darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800';
      case 'Statistical Analysis':
        return darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800';
      case 'Scientific Computing':
        return darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-800';
      case 'AI Research':
        return darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-800';
      default:
        return darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800';
    }
  };

  const PracticeCard = ({ card }: { card: PracticeCard }) => (
    <div className={`p-6 rounded-lg border transition-all duration-200 hover:shadow-lg ${
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
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className={`w-4 h-4 rounded border ${
            card.completed 
              ? 'bg-green-500 border-green-500' 
              : darkMode 
                ? 'border-gray-600' 
                : 'border-gray-400'
          } flex items-center justify-center`}>
            {card.completed && (
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <span className={`text-sm ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {card.problems} {card.problemsText}
          </span>
        </div>
        
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
          card.level === 'Beginner'
            ? darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800'
            : card.level === 'Intermediate'
              ? darkMode ? 'bg-yellow-900/30 text-yellow-300' : 'bg-yellow-100 text-yellow-800'
              : darkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-800'
        }`}>
          {card.level} level
        </div>
      </div>
      
      {/* Start Learning Button */}
      <button className={`w-full py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
        darkMode
          ? 'bg-[#6334B9] hover:bg-[#5529a3] text-white'
          : 'bg-[#6334B9] hover:bg-[#5529a3] text-white'
      }`}>
        Start Learning
      </button>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">🔬 Data Science, AI & Research Languages</h1>
            <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Favored for data analysis, machine learning, scientific computing, and artificial intelligence research
            </p>
          </div>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-150 ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Machine Learning</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Statistical Analysis</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Scientific Computing</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>AI Research</span>
          </div>
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {practiceCards.map((card) => (
            <PracticeCard key={card.href} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataScienceLanguagesPage;