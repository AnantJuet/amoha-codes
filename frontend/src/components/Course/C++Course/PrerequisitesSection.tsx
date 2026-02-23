import React from 'react';
import { Book, Clock } from 'lucide-react';

// 1. Interface for Card Props
interface PrerequisiteCardProps {
    icon: React.ReactNode;
    title: string;
    content: React.ReactNode;
    darkMode: boolean; // Added darkMode prop
}

// 2. Individual Card Component
const PrerequisiteCard: React.FC<PrerequisiteCardProps> = ({ icon, title, content, darkMode }) => {
    return (
        // Card styling adjusted for dark mode
        <div className={`flex-1 min-w-[320px] p-8 rounded-2xl shadow-md transition duration-300 ${
            darkMode ? 'bg-gray-800 border border-gray-700 hover:shadow-xl' : 'bg-white border border-gray-100 hover:shadow-lg'
        }`}>
            <div className="flex items-center space-x-4 mb-5">

                <div className="text-3xl text-[#6334B9]">
                    {icon}
                </div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {title}
                </h3>
            </div>
            <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {content}
            </p>
        </div>
    );
};

// Interface for the main tab component
interface PrerequisitesTabProps {
    darkMode: boolean; // Added darkMode prop
}

export const PrerequisitesTab: React.FC<PrerequisitesTabProps> = ({ darkMode }) => {
    return (
        <div className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="lg:grid lg:grid-cols-3 lg:gap-10">

                <div className="lg:col-span-2">

                    <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        Pre-requisites
                    </h2>

                    <div className="flex flex-wrap gap-6">

                        <PrerequisiteCard
                            icon={<Book size={28} />}
                            title="High School Maths"
                            darkMode={darkMode} // Pass prop
                            content={
                                <>
                                    Basic understanding of high-school mathematics and logic.
                                </>
                            }
                            />

                        {/* Card 2: Time Commitment */}
                        <PrerequisiteCard
                            icon={<Clock size={28} />}
                            title="Time Commitment of 2 Hours/Day"
                            darkMode={darkMode} // Pass prop
                            content={
                                <>
                                   No prior coding experience required.
                                </>
                            }
                        />
                    </div>

                </div>

                <div className="lg:col-span-1 hidden lg:block">

                </div>

            </div>
        </div>
    );
};

// Renamed from PrerequisitesTab to PrerequisitesSection for file export clarity in CourseMainPage.tsx
export default PrerequisitesTab;