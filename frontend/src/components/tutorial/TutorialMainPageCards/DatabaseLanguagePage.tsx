interface PracticeCard {
  title: string;
  description: string;
  problems: number;
  problemsText: string;
  level: 'Beginner to Advanced';
  completed: boolean;
  url: string;
  icon: string;
  category: 'Relational' | 'NoSQL' | 'Query Language' | 'Procedural';
}

interface DatabaseLanguagesPageProps {
  darkMode?: boolean;
}

const DatabaseLanguagesPage = ({ darkMode = false }: DatabaseLanguagesPageProps) => {

  const practiceCards: PracticeCard[] = [
    {
      title: 'Learn SQL',
      description: 'Master SQL for relational databases — learn data modeling, complex queries, joins, subqueries, window functions, and database design principles for MySQL, PostgreSQL, and SQL Server.',
      problems: 178,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/SqlTutorial',
      icon: 'sql',
      category: 'Relational'
    },
    {
      title: 'Learn PL/SQL',
      description: 'Master PL/SQL for Oracle databases — learn stored procedures, functions, triggers, packages, and build robust database applications with Oracle\'s procedural language extension.',
      problems: 145,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/PlsqlTutorial',
      icon: 'plsql',
      category: 'Procedural'
    },
    {
      title: 'Learn T-SQL',
      description: 'Master T-SQL for Microsoft SQL Server — learn Transact-SQL extensions, stored procedures, dynamic SQL, and build enterprise database solutions for SQL Server environments.',
      problems: 156,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/TsqlTutorial',
      icon: 'tsql',
      category: 'Procedural'
    },
    {
      title: 'Learn NoSQL',
      description: 'Master NoSQL database concepts — learn document databases, key-value stores, column-family databases, and understand when to use NoSQL vs relational databases.',
      problems: 132,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/NoSQLTutorial',
      icon: 'nosql',
      category: 'NoSQL'
    },
    {
      title: 'Learn GraphQL',
      description: 'Master GraphQL for modern APIs — learn schema design, queries, mutations, subscriptions, resolvers, and build efficient data fetching APIs for web and mobile applications.',
      problems: 142,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/GraphQLTutorial',
      icon: 'graphql',
      category: 'Query Language'
    },
    {
      title: 'Learn MongoDB Query Language',
      description: 'Master MQL for MongoDB — learn document queries, aggregation pipelines, indexing, and build scalable applications with MongoDB\'s powerful query language and document model.',
      problems: 128,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/MongoDBTutorial',
      icon: 'mongodb',
      category: 'NoSQL'
    }
  ];

  const getIcon = (iconName: string) => {
    const iconClass = "w-8 h-8";
    
    switch (iconName) {
      case 'sql':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#dad8d8" d="M98.9 33.9v60l-35.1 19.6-34.4-19.6v-60l34.4-19.6 35.1 19.6zm-61.5 56.3l28.4 16.2 28.9-16.2v-44l-28.9-16.2-28.4 16.2v44z"/>
            <path fill="#9b9b9a" d="M65.8 26.1l28.9 16.2v44l-28.9 16.2-28.4-16.2v-44l28.4-16.2m0-4.4l-34.4 19.6v60l34.4 19.6 35.1-19.6v-60l-35.1-19.6z"/>
            <path fill="#336791" d="M37.4 46.6l28.4-16.2 28.9 16.2-28.9 16.2-28.4-16.2z"/>
            <path fill="#9b9b9a" d="M65.8 30.4l28.9 16.2-28.9 16.2-28.4-16.2 28.4-16.2m0-4.4l-34.4 19.6 34.4 19.6 35.1-19.6-35.1-19.6z"/>
            <path fill="#336791" d="M37.4 46.6l28.4 16.2v39.2l-28.4-16.2v-39.2z"/>
            <path fill="#9b9b9a" d="M65.8 62.8v39.2l-28.4-16.2v-39.2l28.4 16.2m0-4.4l-34.4-19.6v44l34.4 19.6v-44z"/>
            <path fill="#336791" d="M94.7 46.6l-28.9 16.2v39.2l28.9-16.2v-39.2z"/>
            <path fill="#9b9b9a" d="M65.8 62.8l28.9 16.2v39.2l-28.9-16.2v-39.2m0-4.4v44l34.4-19.6v-44l-34.4 19.6z"/>
          </svg>
        );
      case 'plsql':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#F80000" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#fff" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#F80000" d="M45.8 47.6h36.4v33.8H45.8z"/>
            <path fill="#fff" d="M50.2 52h27.6v25H50.2z"/>
            <path fill="#F80000" d="M55 57h18v15H55z"/>
          </svg>
        );
      case 'tsql':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#004880" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#fff" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#004880" d="M45.8 47.6h36.4v33.8H45.8z"/>
            <path fill="#fff" d="M50.2 52h27.6v25H50.2z"/>
            <text x="64" y="70" textAnchor="middle" fill="#004880" fontSize="20" fontWeight="bold">T-SQL</text>
          </svg>
        );
      case 'nosql':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#4EA94B" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#fff" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#4EA94B" d="M45.8 47.6h36.4v33.8H45.8z"/>
            <path fill="#fff" d="M50.2 52h27.6v25H50.2z"/>
            <text x="64" y="70" textAnchor="middle" fill="#4EA94B" fontSize="16" fontWeight="bold">NoSQL</text>
          </svg>
        );
      case 'graphql':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#E535AB" d="M18.39 47.467l43.533 25.14v50.266L18.39 97.732V47.467z"/>
            <path fill="#E535AB" d="M109.61 47.467v50.265L66.077 122.873V72.607l43.533-25.14z"/>
            <path fill="#E535AB" d="M109.61 30.267L66.077 5.127 22.543 30.267l43.534 25.14 43.533-25.14z"/>
            <path fill="#E535AB" d="M18.39 97.732l43.533 25.141v-50.266L18.39 97.732z"/>
            <path fill="#E535AB" d="M109.61 97.732V47.467L66.077 72.607v50.266L109.61 97.732z"/>
            <path fill="#E535AB" d="M66.077 5.127L22.543 30.267l43.534 25.14 43.533-25.14L66.077 5.127z"/>
          </svg>
        );
      case 'mongodb':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#10AA50" d="M88.038 42.812c-2.267-13.093-9.851-23.907-20.745-30.813-1.44-.896-2.693-.448-2.693 1.343v8.235c0 1.044.747 2.39 1.64 2.987 6.427 4.331 11.253 10.419 13.333 18.106.112.448.56.896 1.12.896h7.346c.56 0 .896-.224 1.12-.896z"/>
            <path fill="#10AA50" d="M86.586 46.179c-2.018 12.324-9.291 22.246-19.817 28.253-1.12.672-2.241.224-2.241-1.12v-7.458c0-.672.336-1.567.896-2.015 5.155-3.579 9.067-8.458 10.971-14.533.224-.672.672-1.12 1.344-1.12h7.794c.672 0 1.12.448 1.12 1.12-.112.896-.224 1.792-.224 2.799z"/>
            <path fill="#10AA50" d="M74.829 59.647c-.896 6.427-4.107 11.754-8.682 15.556-.896.672-1.792.224-1.792-.896v-5.827c0-.896.56-1.792 1.232-2.239 3.131-2.239 5.042-5.27 5.714-9.067.112-.672.56-1.12 1.232-1.12h3.915c.672 0 1.12.448 1.12 1.12-.112.896-.224 1.792-.336 2.463z"/>
            <path fill="#B8B8B8" d="M88.262 42.7c-.112-.672-.56-1.12-1.12-1.12h-7.346c-.56 0-1.008.448-1.12.896-2.267 13.093-9.851 23.907-20.745 30.813-1.44.896-2.693.448-2.693-1.343v-8.235c0-1.044.747-2.39 1.64-2.987 6.427-4.331 11.253-10.419 13.333-18.106.112-.448.56-.896 1.12-.896h7.346c.56 0 .896.224 1.12.896 2.018 12.324 9.291 22.246 19.817 28.253 1.12.672 2.241.224 2.241-1.12v-7.458c0-.672-.336-1.567-.896-2.015-5.155-3.579-9.067-8.458-10.971-14.533z"/>
            <path fill="#B8B8B8" d="M86.81 46.067c-.112-.672-.56-1.12-1.12-1.12h-7.794c-.672 0-1.12.448-1.344 1.12-2.018 12.324-9.291 22.246-19.817 28.253-1.12.672-2.241.224-2.241-1.12v-7.458c0-.672.336-1.567.896-2.015 5.155-3.579 9.067-8.458 10.971-14.533.224-.672.672-1.12 1.344-1.12h7.794c.672 0 1.12.448 1.12 1.12-.112.896-.224 1.792-.224 2.799z"/>
            <path fill="#B8B8B8" d="M75.053 59.535c-.112-.672-.56-1.12-1.12-1.12h-3.915c-.672 0-1.12.448-1.232 1.12-.896 6.427-4.107 11.754-8.682 15.556-.896.672-1.792.224-1.792-.896v-5.827c0-.896.56-1.792 1.232-2.239 3.131-2.239 5.042-5.27 5.714-9.067.112-.672.56-1.12 1.232-1.12h3.915c.672 0 1.12.448 1.12 1.12-.112.896-.224 1.792-.336 2.463z"/>
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
      case 'Relational':
        return darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800';
      case 'NoSQL':
        return darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800';
      case 'Query Language':
        return darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-800';
      case 'Procedural':
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
            <h1 className="text-3xl font-bold">💾 Database & Query Languages</h1>
            <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Used to interact with, design, and manage data across different database systems
            </p>
          </div>
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Relational</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>NoSQL</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Query Language</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Procedural</span>
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

export default DatabaseLanguagesPage;