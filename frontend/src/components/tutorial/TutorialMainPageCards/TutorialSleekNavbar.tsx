const Sidebar = () => {
  const topics = [
    '🚀 SDE Preparation',
    'Computer Science Core Subjects',
    'Systems & Networking',
    'Data & Databases',
    'Data Science',
    'Programming & Development',
    'Programming Languages',
    '🌐 Web Development Languages',
    '📱 Mobile Development Languages',
    '⚙️ Systems & Low-Level Programming',
    '🔬 Data Science, AI & Research Languages',
    '🎮 Game Development Languages',
    '🧩 Scripting & Automation Languages'
  ]

  return (
    <div className="h-full w-64 bg-white border-r border-gray-200 fixed top-16 left-0 overflow-y-auto no-scrollbar p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Topics</h2>
      <ul className="space-y-2">
        {topics.map((topic, index) => (
          <li key={index}>
            <button
              className="w-full text-left px-4 py-2 rounded-md text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              {topic}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
