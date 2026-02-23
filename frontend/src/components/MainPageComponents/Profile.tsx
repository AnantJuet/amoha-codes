import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, MapPin, GraduationCap, Share2, Edit, Upload, Copy, X, Check } from "lucide-react";
import { API } from "../../api";

interface User {
  id?: number;
  avatar?: string;
  first_name?: string;
  last_name?: string;
  username?: string;
  email?: string;
  education?: string;
  location?: string;
}

interface SheetData {
  total: string;
  percent: number;
  easy?: string;
  medium?: string;
  hard?: string;
}

interface ProgressSection {
  title: string;
  done: string;
}

interface ProfilePageProps {
  darkMode?: boolean;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ darkMode = false }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<string>("ProductBasedDSA");
  const [profileImage, setProfileImage] = useState<string>("https://via.placeholder.com/100");
  const [loading, setLoading] = useState(true);

  const [leetcodeUsername, setLeetcodeUsername] = useState<string>("");
  const [gfgUsername, setGfgUsername] = useState<string>("");
  const [codeforcesUsername, setCodeforcesUsername] = useState<string>("");

  // Share profile states
  const [showShareModal, setShowShareModal] = useState<boolean>(false);
  const [copySuccess, setCopySuccess] = useState<boolean>(false);
  const shareModalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareModalRef.current && !shareModalRef.current.contains(event.target as Node)) {
        setShowShareModal(false);
      }
    };

    if (showShareModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showShareModal]);

  const [overallProgressData, setOverallProgressData] = useState<ProgressSection[]>([
    { title: "ProductBasedDSA", done: "0/425" },
    { title: "Blind75", done: "0/75" },
    { title: "ServiceBasedDSA Sheet", done: "0/240" },
    { title: "ServiceBasedPatternDSA Sheet", done: "0/80" },
    { title: "All in one DSA Sheet", done: "0/747" },
    { title: "Algorithm", done: "0/166" },
    { title: "ProgrammingLang", done: "0/24" },
    { title: "BasicStandardProblemSolving", done: "0/115" },
    { title: "CompetitiveProgramming", done: "0/372" },
  ]);

  // Dynamic sheet data from API
  const [sheetDataFromAPI, setSheetDataFromAPI] = useState<Record<string, SheetData>>({});

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("user");
      const token = localStorage.getItem("access_token");

      if (!token || !storedUser) {
        navigate("/");
        return;
      }

      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        if (userData.avatar) {
          setProfileImage(userData.avatar);
        }
        fetchProgress();
      } catch {
        navigate("/");
      }
      setLoading(false);
    };

    loadUser();

    // Refresh progress when page becomes visible (user returns to tab)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchProgress();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [navigate]);

  const fetchProgress = async () => {
    try {
      const response = await API.get("/profile/progress");
      if (response.data && response.data.sections) {
        setOverallProgressData(response.data.sections);

        // Build sheet data for lower dashboard
        const newSheetData: Record<string, SheetData> = {};
        for (const section of response.data.sections) {
          newSheetData[section.title] = {
            total: `${section.solved}/${section.total}`,
            percent: section.percent || 0,
            easy: section.easy,
            medium: section.medium,
            hard: section.hard,
          };
        }
        setSheetDataFromAPI(newSheetData);
      }
    } catch (err) {
      // Use default progress data if API fails
      console.log("Using default progress data");
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // Generate shareable profile URL
  const getProfileUrl = () => {
    const username = user?.username || user?.email?.split("@")[0] || "user";
    return `${window.location.origin}/profile/${username}`;
  };

  // Copy profile link to clipboard
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getProfileUrl());
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Share via different platforms
  const handleShare = (platform: string) => {
    const profileUrl = encodeURIComponent(getProfileUrl());
    const displayName = user?.first_name && user?.last_name
      ? `${user.first_name} ${user.last_name}`
      : user?.first_name || "My";
    const shareText = encodeURIComponent(`Check out ${displayName}'s coding profile on Amoha Codes!`);

    let shareUrl = "";

    switch (platform) {
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${shareText}%20${profileUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${profileUrl}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${profileUrl}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=${encodeURIComponent(`${displayName}'s Coding Profile`)}&body=${shareText}%20${profileUrl}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${profileUrl}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
    setShowShareModal(false);
  };

  // Use API data if available, otherwise use defaults
  const sheetData: Record<string, SheetData> = Object.keys(sheetDataFromAPI).length > 0
    ? sheetDataFromAPI
    : {
        "ProductBasedDSA": { total: "0/425", percent: 0, easy: "0/93", medium: "0/162", hard: "0/170" },
        "Blind75": { total: "0/75", percent: 0, easy: "0/20", medium: "0/48", hard: "0/7" },
        "Algorithm": { total: "0/166", percent: 0, easy: "0/50", medium: "0/80", hard: "0/36" },
        "ServiceBasedDSA Sheet": { total: "0/240", percent: 0, easy: "0/100", medium: "0/120", hard: "0/20" },
        "ServiceBasedPatternDSA Sheet": { total: "0/80", percent: 0, easy: "0/30", medium: "0/35", hard: "0/15" },
        "All in one DSA Sheet": { total: "0/747", percent: 0, easy: "0/200", medium: "0/350", hard: "0/197" },
        "ProgrammingLang": { total: "0/24", percent: 0, easy: "0/24" },
        "BasicStandardProblemSolving": { total: "0/115", percent: 0, easy: "0/75", medium: "0/35", hard: "0/5" },
        "CompetitiveProgramming": { total: "0/372", percent: 0, easy: "0/93", medium: "0/155", hard: "0/124" },
      };

  const topicsCovered = [
    { topic: "Arrays", count: 27 }, { topic: "Binary Search", count: 7 },
    { topic: "Hashing", count: 6 }, { topic: "Sorting", count: 6 },
    { topic: "String", count: 4 }, { topic: "Two Pointer", count: 4 },
    { topic: "Binary Search Tree", count: 0 }, { topic: "Binary Tree", count: 0 },
    { topic: "Bit Manipulation", count: 0 }, { topic: "Dynamic Programming", count: 0 },
    { topic: "Graph", count: 0 }, { topic: "Greedy", count: 0 },
    { topic: "Heap", count: 0 }, { topic: "Linked List", count: 0 },
    { topic: "Maths", count: 0 }, { topic: "Python", count: 0 },
    { topic: "Queue", count: 0 }, { topic: "Recursion", count: 0 },
    { topic: "Sliding Window", count: 0 }, { topic: "Stack", count: 0 }
  ];

  // Display names for tabs (user-friendly names)
  const sheetDisplayNames: Record<string, string> = {
    "ProductBasedDSA": "DSA Sheet",
    "Blind75": "Blind 75",
    "Algorithm": "Algorithm",
    "ServiceBasedDSA Sheet": "Service DSA",
    "ServiceBasedPatternDSA Sheet": "Pattern DSA",
    "All in one DSA Sheet": "All-in-One DSA",
    "ProgrammingLang": "Programming Lang",
    "BasicStandardProblemSolving": "Basic Problems",
    "CompetitiveProgramming": "CP Sheet",
  };

  const currentSheet = sheetData[activeTab];

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
        <div className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const displayName = user.first_name && user.last_name
    ? `${user.first_name} ${user.last_name}`
    : user.first_name || user.email || "User";

  const displayUsername = user.username || user.email?.split("@")[0] || "user";

  return (
    <div className={`min-h-screen p-20 ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="flex gap-6">
        {/* Left Sidebar */}
        <div className={`w-1/4 p-6 rounded-xl shadow ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          {/* Profile Image & Upload */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-24 h-24 group">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full rounded-full border-4 border-purple-700 mb-3 object-cover"
              />
              <label
                htmlFor="profile-upload"
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Upload size={24} className="text-white" />
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            <h2 className={`text-lg font-semibold mt-3 ${darkMode ? "text-white" : "text-gray-900"}`}>{displayName}</h2>
            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>@{displayUsername}</p>
            <button className={`mt-2 p-1 rounded-md ${darkMode ? "hover:bg-gray-700 text-gray-300" : "hover:bg-gray-200"}`}>
              <Edit size={16} />
            </button>
          </div>

          {/* Personal Info */}
          <div className={`space-y-3 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-purple-700" />
              <span>{user.email || "user@example.com"}</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap size={16} className="text-purple-700" />
              <span>{user.education || "-"}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-purple-700" />
              <span>{user.location || "-"}</span>
            </div>
          </div>

          {/* Share */}
          <div className="mt-6 relative">
            <button
              onClick={() => setShowShareModal(!showShareModal)}
              className="flex items-center gap-2 text-orange-500 cursor-pointer hover:underline"
            >
              <Share2 size={16} />
              <span>Share your Profile</span>
            </button>

            {/* Share Modal */}
            {showShareModal && (
              <div
                ref={shareModalRef}
                className={`absolute left-0 top-10 z-50 w-72 rounded-xl shadow-lg border p-4 ${
                  darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-200"
                }`}
              >
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-4">
                  <h4 className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                    Share Profile
                  </h4>
                  <button
                    onClick={() => setShowShareModal(false)}
                    className={`p-1 rounded-full hover:bg-opacity-20 ${
                      darkMode ? "hover:bg-gray-500 text-gray-400" : "hover:bg-gray-200 text-gray-500"
                    }`}
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Copy Link Section */}
                <div className="mb-4">
                  <label className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    Profile Link
                  </label>
                  <div className="flex gap-2 mt-1">
                    <input
                      type="text"
                      readOnly
                      value={getProfileUrl()}
                      className={`flex-1 px-3 py-2 text-sm rounded-lg border truncate ${
                        darkMode
                          ? "bg-gray-600 border-gray-500 text-gray-200"
                          : "bg-gray-100 border-gray-300 text-gray-700"
                      }`}
                    />
                    <button
                      onClick={handleCopyLink}
                      className={`px-3 py-2 rounded-lg flex items-center gap-1 transition-colors ${
                        copySuccess
                          ? "bg-green-500 text-white"
                          : "bg-purple-600 text-white hover:bg-purple-700"
                      }`}
                    >
                      {copySuccess ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                  {copySuccess && (
                    <p className="text-green-500 text-xs mt-1">Link copied to clipboard!</p>
                  )}
                </div>

                {/* Social Share Buttons */}
                <div>
                  <label className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    Share via
                  </label>
                  <div className="grid grid-cols-5 gap-2 mt-2">
                    {/* WhatsApp */}
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="p-3 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-colors flex items-center justify-center"
                      title="Share on WhatsApp"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </button>

                    {/* Twitter/X */}
                    <button
                      onClick={() => handleShare("twitter")}
                      className="p-3 rounded-lg bg-black hover:bg-gray-800 text-white transition-colors flex items-center justify-center"
                      title="Share on X (Twitter)"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>

                    {/* LinkedIn */}
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center justify-center"
                      title="Share on LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>

                    {/* Facebook */}
                    <button
                      onClick={() => handleShare("facebook")}
                      className="p-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors flex items-center justify-center"
                      title="Share on Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>

                    {/* Email */}
                    <button
                      onClick={() => handleShare("email")}
                      className="p-3 rounded-lg bg-gray-500 hover:bg-gray-600 text-white transition-colors flex items-center justify-center"
                      title="Share via Email"
                    >
                      <Mail size={20} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 space-y-6">
          {/* Coding Profiles */}
          <div className={`p-6 rounded-xl shadow ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Coding Profiles</h3>
            <div className="grid grid-cols-3 gap-6">
              {/** Reusable input card */}
              {[
                { title: "LeetCode", value: leetcodeUsername, setter: setLeetcodeUsername },
                { title: "GFG", value: gfgUsername, setter: setGfgUsername },
                { title: "Codeforces", value: codeforcesUsername, setter: setCodeforcesUsername },
              ].map((item, idx) => (
                <div key={idx} className={`p-6 rounded-xl shadow ${darkMode ? "bg-gray-700" : "bg-white"}`}>
                  <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>{item.title} Username</h3>
                  <div className="mt-1 flex gap-3 items-center">
                    <input
                      type="text"
                      placeholder={`Enter your ${item.title} username`}
                      value={item.value}
                      onChange={(e) => item.setter(e.target.value)}
                      className={`flex-1 p-2 rounded-md outline-none focus:ring-2 focus:ring-purple-700 ${darkMode ? "bg-gray-600 text-white placeholder-gray-400" : "bg-gray-100 text-gray-900"}`}
                    />
                    <button className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-400 cursor-pointer">
                      Save
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Overall Progress */}
          <div className={`p-6 rounded-xl shadow ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Overall Progress</h3>
            <div className="space-y-3">
              {overallProgressData.map((item, idx) => {
                const [done, total] = item.done.split("/").map(Number);
                const percent = total > 0 ? Math.floor((done / total) * 100) : 0;
                const displayName = sheetDisplayNames[item.title] || item.title;
                return (
                  <div key={idx}>
                    <div className={`flex justify-between text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                      <span>{displayName}</span>
                      <span>{percent}% {item.done}</span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                      <div
                        className="bg-purple-700 h-2 rounded-full"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Section */}
          <div className={`p-6 rounded-xl shadow ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <div className={`flex flex-wrap border-b mb-6 ${darkMode ? "border-gray-700" : "border-gray-300"}`}>
              {Object.keys(sheetData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-2 text-sm ${
                    activeTab === tab
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : darkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-black"
                  }`}
                >
                  {sheetDisplayNames[tab] || tab}
                </button>
              ))}
            </div>

            {currentSheet && (
              <div>
                <div className="grid grid-cols-4 gap-6 text-center">
                  {/* Total Progress Card */}
                  <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                    <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Total Progress</div>
                    <div className={`text-xl font-semibold mt-1 ${darkMode ? "text-white" : "text-gray-900"}`}>{currentSheet.total}</div>
                    <div className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-400"}`}>{currentSheet.percent}%</div>
                  </div>

                  {/* Easy */}
                  {currentSheet.easy && (
                    <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                      <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Easy</div>
                      <div className={`text-lg font-semibold mt-1 ${darkMode ? "text-white" : "text-gray-900"}`}>{currentSheet.easy} completed</div>
                    </div>
                  )}

                  {/* Medium */}
                  {currentSheet.medium && (
                    <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                      <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Medium</div>
                      <div className={`text-lg font-semibold mt-1 ${darkMode ? "text-white" : "text-gray-900"}`}>{currentSheet.medium} completed</div>
                    </div>
                  )}

                  {/* Hard */}
                  {currentSheet.hard && (
                    <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                      <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Hard</div>
                      <div className={`text-lg font-semibold mt-1 ${darkMode ? "text-white" : "text-gray-900"}`}>{currentSheet.hard} completed</div>
                    </div>
                  )}
                </div>

                {/* Topics Covered */}
                <div className="mt-6">
                  <h4 className={`text-lg font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>Topics covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {topicsCovered.map((item, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-sm ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"}`}
                      >
                        {item.topic} × {item.count}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
