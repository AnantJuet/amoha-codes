import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Interface for the component's props
interface TutorialPageComponentProps {
  darkMode: boolean;
}

interface NavLink {
  name: string;
  url: string;
}

// --- Data for the Tech Links Bar ---
const techNavLinks: NavLink[] = [
  { name: "HTML", url: "/Html" },
  { name: "CSS", url: "/CSS" },
  { name: "JAVASCRIPT", url: "/JSTutorial" },
  { name: "SQL", url: "/SqlTutorial" },
  { name: "PYTHON", url: "/pythonTutorial" },
  { name: "JAVA", url: "/JavaTutorial" },
  { name: "PHP", url: "/Php" },
  { name: "C", url: "/CTutorial" },
  { name: "C++", url: "/CppTutorial" },
  { name: "C#", url: "/Csharp" },
  { name: "TYPESCRIPT", url: "/TypescriptTutorial" },
  { name: "REACT", url: "/launchingsoon" },
  { name: "GO", url: "/Go" },
  { name: "KOTLIN", url: "/Kotlin" },
  { name: "SWIFT", url: "/Swift" },
  { name: "RUST", url: "/RustTutorial" },
  { name: "RUBY", url: "/RubyTutorial" },
  { name: "DART", url: "/DartTutorial" },
  { name: "MONGODB", url: "/MongoDBTutorial" },
  { name: "GRAPHQL", url: "/GraphQLTutorial" },
  { name: "DOCKER", url: "/DockerTutorial" },
  { name: "GIT", url: "/GitTutorial" },
  { name: "AWS", url: "/AWSTutorial" },
  { name: "KUBERNETES", url: "/KubernetesTutorial" },
  { name: "LINUX", url: "/LinuxTutorial" },
];

// Card interface
interface PracticeCard {
  title: string;
  description: string;
  problems: number;
  problemsText: string;
  level: "Beginner to Advanced";
  completed: boolean;
  icon: string;
  color: string;
  url: string;
}

