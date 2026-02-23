interface PracticeCard {
  title: string;
  description: string;
  problems: number;
  problemsText: string;
  level: 'Beginner to Advanced';
  completed: boolean;
  url: string;
  icon: string;
  category: 'Game Engine' | 'Scripting' | 'Prototyping' | 'Graphics';
}

interface GameDevelopmentPageProps {
  darkMode?: boolean;
}

const GameDevelopmentPage = ({ darkMode = false }: GameDevelopmentPageProps) => {

  const practiceCards: PracticeCard[] = [
    {
      title: 'Learn C++',
      description: 'Master C++ for Unreal Engine — learn game architecture, performance optimization, graphics programming, and build AAA games with Unreal Engine\'s powerful C++ framework.',
      problems: 185,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
    url: '/CppTutorial',
      icon: 'cpp',
      category: 'Game Engine'
    },
    {
      title: 'Learn C#',
      description: 'Master C# for Unity Engine — learn game mechanics, component-based architecture, Unity API, and build 2D/3D games across multiple platforms with Unity.',
      problems: 168,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/Csharp',
      icon: 'csharp',
      category: 'Game Engine'
    },
    {
      title: 'Learn GDScript',
      description: 'Master GDScript for Godot Engine — learn node-based architecture, game logic, and build lightweight 2D/3D games with Godot\'s Python-like scripting language.',
      problems: 142,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/GDScriptTutorial',
      icon: 'gdscript',
      category: 'Game Engine'
    },
    {
      title: 'Learn Lua',
      description: 'Master Lua for game scripting — learn Roblox development, game modding, and build scripts for games like World of Warcraft, Garry\'s Mod, and other moddable games.',
      problems: 125,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/LuaTutorial',
      icon: 'lua',
      category: 'Scripting'
    },
    {
      title: 'Learn Python',
      description: 'Master Python for game prototyping — learn Pygame, rapid game development, tools programming, and build game prototypes, AI behaviors, and development tools.',
      problems: 135,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/pythonTutorial',
      icon: 'python',
      category: 'Prototyping'
    }
  ];

  const getIcon = (iconName: string) => {
    const iconClass = "w-8 h-8";
    
    switch (iconName) {
      case 'cpp':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#659AD2" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
            <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
            <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"/>
            <path d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z" fill="#fff"/>
          </svg>
        );
      case 'csharp':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#9B4F96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
            <path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
            <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"/>
            <path d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z" fill="#fff"/>
          </svg>
        );
      case 'gdscript':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#478CBF" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#fff" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#478CBF" d="M45.8 47.6h36.4v33.8H45.8z"/>
            <path fill="#fff" d="M50.2 52h27.6v25H50.2z"/>
            <text x="64" y="70" textAnchor="middle" fill="#478CBF" fontSize="12" fontWeight="bold">GDScript</text>
          </svg>
        );
      case 'lua':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#000080" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#fff" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#000080" d="M45.8 47.6h36.4v33.8H45.8z"/>
            <path fill="#fff" d="M50.2 52h27.6v25H50.2z"/>
            <text x="64" y="70" textAnchor="middle" fill="#000080" fontSize="18" fontWeight="bold">Lua</text>
          </svg>
        );
      case 'python':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#306998" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 93.6)"/>
            <path fill="#FFD43B" d="M91.682 28.38v10.966c0 8.525-6.998 15.34-15.426 15.34H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
            <path fill="#306998" d="M93.604 62.262c-6.599-2.527-12.346-5.51-12.346-12.837V29.649h12.346V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008-4.22-.02-8.251.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V45.14c0 5.791-3.521 9.639-12.346 12.386z"/>
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
      case 'Game Engine':
        return darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800';
      case 'Scripting':
        return darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800';
      case 'Prototyping':
        return darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-800';
      case 'Graphics':
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
            <h1 className="text-3xl font-bold">🎮 Game Development Languages</h1>
            <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Used for game engines, graphics, physics systems, and interactive gameplay programming
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
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Game Engine</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Scripting</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Prototyping</span>
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

export default GameDevelopmentPage;