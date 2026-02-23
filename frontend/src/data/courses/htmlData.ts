import type { CourseData } from '../../components/courses/shared/types';

export const htmlData: CourseData = {
  tabs: ['Features', 'Syllabus', 'Pre-requisites', 'FAQs'],
  hero: {
    title: 'HTML Programming',
    description: `Master the foundation of web development with HTML — the backbone of every website on the internet.
This beginner-friendly course teaches you to structure web pages, embed media, create forms, and write semantic, accessible code.
🌐 Build real web pages from scratch
📝 Learn proper HTML5 semantics
🚀 Prepare for CSS, JavaScript, and beyond`,
    trustedText: 'Trusted by 2800+ Students Previously',
  },
  about: {
    title: 'HTML Programming',
    image: '/html.png',
    price: 799,
    originalPrice: 999,
    discount: '20% Discount',
    features: [
      '<span class="font-bold mr-1 text-[#6334B9]">40+ hrs</span> of recorded content',
      '<span class="font-bold mr-1 text-[#6334B9]">1 year</span> Access to all course material',
      '<span class="font-bold mr-1 text-[#6334B9]">3 months</span> of Doubt Support',
      '<span class="font-bold mr-1 text-[#6334B9]">Lifetime access</span> to Practice Projects',
    ],
  },
  features: [
    { iconName: 'Video', title: '40+ Hours of Recorded Lectures', description: 'Learn HTML the right way — from the structure of a tag to complete responsive pages.' },
    { iconName: 'Code', title: '100+ Curated Practice Projects & Exercises', description: 'Every topic comes with small website-building tasks to make learning hands-on and fun.' },
    { iconName: 'Lightbulb', title: 'Hints and Video Solutions', description: 'Get help whenever you\'re stuck. Build confidence with guided practice.' },
    { iconName: 'Chat', title: 'Instant Doubt Support', description: 'Expert mentors available to solve your queries instantly.' },
    { iconName: 'Medal', title: 'Gamified Progress Tracking & Leaderboard', description: 'Stay motivated while climbing the ranks as an aspiring web developer.' },
    { iconName: 'Contest', title: 'Mini Internal Web Projects & Challenges', description: 'Apply your learning through real projects like portfolio pages, forms, and landing pages.' },
    { iconName: 'Discussion', title: 'Post-Project Feedback & Discussion', description: 'Learn from expert reviews and enhance your web development standards.' },
  ],
  syllabus: [
    { title: 'Module 1: Getting Started with HTML', subtopics: ['What is HTML and How the Web Works', 'Understanding Browsers, Editors, and Inspect Tools', 'Writing Your First HTML Page', 'Structure of an HTML Document'] },
    { title: 'Module 2: HTML Fundamentals', subtopics: ['Tags, Elements, and Attributes', 'Headings, Paragraphs, and Text Formatting', 'Links, Lists, and Tables', 'Comments and Code Readability'] },
    { title: 'Module 3: Working with Media', subtopics: ['Images and Image Optimization', 'Audio and Video Embedding', 'Using the <iframe> Tag for External Media'] },
    { title: 'Module 4: Forms and User Input', subtopics: ['Input Types, Labels, and Placeholders', 'Creating Login & Registration Forms', 'Form Validation Basics'] },
    { title: 'Module 5: Semantic HTML', subtopics: ['Header, Footer, Article, and Section Tags', 'Accessibility and SEO Basics', 'Clean and Semantic Web Design'] },
    { title: 'Module 6: HTML5 Advanced Features', subtopics: ['<canvas> and <svg> Elements', 'Audio & Video APIs', 'Geolocation and Web Storage Overview'] },
    { title: 'Module 7: Project Module', subtopics: ['Build Your First Personal Portfolio Page', 'Create a Contact Form with Validation', 'Mini Web Page Projects for Practice'] },
  ],
  faqs: [
    { name: 'Course Content', questions: [{ q: 'What is the course structure?', a: 'The course is structured into self-contained modules, each covering a major topic.', isOpenInImage: false }] },
    { name: 'Doubt Support', questions: [{ q: 'How is the instant doubt support provided?', a: 'Doubt support is provided through a dedicated Telegram group.', isOpenInImage: false }] },
    { name: 'Validity', questions: [{ q: 'What is the validity period?', a: 'You get lifetime access to all course materials.', isOpenInImage: false }] },
  ],
  prerequisites: [
    { icon: 'book', title: 'No Prior Knowledge Required', content: 'This course starts from absolute basics' },
    { icon: 'clock', title: 'Time Commitment of 1-2 Hours/Day', content: 'Consistent practice is key to mastering HTML' },
    { icon: 'laptop', title: 'A Computer with Browser', content: 'Any modern web browser and a text editor' },
  ],
};