const TutorialPageComponent: React.FC<TutorialPageComponentProps> = ({
  darkMode,
}) => {
  const [completedCourses] = useState<Set<string>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollRef.current && navRef.current && navRef.current.contains(e.target as Node)) {
        // If the user is scrolling horizontally (e.g., trackpad swipe), let the browser handle it natively.
        if (Math.abs(e.deltaX) > 0) {
          return;
        }

        // For vertical scrolls, we want to distinguish between a mouse wheel and a trackpad vertical swipe.
        // Mouse wheels usually have a deltaMode of 1 (lines) or large/fixed deltaY increments (100, 120).
        // Trackpads usually have a deltaMode of 0 (pixels) and smaller, smoother increments.
        const isMouseWheel = e.deltaMode !== 0 || Math.abs(e.deltaY) >= 100 || (e.deltaY % 40 === 0 && e.deltaY !== 0);

        if (isMouseWheel) {
          // If it's a mouse wheel, convert vertical scroll to horizontal scroll for the bar.
          e.preventDefault();
          scrollRef.current.scrollLeft += e.deltaY;
        }
        // If it's a trackpad vertical swipe (isMouseWheel = false), we do NOT preventDefault.
        // This allows the vertical swipe to scroll the entire page, as requested.
      }
    };

    const navElement = navRef.current;
    if (navElement) {
      navElement.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (navElement) {
        navElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  const categoryCards: PracticeCard[] = [
    {
      title: "SDE Preparation",
      description:
        "Comprehensive preparation for Software Development Engineer interviews including coding, system design, and behavioral rounds",
      problems: 324,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "sde",
      color: "from-rose-400 to-rose-800",
      url: "/tutorial/sde-preparation",
    },
    {
      title: "Computer Science Core Subjects",
      description:
        "Fundamental computer science concepts that form the backbone of software engineering",
      problems: 287,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "cs",
      color: "from-emerald-300 to-emerald-950",
      url: "/tutorial/ComputerScienceCoreSubjects",
    },
    {
      title: "Programming Languages",
      description:
        "Comprehensive coverage of various programming languages and their ecosystems",
      problems: 412,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "languages",
      color: "from-sky-300 to-blue-900",
      url: "/tutorial/Programminglanguage",
    },
    {
      title: "Web Development Languages",
      description: "Technologies and frameworks for modern web development",
      problems: 389,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "web",
      color: "from-indigo-400 to-indigo-950",
      url: "/tutorial/WebDevLanguage",
    },
    {
      title: "Mobile Development Languages",
      description:
        "Mobile application development for iOS and Android platforms",
      problems: 167,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "mobile",
      color: "from-emerald-700 to-emerald-200",
      url: "/tutorial/MobileDevLanguage",
    },
    {
      title: "Systems & Low-Level Programming",
      description:
        "Low-level programming, system programming, and performance optimization",
      problems: 134,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "lowlevel",
      color: "from-indigo-400 to-indigo-900",
      url: "/tutorial/SystemProgrammingPage",
    },
    {
      title: "Data Science, AI & Research Languages",
      description:
        "Languages and tools for scientific computing, AI research, and data analysis",
      problems: 178,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "ai",
      color: "from-cyan-700 to-cyan-400",
      url: "/tutorial/DatabaseLanguagePage",
    },
    {
      title: "Game Development Languages",
      description:
        "Game development engines, graphics programming, and game design",
      problems: 123,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "game",
      color: "from-slate-400 to-slate-700",
      url: "/tutorial/GameDevelopmentpage",
    },
    {
      title: "Scripting & Automation Languages",
      description:
        "Scripting languages for automation, DevOps, and system administration",
      problems: 156,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "scripting",
      color: "from-amber-700 to-amber-300",
      url: "/tutorial/ScriptingLanguagePage",
    },
    {
      title: "Trending Technologies",
      description:
        "Latest tools, frameworks, and technologies transforming development",
      problems: 156,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "trending",
      color: "from-teal-800 to-teal-400",
      url: "/tutorial/TrendingTechnologies",
    },
  ];

  const getIcon = (iconName: string) => {
    const base = "w-8 h-8 rounded-lg flex items-center justify-center";

    const darkBg =
      {
        sde: "bg-blue-600",
        cs: "bg-green-600",
        languages: "bg-red-600",
        web: "bg-cyan-600",
        mobile: "bg-pink-600",
        lowlevel: "bg-gray-600",
        ai: "bg-yellow-600",
        game: "bg-green-600",
        scripting: "bg-blue-600",
      }[iconName] || "bg-gray-700";

    const lightBg = darkBg.replace("600", "100");

    return (
      <div className={`${base} ${darkMode ? darkBg : lightBg}`}>
        <span className="text-sm">💻</span>
      </div>
    );
  };

  const PracticeCard = ({ card }: { card: PracticeCard }) => {
    const isCompleted = completedCourses.has(card.title);

    return (
      <Link
        to={card.url}
        className={`block p-3 sm:p-6 rounded-lg border transition-all duration-200 hover:shadow-lg bg-gradient-to-br ${card.color} min-h-[18rem] sm:min-h-[20rem] h-auto flex flex-col justify-between ${darkMode
          ? "bg-gray-800 border-gray-700 hover:border-gray-600"
          : "bg-white border-gray-200 hover:border-gray-300"
          } ${isCompleted ? "ring-2 ring-green-500" : ""}`}
      >
        <div>
          <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
            {getIcon(card.icon)}
            <h3
              className={`text-sm sm:text-lg font-semibold break-words ${darkMode ? "text-white" : "text-gray-900"
                }`}
            >
              {card.title}
            </h3>
          </div>

          <p
            className={`text-[10px] sm:text-sm mb-3 sm:mb-4 ${darkMode ? "text-gray-300" : "text-gray-200"
              }`}
          >
            {card.description}
          </p>
        </div>

        <div className="space-y-2 sm:space-y-3 mt-auto">
          <div className="flex justify-center">
            <div
              className={`px-2 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-xs font-medium ${darkMode
                ? "bg-green-900/30 text-green-300"
                : "bg-green-100 text-green-800"
                }`}
            >
              {card.level} level
            </div>
          </div>

          <div
            className="block w-full text-center py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-150 bg-[#6334B9] hover:bg-[#5529a3] text-white"
          >
            {isCompleted ? "Continue Learning" : "Start Learning"}
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-8 -mt-25">

        {/* ✅ FIXED SCROLLABLE NAVBAR */}
        <div className="relative w-screen left-[calc(-50vw+50%)] bg-[#282A35] mb-6 sm:mb-8">
          <div className="max-w-[1920px] mx-auto">
            <nav
              ref={navRef}
              className="flex items-center relative px-1 sm:px-4"
            >

              {/* LEFT Scroll Button */}
              <button
                onClick={scrollLeft}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10 shrink-0"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Horizontal Scroll Menu */}
              <div
                ref={scrollRef}
                className="flex overflow-x-auto whitespace-nowrap scrollbar-hide py-2 sm:py-3 px-1 sm:px-0 gap-1 sm:gap-2 flex-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {techNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.url}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 flex-shrink-0 border border-transparent ${darkMode
                      ? "text-gray-300 hover:text-white hover:bg-gray-700 hover:border-gray-600"
                      : "text-gray-300 hover:text-white hover:bg-gray-700 hover:border-gray-600"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* RIGHT Scroll Button */}
              <button
                onClick={scrollRight}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10 shrink-0"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </nav>
          </div>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-6 sm:mb-8 mt-6 sm:mt-10">
          <div>
            <h1 className="text-xl sm:text-3xl font-bold">🚀 All Categories</h1>
            <p className={`text-xs sm:text-base ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Explore all programming and development categories to enhance your
              skills
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryCards.map((card, i) => (
            <PracticeCard key={i} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorialPageComponent;
