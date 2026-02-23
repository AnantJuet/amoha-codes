interface PracticeCard {
  title: string;
  description: string;
  problems: number;
  problemsText: string;
  level: 'Beginner to Advanced';
  completed: boolean;
  url: string;
  icon: string;
}

interface WebDevelopmentPageProps {
  darkMode?: boolean;
}

const WebDevelopmentPage = ({ darkMode = false }: WebDevelopmentPageProps) => {

  const practiceCards: PracticeCard[] = [
    {
      title: 'Learn HTML',
      description: 'Master HTML from the ground up — a complete, structured journey covering everything from basic tags to advanced page structuring, semantic markup, and accessibility.',
      problems: 183,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/Html', // Updated link to use a hash fragment for demonstration
      icon: 'html'
    },
    {
      title: 'Learn CSS',
      description: 'Master CSS styling and layout — learn modern CSS features including Flexbox, Grid, animations, responsive design, and CSS frameworks.',
      problems: 195,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/CSS',
      icon: 'css'
    },
    {
      title: 'Learn JavaScript',
      description: 'Master JavaScript from Basics to Advanced — learn modern ES6+ features, DOM manipulation, async programming, and full-stack web development.',
      problems: 169,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/JSTutorial',
      icon: 'javascript'
    },
    {
      title: 'Learn TypeScript',
      description: 'Master TypeScript from Basics to Advanced — learn type safety, modern JavaScript features, and build scalable applications with TypeScript.',
      problems: 165,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/TypescriptTutorial',
      icon: 'typescript'
    },
    {
      title: 'Learn PHP',
      description: 'Master PHP from basics to advanced — a complete, practical journey into dynamic web development, server-side scripting, and WordPress development.',
      problems: 199,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/Php',
      icon: 'php'
    },
    {
      title: 'Learn SQL',
      description: 'Master SQL from fundamentals to advanced queries — learn database design, complex queries, optimization, and database management for web applications.',
      problems: 178,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
     url: '/SqlTutorial',
      icon: 'sql'
    },
    {
      title: 'Learn GraphQL',
      description: 'Master GraphQL from basics to advanced — learn efficient data fetching, schema design, resolvers, and building modern APIs with GraphQL.',
      problems: 142,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/GraphQLTutorial',
      icon: 'graphql'
    },
    {
      title: 'Learn ASP.NET',
      description: 'Master ASP.NET framework — learn C# web development, MVC pattern, Web API, Entity Framework, and building enterprise-level web applications.',
      problems: 156,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/AspNetTutorial',
      icon: 'aspnet'
    },
    {
      title: 'Learn ColdFusion',
      description: 'Master ColdFusion Markup Language — learn rapid web application development, CFML tags, and building dynamic websites with Adobe ColdFusion.',
      problems: 98,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/ColdFusionTutorial',
      icon: 'coldfusion'
    },
    {
      title: 'Learn WebAssembly',
      description: 'Master WebAssembly (Wasm) — learn high-performance web applications, compiling languages to Wasm, and running code at near-native speed in browsers.',
      problems: 87,
      problemsText: 'Problems',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/WebAssemblyTutorial',
      icon: 'webassembly'
    }
  ];

  const getIcon = (iconName: string) => {
    const iconClass = "w-8 h-8";
    
    switch (iconName) {
      case 'html':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/>
            <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/>
            <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/>
            <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/>
          </svg>
        );
      case 'css':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/>
            <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"/>
            <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"/>
            <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"/>
            <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.331-7.858.208-2.337 2.406-26.881z"/>
            <path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"/>
          </svg>
        );
      case 'javascript':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
            <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.629-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/>
          </svg>
        );
      case 'typescript':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#007ACC" d="M2 63.91v62.5h125V1.41H2zm100.73-5.24c3.18 0 5.95.47 8.36 1.42 2.41.95 4.44 2.36 6.09 4.26 1.65 1.9 2.89 4.26 3.72 7.1.83 2.84 1.24 6.26 1.24 10.27 0 4.02-.45 7.53-1.36 10.53-.91 3-2.27 5.56-4.09 7.69-1.82 2.13-4.09 3.79-6.82 4.98-2.73 1.19-5.91 1.78-9.55 1.78-2.61 0-5-.31-7.17-.93-2.17-.62-4.06-1.54-5.67-2.75-1.61-1.21-2.89-2.69-3.84-4.44-.95-1.75-1.43-3.74-1.43-5.97h12.86c0 2.13.71 3.8 2.14 5 1.43 1.2 3.31 1.8 5.64 1.8 2.37 0 4.24-.57 5.62-1.71 1.38-1.14 2.07-2.7 2.07-4.67 0-1.91-.63-3.38-1.9-4.42-1.26-1.04-3.17-1.56-5.73-1.56h-3.34v-10.98h3.34c2.44 0 4.38-.52 5.82-1.56 1.44-1.04 2.16-2.55 2.16-4.53 0-1.87-.64-3.31-1.91-4.33-1.27-1.02-3.1-1.53-5.5-1.53-2.31 0-4.13.52-5.45 1.56-1.32 1.04-1.98 2.48-1.98 4.33H74.4c0-2.13.68-4.06 2.05-5.78 1.37-1.72 3.27-3.06 5.71-4.02 2.44-.96 5.27-1.44 8.5-1.44zM89.53 95.18H76.65V34.91h12.88z"/>
          </svg>
        );
      case 'php':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#8993be" d="M43.428 85.225c-10.722 0-19.428-8.707-19.428-19.428s8.707-19.428 19.428-19.428 19.428 8.707 19.428 19.428-8.707 19.428-19.428 19.428zm0-33.855c-7.948 0-14.428 6.48-14.428 14.428s6.48 14.428 14.428 14.428 14.428-6.48 14.428-14.428-6.48-14.428-14.428-14.428zM84.572 85.225c-10.722 0-19.428-8.707-19.428-19.428s8.707-19.428 19.428-19.428 19.428 8.707 19.428 19.428-8.707 19.428-19.428 19.428zm0-33.855c-7.948 0-14.428 6.48-14.428 14.428s6.48 14.428 14.428 14.428 14.428-6.48 14.428-14.428-6.48-14.428-14.428-14.428z"/>
            <path fill="#232531" d="M64 118.708c-30.132 0-54.708-24.576-54.708-54.708S33.868 9.292 64 9.292s54.708 24.576 54.708 54.708S94.132 118.708 64 118.708zm0-104.415C36.283 14.293 13.708 36.868 13.708 64.5s22.575 50.207 50.292 50.207 50.292-22.575 50.292-50.207S91.717 14.293 64 14.293z"/>
            <path fill="#8993be" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292zm0 4.001c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#232531" d="M72.124 65.812H55.876v-2.624h16.248v2.624z"/>
          </svg>
        );
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
      case 'aspnet':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#512BD4" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#fff" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#512BD4" d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z"/>
            <path fill="#fff" d="M45.8 47.6h36.4v33.8H45.8z"/>
            <path fill="#512BD4" d="M50.2 52h27.6v25H50.2z"/>
          </svg>
        );
      case 'coldfusion':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#0099FF" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#fff" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#0099FF" d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z"/>
          </svg>
        );
      case 'webassembly':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#654FF0" d="M64 9.292c-30.132 0-54.708 24.576-54.708 54.708S33.868 118.708 64 118.708s54.708-24.576 54.708-54.708S94.132 9.292 64 9.292z"/>
            <path fill="#fff" d="M64 14.293c27.717 0 50.292 22.575 50.292 50.207S91.717 114.707 64 114.707 13.708 92.132 13.708 64.5 36.283 14.293 64 14.293z"/>
            <path fill="#654FF0" d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z"/>
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
        <h3 className={`text-lg font-semibold ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {card.title}
        </h3>
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
      
      {/* Start Learning Button (Now an <a> tag) */}
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
            <h1 className="text-3xl font-bold">🌐 Web Development Languages</h1>
            <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Primarily used for building websites, web apps, and interactive interfaces
            </p>
          </div>
          
          
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {practiceCards.map((card) => (
            <PracticeCard key={card.url} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
