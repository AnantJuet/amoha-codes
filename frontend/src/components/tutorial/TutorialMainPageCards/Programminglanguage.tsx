import { Link } from 'react-router-dom';

interface PracticeCard {
  title: string;
  description: string;
  problems: number;
  problemsText: string;
  level: 'Beginner to Advanced';
  completed: boolean;
  url: string;
  icon: string;
  category: 'System Programming' | 'General Purpose' | 'Web & Scripting' | 'Mobile Development';
}

interface PracticePageProps {
  darkMode?: boolean;
}

const PracticePage = ({ darkMode = false }: PracticePageProps) => {

  const practiceCards: PracticeCard[] = [
    // System Programming Languages
    {
      title: 'Learn C',
      description: 'Master C from Basics to Advanced — a structured, point-to-point learning path designed to build strong programming foundations and take you to industry-level expertise.',
      problems: 222,
      problemsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/CTutorial',
      icon: 'c',
      category: 'System Programming'
    },
    {
      title: 'Learn C++',
      description: 'Master C++ from Basics to Advanced — a structured, point-to-point learning path designed to build strong programming foundations and take you to industry-level expertise.',
      problems: 192,
      problemsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/CppTutorial',
      icon: 'cplusplus',
      category: 'System Programming'
    },
    {
      title: 'Learn Rust',
      description: 'Master Rust from Basics to Advanced — learn memory safety, zero-cost abstractions, and systems programming with Rust\'s powerful ownership model.',
      problems: 135,
      problemsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/RustTutorial',
      icon: 'rust',
      category: 'System Programming'
    },
    {
      title: 'Learn Go',
      description: 'Master Go (Golang) from Basics to Advanced — learn concurrent programming, efficient memory management, and build high-performance applications with Go.',
      problems: 158,
      problemsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/GO',
      icon: 'go',
      category: 'System Programming'
    },

    // General Purpose Languages
    {
      title: 'Learn Java',
      description: 'Master Java from Basics to Advanced — a structured, point-to-point learning path designed to build strong programming foundations and take you to industry-level expertise.',
      problems: 181,
      problemsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/JavaTutorial',
      icon: 'java',
      category: 'General Purpose'
    },
    {
      title: 'Learn Python',
      description: 'Master Python from Basics to Advanced — a structured, point-to-point learning path designed to build strong programming foundations and take you to industry-level expertise.',
      problems: 192,
      problemsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/pythonTutorial',
      icon: 'python',
      category: 'General Purpose'
    },
    {
      title: 'Learn C#',
      description: 'Master C# from Basics to Advanced — a comprehensive learning path covering .NET framework, object-oriented programming, and modern C# features for enterprise development.',
      problems: 175,
      problemsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/Csharp',
      icon: 'csharp',
      category: 'General Purpose'
    },
    {
      title: 'Learn Ruby',
      description: 'Master Ruby from Basics to Advanced — learn Ruby on Rails, metaprogramming, and build web applications with this elegant and developer-friendly language.',
      problems: 142,
      problemsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/RubyTutorial',
      icon: 'ruby',
      category: 'General Purpose'
    },

    // Web & Scripting Languages
    {
      title: 'Learn JavaScript',
      description: 'Master JavaScript from Basics to Advanced — learn modern ES6+ features, DOM manipulation, async programming, and full-stack web development.',
      problems: 169,
      problemsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/JSTutorial',
      icon: 'javascript',
      category: 'Web & Scripting'
    },
    {
      title: 'Learn TypeScript',
      description: 'Master TypeScript from Basics to Advanced — learn type safety, modern JavaScript features, and build scalable applications with TypeScript.',
      problems: 165,
      problemsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/TypescriptTutorial',
      icon: 'typescript',
      category: 'Web & Scripting'
    },

    // Mobile Development Languages
    {
      title: 'Learn Swift',
      description: 'Master Swift from Basics to Advanced — become proficient in iOS/macOS development with modern Swift syntax, UIKit, SwiftUI, and Apple ecosystem integration.',
      problems: 145,
      problemsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/Swift',
      icon: 'swift',
      category: 'Mobile Development'
    },
    {
      title: 'Learn Kotlin',
      description: 'Master Kotlin from Basics to Advanced — learn Android development, coroutines, and modern app development with Google\'s preferred language for Android.',
      problems: 168,
      problemsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/Kotlin',
      icon: 'kotlin',
      category: 'Mobile Development'
    },
    {
      title: 'Learn Dart',
      description: 'Master Dart from Basics to Advanced — learn Flutter framework, cross-platform app development, and build beautiful native apps for multiple platforms.',
      problems: 128,
      problemsText: 'Topics',
      level: 'Beginner to Advanced',
      completed: false,
      url: '/DartTutorial',
      icon: 'dart',
      category: 'Mobile Development'
    }
  ];

  const getIcon = (iconName: string) => {
    const iconClass = "w-8 h-8";

    switch (iconName) {
      case 'c':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#659AD2" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z" />
            <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z" />
            <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z" />
          </svg>
        );
      case 'cplusplus':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#659AD2" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z" />
            <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z" />
            <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z" />
            <path d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z" fill="#fff" />
          </svg>
        );
      case 'rust':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path d="M63.59 18.12c-1.23 0-2.24 1-2.24 2.24s1 2.24 2.24 2.24 2.24-1 2.24-2.24-1-2.24-2.24-2.24m22.7 6.73c-1.23 0-2.24 1-2.24 2.24s1 2.24 2.24 2.24 2.24-1 2.24-2.24-1-2.24-2.24-2.24M41.3 24.85c-1.23 0-2.24 1-2.24 2.24s1 2.24 2.24 2.24 2.24-1 2.24-2.24-1-2.24-2.24-2.24m64.78 35.41a35.36 35.36 0 01-3.47 15c-1.23-.06-3.77-.06-5.72-.06-1.6 0-3.62 0-5.43.06a27.9 27.9 0 006.82-18.17 28.37 28.37 0 00-28.32-28.32 28.37 28.37 0 00-28.32 28.32c0 1 0 1.89.12 2.83l-.44.19v.06c-.69.31-1.35.63-2 1a14.37 14.37 0 00-13.91-10.73A14.54 14.54 0 0011 64.88a14.4 14.4 0 007.86 12.8c-.31.75-.56 1.54-.81 2.33-.56-.06-1.1-.12-1.66-.12a10.5 10.5 0 00-10.45 10.51 10.5 10.5 0 0010.44 10.51 10.62 10.62 0 003.74-.69 27.47 27.47 0 0024.39 14.92h37.84a27.47 27.47 0 0024.39-14.92 10.62 10.62 0 003.74.69 10.5 10.5 0 0010.45-10.45A10.5 10.5 0 00110.48 80c-.56 0-1.1.06-1.66.12a21.26 21.26 0 00-.75-2.27c4.62-2.64 7.74-7.61 7.74-13.29a14.6 14.6 0 00-9.73-13.74v-.56z" fill="#000"/>
            <path d="M54.27 99a32.51 32.51 0 005.65.56h7.36a32.51 32.51 0 005.65-.56v-3.93H54.27zm20.66-47.36c3.81 0 6.63 3.43 6.63 10.66s-2.82 10.66-6.63 10.66-6.63-3.43-6.63-10.66 2.82-10.66 6.63-10.66m-22.46 0c3.81 0 6.63 3.43 6.63 10.66s-2.82 10.66-6.63 10.66-6.63-3.43-6.63-10.66 2.82-10.66 6.63-10.66M52.84 84.05a3.89 3.89 0 003.87-3.87 3.87 3.87 0 10-7.74 0 3.89 3.89 0 003.87 3.87m21.52 0a3.89 3.89 0 003.87-3.87 3.87 3.87 0 10-7.74 0 3.89 3.89 0 003.87 3.87" fill="#fff"/>
          </svg>
        );
      case 'go':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#00ACD7" d="M19.1 65.8c-.3 0-.5-.1-.7-.2l-.6-.6c-.1-.2-.1-.4 0-.6l.6-.6c.2-.2.5-.2.7 0l.6.6c.2.2.2.5 0 .7l-.6.7zm89.7-1.8c-1.8-1.2-3.7-2.2-5.8-2.9.2-1.2.3-2.4.3-3.7 0-8.1-3.5-15.4-9-20.4-5.5-5-13-8-21.3-8-5.6 0-10.8 1.3-15.3 3.6-4.6-2.3-9.7-3.6-15.3-3.6-8.3 0-15.8 3.1-21.3 8.1-5.5 5-9 12.3-9 20.4 0 1.3.1 2.5.3 3.7-2 .8-4 1.8-5.8 2.9-4 2.5-7.1 5.8-9.1 9.6C-4.9 77.4-5 82.3 6.9 82.3h114.1c11.9 0 11.9-4.9 9.3-8.7-1.9-3.7-5-7.1-9.1-9.6zm-90.3 6.2c-1.8 0-3.2 1.5-3.2 3.3s1.4 3.3 3.2 3.3 3.2-1.5 3.2-3.3-1.4-3.3-3.2-3.3zm17.1-28c-4.5 0-8.2 3.7-8.2 8.3s3.7 8.3 8.2 8.3 8.2-3.7 8.2-8.3-3.7-8.3-8.2-8.3zm0 13c-2.5 0-4.6-2.1-4.6-4.7s2.1-4.7 4.6-4.7c2.5 0 4.6 2.1 4.6 4.7s-2.1 4.7-4.6 4.7zm55.5-13c-4.5 0-8.2 3.7-8.2 8.3s3.7 8.3 8.2 8.3 8.2-3.7 8.2-8.3-3.6-8.3-8.2-8.3zm0 13c-2.5 0-4.6-2.1-4.6-4.7s2.1-4.7 4.6-4.7c2.5 0 4.6 2.1 4.6 4.7s-2.1 4.7-4.6 4.7zm17.5 15c-1.8 0-3.2 1.5-3.2 3.3s1.4 3.3 3.2 3.3 3.2-1.5 3.2-3.3-1.5-3.3-3.2-3.3z"/>
          </svg>
        );
      case 'java':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z" />
            <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z" />
            <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s.753 1.651-3.308 3.391c-15.025 6.467-64.844 3.64-48.238-2.958 11.226-4.473 10.755-4.981 10.755-4.981zm40.098 18.259c23.455-12.346 12.591-24.966 5.032-23.355-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 24.64-.001-.001.468-.462.468-.462z" />
            <path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z" />
            <path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874.001 0 2.875 2.381 17.647 3.331z" />
          </svg>
        );
      case 'python':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
              <stop offset="0" stopColor="#5A9FD4"/>
              <stop offset="1" stopColor="#306998"/>
            </linearGradient>
            <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
              <stop offset="0" stopColor="#FFD43B"/>
              <stop offset="1" stopColor="#FFE873"/>
            </linearGradient>
            <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
            <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
          </svg>
        );
      case 'csharp':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#9B4F96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z" />
            <path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z" />
            <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z" />
            <path d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z" fill="#fff" />
          </svg>
        );
      case 'ruby':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <linearGradient id="ruby-a" gradientUnits="userSpaceOnUse" x1="57.08" y1="132.073" x2="57.08" y2="4.2">
              <stop offset="0" stopColor="#FB7655"/>
              <stop offset="0" stopColor="#FB7655"/>
              <stop offset=".41" stopColor="#E42B1E"/>
              <stop offset=".99" stopColor="#900"/>
              <stop offset="1" stopColor="#900"/>
            </linearGradient>
            <path fill="url(#ruby-a)" d="M 97.078 83.214 L 28.34 124.031 L 126.875 124.031 L 126.875 3.168 L 97.078 83.214 z"/>
            <linearGradient id="ruby-b" gradientUnits="userSpaceOnUse" x1="88.617" y1="127.937" x2="88.617" y2="24.954">
              <stop offset="0" stopColor="#871101"/>
              <stop offset=".99" stopColor="#911209"/>
              <stop offset="1" stopColor="#911209"/>
            </linearGradient>
            <path fill="url(#ruby-b)" d="M 126.875 124.031 L 50.406 90.879 L 97.078 83.214 L 126.875 124.031 z"/>
            <linearGradient id="ruby-c" gradientUnits="userSpaceOnUse" x1="59.023" y1="124.793" x2="59.023" y2="20.66">
              <stop offset="0" stopColor="#871101"/>
              <stop offset=".99" stopColor="#911209"/>
              <stop offset="1" stopColor="#911209"/>
            </linearGradient>
            <path fill="url(#ruby-c)" d="M 50.406 90.879 L 97.078 83.214 L 28.34 124.031 L 50.406 90.879 z"/>
            <path fill="#fff" d="M 28.34 124.031 L 28.34 124.031 L 50.406 90.879 L 50.406 90.879 L 28.34 124.031 z"/>
            <linearGradient id="ruby-d" gradientUnits="userSpaceOnUse" x1="41.536" y1="118.904" x2="41.536" y2="4.932">
              <stop offset="0" stopColor="#fff"/>
              <stop offset=".23" stopColor="#E57252"/>
              <stop offset=".46" stopColor="#DE3B20"/>
              <stop offset=".99" stopColor="#A60003"/>
              <stop offset="1" stopColor="#A60003"/>
            </linearGradient>
            <path fill="url(#ruby-d)" d="M 28.34 124.031 L 0.508 87.609 L 50.406 90.879 L 28.34 124.031 z"/>
          </svg>
        );
      case 'javascript':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
            <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/>
          </svg>
        );
      case 'typescript':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#007ACC" d="M2 63.91v62.5h125V1.41H2zm100.73-5.24v8.78h-26.86v71.28H60.51V67.45H33.65v-8.78z"/>
            <path fill="#fff" d="M60.51 67.45v71.28H75.87V67.45h26.86v-8.78H33.65v8.78z"/>
          </svg>
        );
      case 'swift':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#F05138" d="M126.33 34.06a39.32 39.32 0 00-9.92-14.77 38.33 38.33 0 00-14.56-9.59c-5.53-2.3-11.46-3.47-17.63-3.47h-40.5c-6.17 0-12.1 1.17-17.63 3.47a38.33 38.33 0 00-14.56 9.59A39.32 39.32 0 001.6 34.06 40.58 40.58 0 000 51.25v25.5c0 5.98 1.02 11.75 3.07 17.18a38.51 38.51 0 009.01 14.29 41.51 41.51 0 0014.26 9.91c5.5 2.45 11.42 3.68 17.6 3.68H84.5c6.18 0 12.11-1.23 17.6-3.68a41.51 41.51 0 0014.26-9.91 38.51 38.51 0 009.01-14.29A42.33 42.33 0 00128 76.75v-25.5c0-6.03-1.02-11.8-3.07-17.19z"/>
            <path fill="#FEFEFE" d="M85.33 94.64c-3.07 1.58-9.07 3.38-17.17 3.38-18.26 0-35.29-11.04-35.29-35.63 0-20.57 14.01-35.44 32.43-35.44 10.53 0 17.95 3.51 23.06 8.28a35.33 35.33 0 012.84 3.1c-.15-.25-2.9 4.76-13.85 17.03-2.7 3.03-6.21 5.15-10.16 6.19-4.03 1.06-8.23.96-12.17-.29-7.24-2.3-14.05-7.77-15.06-8.61l-.15-.12a25.35 25.35 0 0025.8 37.51c3.04-.51 6.03-1.5 8.77-2.94a25.34 25.34 0 0015.8-20.98c-.85 2.95-1.54 4.17-2.53 5.91-.67 1.17-1.44 2.28-2.32 3.29z"/>
          </svg>
        );
      case 'kotlin':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <linearGradient id="kotlin-a" gradientUnits="userSpaceOnUse" x1="500.003" y1="-639.996" x2="500.003" y2="-512.003" gradientTransform="matrix(.9999 0 0 -.9999 -436.001 -512.003)">
              <stop offset="0" stopColor="#e44857"/>
              <stop offset=".47" stopColor="#c711e1"/>
              <stop offset="1" stopColor="#7f52ff"/>
            </linearGradient>
            <path fill="url(#kotlin-a)" d="M0 0h64L0 64.001z"/>
            <linearGradient id="kotlin-b" gradientUnits="userSpaceOnUse" x1="436.001" y1="-640.001" x2="564.003" y2="-512.003" gradientTransform="matrix(1 0 0 -1 -436.001 -512.003)">
              <stop offset="0" stopColor="#e44857"/>
              <stop offset=".47" stopColor="#c711e1"/>
              <stop offset="1" stopColor="#7f52ff"/>
            </linearGradient>
            <path fill="url(#kotlin-b)" d="M128.001 128.001H64l64.001-64z"/>
            <linearGradient id="kotlin-c" gradientUnits="userSpaceOnUse" x1="436.004" y1="-512.001" x2="564.003" y2="-640.001" gradientTransform="matrix(1 0 0 -1 -436.001 -512.003)">
              <stop offset="0" stopColor="#e44857"/>
              <stop offset=".47" stopColor="#c711e1"/>
              <stop offset="1" stopColor="#7f52ff"/>
            </linearGradient>
            <path fill="url(#kotlin-c)" d="M0 128.001l128.001-.001L64.001 64z"/>
          </svg>
        );
      case 'dart':
        return (
          <svg className={iconClass} viewBox="0 0 128 128">
            <path fill="#01579B" d="M27.17 107.83L9.5 89.5C6.25 85.67 4.5 80.83 4.5 76v-24l22.67 55.83z"/>
            <path fill="#40C4FF" d="M4.5 52v24c0 4.83 1.75 9.67 5 13.5l75-75h-24c-4.83 0-9.58 1.75-13.42 5L4.5 52z"/>
            <path fill="#40C4FF" d="M72.83 123.5L52 102.67v-18l33 33c-4 3.33-8.83 5.33-13.83 5.83h1.66z"/>
            <path fill="#29B6F6" d="M27.17 107.83L4.5 52v24c0 4.83 1.75 9.67 5 13.5l17.67 18.33z"/>
            <path fill="#01579B" d="M123.5 56c0-4.83-1.75-9.67-5-13.42l-33-33c-3.75-3.25-8.59-5.08-13.42-5.08H52l71.5 71.5V56z"/>
            <path fill="#fff" fillOpacity=".2" d="M123.5 75.5L52 4.5h20c4.83 0 9.67 1.83 13.42 5.08l33 33c3.25 3.75 5.08 8.59 5.08 13.42v19.5z"/>
            <path fill="#263238" fillOpacity=".2" d="M72.83 123.5c5-0.5 9.83-2.5 13.83-5.83L52 84.67V123.5h20.83z"/>
            <path fill="#fff" fillOpacity=".2" d="M4.5 52l42.58-42.5c3.84-3.25 8.59-5 13.42-5h11.5l-67.5 67.5V52z"/>
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
      case 'System Programming':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'General Purpose':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Web & Scripting':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Mobile Development':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const PracticeCard = ({ card }: { card: PracticeCard }) => (
    <div className={`p-6 rounded-lg border transition-all duration-200 hover:shadow-lg flex flex-col justify-between h-full ${
      darkMode
        ? 'bg-gray-800 border-gray-700 hover:border-gray-600'
        : 'bg-white border-gray-200 hover:border-gray-300'
    }`}>

      {/* Top Content Area */}
      <div>
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
      </div>

      {/* Bottom Action Area */}
      <div className="mt-auto pt-4 space-y-3">
        {/* Level Badge */}
        <div className="flex justify-center">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            darkMode
              ? 'bg-green-900/30 text-green-300'
              : 'bg-green-100 text-green-800'
          }`}>
            {card.level} level
          </span>
        </div>

        {/* Start Learning Button */}
        <Link
          to={card.url}
          className="block w-full text-center py-2 rounded-md text-sm font-medium transition-colors duration-150 bg-[#6334B9] hover:bg-[#5529a3] text-white"
        >
          Start Learning
        </Link>
      </div>
    </div>
  );

  const categories = [
    'System Programming',
    'General Purpose',
    'Web & Scripting',
    'Mobile Development'
  ];

  const getCategoryCards = (category: string) => {
    return practiceCards.filter(card => card.category === category);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Programming Languages</h1>
            <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Master programming languages from basics to advanced concepts
            </p>
            <p className={`mt-1 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              Choose a language based on your goals — system programming, general purpose development, web development, or mobile apps.
            </p>
          </div>
        </div>

        {/* Category Sections */}
        {categories.map(category => (
          <div key={category} className="mb-12">
            <h2 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getCategoryCards(category).map((card) => (
                <PracticeCard key={card.url} card={card} />
              ))}
            </div>

            {/* Horizontal Rule to separate categories */}
            {category !== categories[categories.length - 1] && (
              <hr className={`mt-10 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticePage;
