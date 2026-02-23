// --- DATA STRUCTURES ---

export type TabName = 'Features' | 'Syllabus' | 'Pre-requisites' | 'FAQs';

export interface FeatureItem {
  iconName: string; // Used for icon mapping
  title: string;
  description: string;
}

export interface ModuleItem {
  title: string;
  subtopics: string[];
}

export interface FaqItem {
  isOpenInImage: boolean;
  q: string;
  a: string;
}

export interface FaqCategory {
  name: string;
  questions: FaqItem[];
}

export const TABS: TabName[] = ['Features', 'Syllabus', 'Pre-requisites', 'FAQs'];

// Data for the Features tab
export const FEATURES_DATA: FeatureItem[] = [
  {
    iconName: 'Video',
    title: '70+ Hours of In-Depth Lectures',
    description: 'Covering both theory and practical implementations in Python.',
  },
  {
    iconName: 'Code',
    title: 'Real-World Machine Learning Projects',
    description: 'Work with real datasets from domains like finance, healthcare, and e-commerce.',
  },
  {
    iconName: 'Lightbulb',
    title: 'Concept + Code Approach',
    description: 'Every algorithm is explained conceptually and implemented step-by-step.',
  },
  {
    iconName: 'Chat',
    title: 'Instant Doubt Support from Experts',
    description: 'Get guidance from mentors experienced in data science and AI research.',
  },
  {
    iconName: 'Medal',
    title: 'Interactive Leaderboard & Milestone Tracking',
    description: 'Stay motivated as you progress from beginner to AI practitioner.',
  },
  {
    iconName: 'Contest',
    title: 'Model-Building Contests',
    description: 'Test your skills by competing in mini ML challenges.',
  },
  {
    iconName: 'Discussion',
    title: 'Post-Project Review Sessions',
    description: 'Analyze your results, optimize models, and learn from expert feedback.',
  },
];
// Data for the Syllabus tab
export const SYLLABUS_DATA: ModuleItem[] = [
  {
    title: 'Module 1: Introduction to Artificial Intelligence',
    subtopics: [
      'What is AI? History & Evolution',
      'AI vs ML vs Deep Learning',
      'Applications of AI in Real World',
      'Overview of AI System Components',
    ],
  },
  {
    title: 'Module 2: Python for AI & ML',
    subtopics: [
      'Python Fundamentals Refresher',
      'Working with NumPy, Pandas, and Matplotlib',
      'Data Cleaning, Preprocessing, and Visualization',
      'Handling Datasets for Machine Learning',
    ],
  },
  {
    title: 'Module 3: Mathematics for ML',
    subtopics: [
      'Linear Algebra (Vectors, Matrices, Eigenvalues)',
      'Probability & Statistics Essentials',
      'Calculus for Optimization',
      'Gradient Descent & Cost Functions',
    ],
  },
  {
    title: 'Module 4: Supervised Learning',
    subtopics: [
      'Linear & Logistic Regression',
      'K-Nearest Neighbors (KNN)',
      'Decision Trees & Random Forests',
      'Support Vector Machines (SVM)',
      'Bias-Variance Tradeoff & Model Evaluation',
    ],
  },
  {
    title: 'Module 5: Unsupervised Learning',
    subtopics: [
      'Clustering (K-Means, Hierarchical)',
      'Dimensionality Reduction (PCA, t-SNE)',
      'Anomaly Detection',
    ],
  },
  {
    title: 'Module 6: Neural Networks & Deep Learning (Introduction)',
    subtopics: [
      'What are Neural Networks?',
      'Activation Functions & Backpropagation',
      'Building Simple Neural Nets using TensorFlow/Keras',
      'Overfitting, Regularization & Dropout',
    ],
  },
  {
    title: 'Module 7: Feature Engineering & Model Tuning',
    subtopics: [
      'Handling Missing Data & Outliers',
      'Feature Scaling, Encoding, and Selection',
      'Hyperparameter Tuning (Grid & Random Search)',
      'Cross Validation Techniques',
    ],
  },
  {
    title: 'Module 8: Evaluation Metrics',
    subtopics: [
      'Accuracy, Precision, Recall, F1 Score',
      'ROC-AUC, Confusion Matrix',
      'Regression Metrics (RMSE, MAE, R²)',
    ],
  },
  {
    title: 'Module 9: Real-World Projects',
    subtopics: [
      'Predicting House Prices',
      'Spam Mail Classification',
      'Customer Segmentation using Clustering',
      'Handwritten Digit Recognition',
    ],
  },
  {
    title: 'Module 10: The Road Ahead',
    subtopics: [
      'What’s Next? Deep Learning, NLP & Computer Vision',
      'AI Ethics, Fairness & Bias',
      'How to Build an AI Portfolio',
    ],
  },
];
// Data for the FAQs tab
export const FAQS_DATA: FaqCategory[] = [
  {
    name: 'Course Content',
    questions: [
      {
        q: 'What is the course structure?', a: 'The course is structured into self-contained modules, each covering a major topic. Modules consist of recorded lectures, practice problems, and internal contests.',
        isOpenInImage: false
      },
      {
        q: 'How many hours of content does each level include?', a: '40+ hours of Recorded Lectures. 20+ hours of Recorded Problem Solving Videos.',
        isOpenInImage: false
      },
      {
        q: 'What are the speaking languages used throughout the course?', a: 'The primary language of instruction is English, but technical terms are clearly explained.',
        isOpenInImage: false
      },
      {
        q: 'Is the course programming language dependent?', a: 'The core concepts are language-agnostic, but all code examples and solutions are provided in C++.',
        isOpenInImage: false
      },
      {
        q: 'How long are the lecture recordings?', a: 'Most lecture recordings are between 15 and 45 minutes long, designed for optimal focus and retention.',
        isOpenInImage: false
      },
    ],
  },
  {
    name: 'Doubt Support',
    questions: [
      {
        q: 'How is the instant doubt support provided?', a: 'Doubt support is provided through a dedicated Telegram group with high-rated coders, ensuring quick and accurate responses.',
        isOpenInImage: false
      },
      {
        q: 'What is the allowed difficulty of doubts?', a: 'Allowed difficulty of doubts is up to 1300 rating on Codeforces. For higher difficulty problems, you should learn the concepts first.',
        isOpenInImage: false
      },
    ],
  },
  {
    name: 'Miscellaneous',
    questions: [
      {
        q: 'Will I get a certificate?', a: 'Yes, a course completion certificate is provided upon successfully finishing all modules and major assignments.',
        isOpenInImage: false
      },
      {
        q: 'Is there a refund policy?', a: 'A full refund is available within 7 days of enrollment, provided you have not accessed more than 2 modules.',
        isOpenInImage: false
      },
    ],
  },
  {
    name: 'Payment',
    questions: [
      {
        q: 'What payment methods are accepted?', a: 'We accept all major credit cards, PayPal, and UPI payments.',
        isOpenInImage: false
      },
    ],
  },
  {
    name: 'Practice Problems',
    questions: [
      {
        q: 'Where are the practice problems hosted?', a: 'Practice problems are hosted on our internal platform and on popular online judges like Codeforces and CodeChef.',
        isOpenInImage: false
      },
    ],
  },
  {
    name: 'Validity',
    questions: [
      {
        q: 'What is the validity period for course access?', a: 'You get lifetime access to all course materials and future updates.',
        isOpenInImage: false
      },
    ],
  },
];
