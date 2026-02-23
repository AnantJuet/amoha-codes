import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

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
  { name: "GO", url: "/Go" },
  { name: "KOTLIN", url: "/Kotlin" },
  { name: "SWIFT", url: "/Swift" },
  { name: "RUST", url: "/RustTutorial" },
  { name: "RUBY", url: "/RubyTutorial" },
  { name: "DART", url: "/DartTutorial" },
  { name: "MONGODB", url: "/MongoDBTutorial" },
  { name: "DOCKER", url: "/DockerTutorial" },
  { name: "GIT", url: "/GitTutorial" },
  { name: "AWS", url: "/AWSTutorial" },
  { name: "KUBERNETES", url: "/KubernetesTutorial" },
  { name: "LINUX", url: "/LinuxTutorial" },
  { name: "GRAPHQL", url: "/GraphQLTutorial" },
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

const ExploreAllComponent: React.FC<TutorialPageComponentProps> = ({
  darkMode,
}) => {
  const [completedCourses] = useState<Set<string>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const categoryCards: PracticeCard[] = [
    // 1.
    {
      title: "Full Stack Development",
      description:
        "Comprehensive preparation for Software Development Engineer interviews including coding, system design, and behavioral rounds",
      problems: 324,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "sde",
      color: "from-rose-400 to-rose-800",
      url: "/FullStackCourse",
    },
    // 2.
    {
      title: "AI & ML Mastery",
      description:
        "Fundamental computer science concepts that form the backbone of software engineering",
      problems: 287,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "cs",
      color: "from-emerald-300 to-emerald-950",
      url: "/AIMLCourse",
    },
    // 3.
    {
      title: "CSS Course",
      description:
        "Comprehensive coverage of various programming languages and their ecosystems",
      problems: 412,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "languages",
      color: "from-sky-300 to-blue-900",
      url: "/CSSCourse",
    },
    // 4.
    {
      title: "Data Engineering",
      description: "Technologies and frameworks for modern web development",
      problems: 389,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "web",
      color: "from-indigo-400 to-indigo-950",
      url: "/DataEngineeringCourse",
    },
    // 5.
    {
      title: "DSA Algo",
      description:
        "Mobile application development for iOS and Android platforms",
      problems: 167,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "mobile",
      color: "from-emerald-700 to-emerald-200",
      url: "/DSACourse",
    },
    // 6.
    {
      title: "A to Z DSA",
      description:
        "Low-level programming, system programming, and performance optimization",
      problems: 134,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "lowlevel",
      color: "from-indigo-400 to-indigo-900",
      url: "/DSACourse",
    },
    // 7.
    {
      title: "Nextjs Frontend",
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
    // 8.
    {
      title: "React Frontend",
      description:
        "Game development engines, graphics programming, and game design",
      problems: 123,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "game",
      color: "from-slate-400 to-slate-700",
      url: "/ReactCourse",
    },
    // 9.
    {
      title: "HTML Course",
      description:
        "Scripting languages for automation, DevOps, and system administration",
      problems: 156,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "scripting",
      color: "from-amber-700 to-amber-300",
      url: "/HTMLCourse",
    },
    // 10.
    {
      title: "Java Course",
      description:
        "Latest tools, frameworks, and technologies transforming development",
      problems: 156,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "trending",
       color: "from-rose-400 to-rose-800",
      url: "/JavaCourse",
    },
     // 11.
    {
      title: "JavaScript Course",
      description:
        "Latest tools, frameworks, and technologies transforming development",
      problems: 156,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "trending",
     color: "from-emerald-300 to-emerald-950",
      url: "/JavascriptCourse",
    },
     // 12.
    {
      title: "Mern Stack Course",
      description:
        "Latest tools, frameworks, and technologies transforming development",
      problems: 156,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "trending",
      color: "from-sky-300 to-blue-900",
      url: "/MernstackCourse",
    },
     // 13.
    {
      title: "Python Course",
      description:
        "Latest tools, frameworks, and technologies transforming development",
      problems: 156,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "trending",
       color: "from-indigo-400 to-indigo-950",
      url: "/pythonCourse",
    },
     // 14.
    {
      title: "TypeScript Course",
      description:
        "Latest tools, frameworks, and technologies transforming development",
      problems: 156,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "trending",
      color: "from-emerald-700 to-emerald-200",
      url: "/typescriptCourse",
    },
     // 15.
    {
      title: "C++ Course",
      description:
        "Latest tools, frameworks, and technologies transforming development",
      problems: 156,
      problemsText: "Problems",
      level: "Beginner to Advanced",
      completed: false,
      icon: "trending",
      color: "from-indigo-400 to-indigo-900",
      url: "/courseMain",
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
      <div
        className={`p-6 rounded-lg border transition-all duration-200 hover:shadow-lg cursor-pointer bg-gradient-to-br ${card.color} h-80 flex flex-col justify-between ${
          darkMode
            ? "bg-gray-800 border-gray-700 hover:border-gray-600"
            : "bg-white border-gray-200 hover:border-gray-300"
        } ${isCompleted ? "ring-2 ring-green-500" : ""}`}
      >
        <div>
          <div className="flex items-center space-x-3 mb-3">
            {getIcon(card.icon)}
            <h3
              className={`text-lg font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {card.title}
            </h3>
          </div>

          <p
            className={`text-sm mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-200"
            }`}
          >
            {card.description}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-center">
            <div
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                darkMode
                  ? "bg-green-900/30 text-green-300"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {card.level} level
            </div>
          </div>

          <Link
            to={card.url}
            className="block w-full text-center px-6 py-3 rounded-lg bg-[#6334B9] text-white hover:bg-[#5028a0] transition duration-300 text-sm font-medium"
          >
            {isCompleted ? "Continue Learning" : "Start Learning"}
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-25">

        {/* ✅ NEW W3SCHOOL NAVBAR WITH SCROLL BUTTONS */}
        <div className="bg-gray-700 font-sans -mt-10 -ml-115 -mr-115">
          <nav className="bg-[#282A35] text-white shadow-md sticky top-0 w-full z-50">
            <div className="bg-[#212529] hidden sm:flex items-center border-t border-gray-700 relative">

              {/* LEFT Scroll Button */}
              <button
                onClick={scrollLeft}
                className="text-gray-300 hover:text-white px-3 py-2"
              >
                &lt;
              </button>

              {/* Horizontal Scroll Menu */}
              <div
                ref={scrollRef}
                className="flex overflow-x-auto whitespace-nowrap scrollbar-hide py-2 flex-1"
              >
                {techNavLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 flex-shrink-0 ${
                      index === 0
                        ? "bg-gray-700 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* RIGHT Scroll Button */}
              <button
                onClick={scrollRight}
                className="text-gray-300 hover:text-white px-3 py-2"
              >
                &gt;
              </button>
            </div>
          </nav>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-8 mt-40">
          <div>
            <h1 className="text-3xl font-bold">🚀 Explore All Courses</h1>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Explore all programming and development courses to enhance your
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

export default ExploreAllComponent;
